"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function HtmlLang() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lng = i18n.resolvedLanguage || i18n.language || "sv";
    document.documentElement.lang = lng;
  }, [i18n, i18n.language, i18n.resolvedLanguage]);

  useEffect(() => {
    const onChange = (lng) => {
      document.documentElement.lang = lng;
    };
    i18n.on("languageChanged", onChange);
    return () => {
      i18n.off("languageChanged", onChange);
    };
  }, [i18n]);

  return null;
}
