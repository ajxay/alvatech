"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { STORAGE_KEY } from "@/lib/i18n";

function resolveInitialLocale() {
  try {
    const fromQuery = new URLSearchParams(window.location.search).get("lang");
    if (fromQuery === "sv" || fromQuery === "en") return fromQuery;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "sv" || stored === "en") return stored;
  } catch {
    // ignore
  }
  return null;
}

export default function I18nProvider({ children }) {
  useEffect(() => {
    const locale = resolveInitialLocale();
    if (locale && locale !== i18n.language) {
      void i18n.changeLanguage(locale);
    } else if (locale === "en" || locale === "sv") {
      // Keep URL in sync even when language already matches.
      try {
        const url = new URL(window.location.href);
        if (url.searchParams.get("lang") !== locale) {
          url.searchParams.set("lang", locale);
          window.history.replaceState({}, "", url);
        }
      } catch {
        // ignore
      }
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
