"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { STORAGE_KEY } from "@/lib/i18n";

export default function I18nProvider({ children }) {
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if ((stored === "sv" || stored === "en") && stored !== i18n.language) {
        void i18n.changeLanguage(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
