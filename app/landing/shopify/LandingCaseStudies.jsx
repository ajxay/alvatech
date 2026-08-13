"use client";

import { useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import CaseStudies from "@/components/homes/home-13/CaseStudies";

/**
 * The homepage case-studies section, reused as-is.
 *
 * That component pulls its copy from i18n and the site defaults to Swedish,
 * but this landing page is an English-only ads page with every other string
 * hardcoded in English. Rendering it under a clone of the i18n instance pinned
 * to English keeps the page from mixing languages, without touching the
 * shared component or the visitor's own language choice elsewhere.
 */
export default function LandingCaseStudies() {
  const englishI18n = useMemo(() => i18n.cloneInstance({ lng: "en" }), []);

  return (
    <I18nextProvider i18n={englishI18n}>
      <CaseStudies />
    </I18nextProvider>
  );
}
