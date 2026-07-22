/**
 * Browser E2E: verify cookies + GTM only after approval.
 * Run with server up: node scripts/e2e-cookie-consent.mjs
 */
import { chromium } from "playwright";
import assert from "node:assert/strict";

const BASE = process.env.BASE_URL || "http://127.0.0.1:4130";

function parseConsentCookie(cookies) {
  const hit = cookies.find((c) => c.name === "alvatech_cookie_consent");
  if (!hit) return null;
  return JSON.parse(decodeURIComponent(hit.value));
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();

let failed = false;
async function step(name, fn) {
  try {
    await fn();
    console.log(`✓ ${name}`);
  } catch (err) {
    failed = true;
    console.error(`✗ ${name}`);
    console.error(err);
  }
}

await step("homepage loads and shows cookie banner", async () => {
  await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".cookie-consent", { timeout: 15000 });
});

await step("before consent: no consent cookie and no GTM script", async () => {
  const cookies = await context.cookies();
  assert.equal(
    cookies.find((c) => c.name === "alvatech_cookie_consent"),
    undefined,
    "consent cookie must not exist before choice"
  );

  const gtmCount = await page.locator('script[src*="googletagmanager.com/gtm.js"]').count();
  assert.equal(gtmCount, 0, "GTM must not load before consent");

  const optional = cookies.filter(
    (c) => c.name.startsWith("_ga") || c.name === "_gid" || c.name === "_fbp"
  );
  assert.equal(optional.length, 0, "no analytics cookies before consent");
});

await step("accept all: writes consent cookie and loads GTM", async () => {
  await page.locator(".cookie-consent__btn--primary").filter({ hasText: /Accept|Acceptera/i }).click();
  await page.waitForTimeout(1500);

  const cookies = await context.cookies();
  const consent = parseConsentCookie(cookies);
  assert.ok(consent, "consent cookie must be set after accept");
  assert.equal(consent.analytics, true);
  assert.equal(consent.marketing, true);
  assert.equal(consent.necessary, true);
  assert.ok(consent.timestamp);

  await page.waitForFunction(
    () =>
      Boolean(window.__alvatechGtmLoaded) ||
      Boolean(document.querySelector('script[src*="googletagmanager.com/gtm.js"]')),
    { timeout: 10000 }
  );
});

// Fresh context for reject path
const context2 = await browser.newContext();
const page2 = await context2.newPage();

await step("reject optional: consent cookie saved without analytics", async () => {
  await page2.goto(BASE + "/", { waitUntil: "domcontentloaded" });
  await page2.waitForSelector(".cookie-consent", { timeout: 15000 });
  await page2.locator(".cookie-consent__btn--secondary").filter({ hasText: /Reject|Avvisa/i }).click();
  await page2.waitForTimeout(800);

  const cookies = await context2.cookies();
  const consent = parseConsentCookie(cookies);
  assert.ok(consent, "preference cookie still saved on reject");
  assert.equal(consent.analytics, false);
  assert.equal(consent.marketing, false);

  const gtmCount = await page2.locator('script[src*="googletagmanager.com/gtm.js"]').count();
  assert.equal(gtmCount, 0, "GTM must not load after reject");
  assert.equal(await page2.evaluate(() => Boolean(window.__alvatechGtmLoaded)), false);
});

await browser.close();

if (failed) {
  console.error("\nE2E cookie consent tests FAILED");
  process.exit(1);
}
console.log("\nAll E2E cookie consent tests passed");
