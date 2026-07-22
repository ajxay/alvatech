"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  hasAnalyticsConsent,
} from "@/utlis/cookieConsent";

export const GTM_ID = "GTM-TS5CJSRP";

function loadGtmScript() {
  if (typeof window === "undefined") return;
  if (window.__alvatechGtmLoaded) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
  window.dataLayer.push({
    event: "alvatech_consent_update",
    analytics_storage: "granted",
    ad_storage: hasAnalyticsConsent() ? "granted" : "denied",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
  window.__alvatechGtmLoaded = true;
}

export function GoogleTagManager() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const consent = getCookieConsent();
      const allowed = hasAnalyticsConsent(consent);
      setEnabled(allowed);
      if (allowed) {
        loadGtmScript();
      }
    };

    syncConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, syncConsent);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script id="google-tag-manager-consent" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
