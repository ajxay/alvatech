import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "@/locales/en/common.json";
import svCommon from "@/locales/sv/common.json";
import enServicePages from "@/locales/en/servicePages.json";
import svServicePages from "@/locales/sv/servicePages.json";

const STORAGE_KEY = "alvatech-locale";

/** Default locale is Swedish. `I18nProvider` may override from `localStorage` after mount if the user chose another language. */
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "sv",
    fallbackLng: "en",
    supportedLngs: ["en", "sv"],
    resources: {
      en: { common: { ...enCommon, servicePages: enServicePages } },
      sv: { common: { ...svCommon, servicePages: svServicePages } },
    },
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

  i18n.on("languageChanged", (lng) => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lng);
      const url = new URL(window.location.href);
      if (lng === "en" || lng === "sv") {
        url.searchParams.set("lang", lng);
        window.history.replaceState({}, "", url);
      }
    } catch {
      // ignore
    }
  });
}

export default i18n;
export { STORAGE_KEY };
