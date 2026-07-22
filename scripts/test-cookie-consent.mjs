/**
 * Node unit tests for cookie consent persistence.
 * Run: node scripts/test-cookie-consent.mjs
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const sourcePath = path.join(projectRoot, "utlis", "cookieConsent.js");
const bundledPath = path.join(os.tmpdir(), `alvatech-cookie-consent-${Date.now()}.mjs`);

// cookieConsent.js is dependency-free ESM — copy as .mjs so Node can import it.
fs.copyFileSync(sourcePath, bundledPath);

// Minimal browser globals for the consent module.
const cookieJar = new Map();

function parseSetCookie(input) {
  const [pair, ...attrs] = input.split(";").map((s) => s.trim());
  const eq = pair.indexOf("=");
  const name = decodeURIComponent(pair.slice(0, eq));
  const value = decodeURIComponent(pair.slice(eq + 1));
  let maxAge = null;
  let expires = null;
  for (const attr of attrs) {
    const [k, v] = attr.split("=").map((s) => s?.trim());
    const key = k.toLowerCase();
    if (key === "max-age") maxAge = Number(v);
    if (key === "expires") expires = v;
  }
  if (maxAge === 0 || (expires && Date.parse(expires) < Date.now())) {
    cookieJar.delete(name);
    return;
  }
  cookieJar.set(name, value);
}

globalThis.window = globalThis;
globalThis.location = { protocol: "http:", hostname: "localhost" };
globalThis.window.location = globalThis.location;
globalThis.window.dispatchEvent = () => true;
globalThis.document = {
  get cookie() {
    return [...cookieJar.entries()]
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join("; ");
  },
  set cookie(value) {
    parseSetCookie(value);
  },
};
globalThis.localStorage = (() => {
  const store = new Map();
  return {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    clear: () => store.clear(),
  };
})();
globalThis.CustomEvent = class CustomEvent extends Event {
  constructor(type, init = {}) {
    super(type, init);
    this.detail = init.detail;
  }
};

const {
  COOKIE_CONSENT_KEY,
  acceptAllCookies,
  rejectOptionalCookies,
  saveCookieConsent,
  getCookieConsent,
  hasCookieConsentDecision,
  hasAnalyticsConsent,
  clearDisallowedCookies,
} = await import(pathToFileURL(bundledPath).href);

function reset() {
  cookieJar.clear();
  localStorage.clear();
  window.__alvatechGtmLoaded = false;
}

let passed = 0;
function test(name, fn) {
  reset();
  try {
    fn();
    passed += 1;
    console.log(`✓ ${name}`);
  } catch (err) {
    console.error(`✗ ${name}`);
    console.error(err);
    process.exitCode = 1;
  }
}

test("before any choice: no consent cookie and no decision", () => {
  assert.equal(getCookieConsent(), null);
  assert.equal(hasCookieConsentDecision(), false);
  assert.equal(cookieJar.has(COOKIE_CONSENT_KEY), false);
  assert.equal(document.cookie, "");
});

test("accept all: writes consent cookie with analytics+marketing true", () => {
  const consent = acceptAllCookies();
  assert.ok(consent.timestamp);
  assert.equal(consent.necessary, true);
  assert.equal(consent.analytics, true);
  assert.equal(consent.marketing, true);
  assert.equal(hasCookieConsentDecision(), true);
  assert.equal(hasAnalyticsConsent(), true);
  assert.ok(cookieJar.has(COOKIE_CONSENT_KEY), "consent cookie must be set");

  const raw = cookieJar.get(COOKIE_CONSENT_KEY);
  const parsed = JSON.parse(raw);
  assert.equal(parsed.analytics, true);
  assert.equal(parsed.marketing, true);

  assert.ok(localStorage.getItem(COOKIE_CONSENT_KEY));
});

test("reject optional: consent cookie saved but analytics/marketing false", () => {
  cookieJar.set("_ga", "GA1.1.123");
  cookieJar.set("_gid", "GA1.1.456");
  cookieJar.set("_fbp", "fb.1.123");

  const consent = rejectOptionalCookies();
  assert.equal(consent.analytics, false);
  assert.equal(consent.marketing, false);
  assert.ok(cookieJar.has(COOKIE_CONSENT_KEY), "preference cookie still saved");
  assert.equal(hasAnalyticsConsent(), false);

  assert.equal(cookieJar.has("_ga"), false, "_ga must be cleared");
  assert.equal(cookieJar.has("_gid"), false, "_gid must be cleared");
  assert.equal(cookieJar.has("_fbp"), false, "_fbp must be cleared");
});

test("custom save: only approved categories stay true", () => {
  cookieJar.set("_ga", "GA1.1.999");
  cookieJar.set("_fbp", "fb.1.999");

  saveCookieConsent({ analytics: true, marketing: false });
  const consent = getCookieConsent();
  assert.equal(consent.analytics, true);
  assert.equal(consent.marketing, false);

  assert.equal(cookieJar.has("_ga"), true);
  assert.equal(cookieJar.has("_fbp"), false);
});

test("clearDisallowedCookies keeps consent cookie", () => {
  acceptAllCookies();
  cookieJar.set("_ga", "x");
  clearDisallowedCookies({ analytics: false, marketing: false });
  assert.ok(cookieJar.has(COOKIE_CONSENT_KEY));
  assert.equal(cookieJar.has("_ga"), false);
});

test("getCookieConsent reads from real cookie", () => {
  const payload = {
    version: 1,
    necessary: true,
    analytics: true,
    marketing: false,
    timestamp: "2026-07-22T00:00:00.000Z",
  };
  cookieJar.set(COOKIE_CONSENT_KEY, JSON.stringify(payload));
  const consent = getCookieConsent();
  assert.equal(consent.analytics, true);
  assert.equal(consent.marketing, false);
});

try {
  fs.unlinkSync(bundledPath);
} catch {
  // ignore
}

if (process.exitCode) {
  console.error("\nCookie consent tests FAILED");
} else {
  console.log(`\nAll ${passed} cookie consent tests passed`);
}
