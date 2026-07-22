export const COOKIE_CONSENT_KEY = "alvatech_cookie_consent";
export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_EVENT = "alvatech:cookie-consent-changed";
export const COOKIE_SETTINGS_EVENT = "alvatech:open-cookie-settings";

/** Max age for the consent preference cookie (1 year). */
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export const defaultConsent = {
  version: COOKIE_CONSENT_VERSION,
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: null,
};

/** Known third-party / analytics cookie name patterns to clear when not approved. */
const OPTIONAL_COOKIE_PATTERNS = [
  /^_ga/,
  /^_gid$/,
  /^_gat/,
  /^_gcl_/,
  /^_gac_/,
  /^_gtm/,
  /^_dc_gtm_/,
  /^IDE$/,
  /^NID$/,
  /^_fbp$/,
  /^_fbc$/,
  /^fr$/,
  /^_tt_/,
  /^_pin_/,
  /^__utm/,
];

function canUseDom() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function readRawCookie(name) {
  if (!canUseDom()) return null;
  const encodedName = `${encodeURIComponent(name)}=`;
  const parts = document.cookie.split("; ");
  for (const part of parts) {
    if (part.startsWith(encodedName)) {
      return decodeURIComponent(part.slice(encodedName.length));
    }
  }
  return null;
}

function writeRawCookie(name, value, maxAgeSeconds = CONSENT_MAX_AGE_SECONDS) {
  if (!canUseDom()) return;
  const secure =
    typeof window !== "undefined" && window.location?.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax${secure}`;
}

function deleteRawCookie(name) {
  if (!canUseDom()) return;
  const expire = "Thu, 01 Jan 1970 00:00:00 GMT";
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`];
  // Also try stripping www.
  if (host.startsWith("www.")) {
    domains.push(host.slice(4), `.${host.slice(4)}`);
  }

  for (const domain of domains) {
    const domainPart = domain ? `; Domain=${domain}` : "";
    document.cookie = `${encodeURIComponent(
      name
    )}=; Path=/; Expires=${expire}; SameSite=Lax${domainPart}`;
  }
}

function listCookieNames() {
  if (!canUseDom() || !document.cookie) return [];
  return document.cookie
    .split("; ")
    .map((part) => decodeURIComponent(part.split("=")[0] || ""))
    .filter(Boolean);
}

function parseConsent(raw) {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== COOKIE_CONSENT_VERSION) return null;
    if (!parsed.timestamp) return null;
    return {
      ...defaultConsent,
      ...parsed,
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

/**
 * Clears analytics/marketing cookies that are not approved.
 * Always keeps the consent preference cookie itself.
 */
export function clearDisallowedCookies(consent) {
  if (!canUseDom()) return;

  const allowAnalytics = Boolean(consent?.analytics);
  const allowMarketing = Boolean(consent?.marketing);

  if (allowAnalytics && allowMarketing) return;

  for (const name of listCookieNames()) {
    if (name === COOKIE_CONSENT_KEY) continue;

    const isAnalyticsLike =
      OPTIONAL_COOKIE_PATTERNS.some((re) => re.test(name)) ||
      name.startsWith("_ga") ||
      name.includes("gat");

    const isMarketingLike =
      name.startsWith("_fb") ||
      name === "fr" ||
      name.startsWith("_tt_") ||
      name.startsWith("_pin_");

    if (!allowAnalytics && isAnalyticsLike) {
      deleteRawCookie(name);
    }
    if (!allowMarketing && isMarketingLike) {
      deleteRawCookie(name);
    }
    // If both optional categories are off, wipe all matching optional patterns.
    if (!allowAnalytics && !allowMarketing && isAnalyticsLike) {
      deleteRawCookie(name);
    }
  }
}

export function getCookieConsent() {
  if (!canUseDom()) return null;

  const fromCookie = parseConsent(readRawCookie(COOKIE_CONSENT_KEY));
  if (fromCookie) return fromCookie;

  try {
    const fromStorage = parseConsent(
      window.localStorage.getItem(COOKIE_CONSENT_KEY)
    );
    if (fromStorage) {
      // Migrate older localStorage-only decisions into a real cookie.
      writeRawCookie(COOKIE_CONSENT_KEY, JSON.stringify(fromStorage));
      return fromStorage;
    }
  } catch {
    // ignore storage errors
  }

  return null;
}

export function hasCookieConsentDecision() {
  return Boolean(getCookieConsent()?.timestamp);
}

/**
 * Persists the user's choice as a first-party cookie (and localStorage mirror).
 * Optional tracking cookies are only enabled by loading GTM after analytics=true.
 */
export function saveCookieConsent(partial) {
  if (!canUseDom()) return null;

  const consent = {
    ...defaultConsent,
    ...partial,
    necessary: true,
    version: COOKIE_CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    analytics: Boolean(partial?.analytics),
    marketing: Boolean(partial?.marketing),
  };

  const serialized = JSON.stringify(consent);

  // Consent preference cookie is necessary — set only after an explicit choice.
  writeRawCookie(COOKIE_CONSENT_KEY, serialized);

  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, serialized);
  } catch {
    // ignore storage errors
  }

  clearDisallowedCookies(consent);

  if (typeof window.dispatchEvent === "function") {
    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, { detail: consent })
    );
  }
  return consent;
}

export function acceptAllCookies() {
  return saveCookieConsent({ analytics: true, marketing: true });
}

export function rejectOptionalCookies() {
  return saveCookieConsent({ analytics: false, marketing: false });
}

export function openCookieSettings() {
  if (!canUseDom()) return;
  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_EVENT));
}

export function hasAnalyticsConsent(consent = getCookieConsent()) {
  return Boolean(consent?.analytics);
}

export function hasMarketingConsent(consent = getCookieConsent()) {
  return Boolean(consent?.marketing);
}

/** Exposed for tests / debugging. */
export const __testables = {
  readRawCookie,
  writeRawCookie,
  deleteRawCookie,
  listCookieNames,
  parseConsent,
  OPTIONAL_COOKIE_PATTERNS,
};
