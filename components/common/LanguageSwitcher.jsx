"use client";

import i18n from "@/lib/i18n";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ compact = false }) {
  const { t } = useTranslation("common");

  const handleLanguageChange = (event) => {
    void i18n.changeLanguage(event.target.value);
  };

  return (
    <label className={`hstack gap-narrow m-0 ${compact ? "fs-8" : "fs-7"}`}>
      <span className="opacity-70">{t("labels.language")}</span>
      <select
        aria-label={t("labels.language")}
        className="form-select form-select-sm rounded-default bg-white dark:bg-gray-800 dark:text-white"
        value={i18n.language === "sv" ? "sv" : "en"}
        onChange={handleLanguageChange}
        style={{ minWidth: compact ? 96 : 112 }}
      >
        <option value="en">{t("footer.languageEnglish")}</option>
        <option value="sv">{t("footer.languageSwedish")}</option>
      </select>
    </label>
  );
}
