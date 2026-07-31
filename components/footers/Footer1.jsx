"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { footerLinks, socialLinks } from "@/data/footer";
import "./Footer1.css";
import { openCookieSettings } from "@/utlis/cookieConsent";

export default function Footer1() {
  const { t, i18n } = useTranslation("common");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLanguageLabel =
    i18n.language === "sv" ? t("footer.languageSwedish") : t("footer.languageEnglish");

  return (
    <footer
      id="uc-footer"
      className={`uc-footer panel ${langMenuOpen ? "overflow-visible" : "overflow-hidden"}`}
    >
      <div
        className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white"
        style={{ backgroundColor: "rgba(220, 234, 206, 0.5)", color: "#434243" }}
      >
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8" style={{ paddingTop: 26 }}>
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4" style={{ rowGap: 20 }}>
                <div className="col-12 lg:col-3">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link href={`/`}>
                        <Image
                          className="w-120px"
                          alt="Alvatech"
                          src="/assets/images/common/main-logo.svg"
                          width="140"
                          height="60"
                          style={{ width: "140px", height: "auto" }}
                        />
                      </Link>
                      <p style={{ maxWidth: 340, margin: 0, lineHeight: 1.5, fontSize: 16 }}>
                        {t("footer.description")}
                      </p>
                      <ul
                        className="uc-footer-contact"
                        style={{ maxWidth: 340, color: "#434243", fontSize: 16 }}
                      >
                        <li>
                          <a href="tel:+46704964569" style={{ color: "#434243" }}>
                            +46 70 496 45 69
                          </a>
                        </li>
                        <li>{t("footer.address")}</li>
                        <li>
                          <a href="mailto:sales@alvatech.se" style={{ color: "#434243" }}>
                            sales@alvatech.se
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {footerLinks.map((section, index) => (
                  <div key={index} className={section.colClass}>
                    {section.headingKey ? (
                      <h4 className="uc-footer-heading">
                        {section.headingHref ? (
                          <Link href={section.headingHref} style={{ color: "#1c1f25" }}>
                            {t(`footer.groups.${section.headingKey}`)}
                          </Link>
                        ) : (
                          t(`footer.groups.${section.headingKey}`)
                        )}
                      </h4>
                    ) : (
                      // Keeps headingless columns' links aligned with the ones
                      // sitting under a heading.
                      <div className="uc-footer-heading" aria-hidden="true">
                        &nbsp;
                      </div>
                    )}
                    <ul className="uc-footer-links">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href} style={{ color: "#434243" }}>
                            {t(`footer.links.${link.labelKey}`)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="uc-footer-bottom panel pt-4 lg:pt-6 border-top dark:text-white"
              style={{ borderTopColor: "#babbbd", marginTop: 10 }}
            >
              <div className="uc-footer-bottom__start">
                <p className="opacity-60" style={{ color: "#434243", marginBottom: 2 }}>
                  {t("footer.rights", { year: new Date().getFullYear() })}
                </p>
                <button
                  type="button"
                  className="border-0 bg-transparent p-0 fw-medium"
                  style={{ color: "#434243", textDecoration: "underline" }}
                  onClick={openCookieSettings}
                >
                  {t("footer.links.cookieSettings")}
                </button>
              </div>
              <div className="uc-footer-bottom__end">
                <ul className="nav-x gap-2">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        style={{ color: "#434243" }}
                      >
                        <i className={`icon icon-2 ${link.iconClass}`} />
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="vr" style={{ opacity: 0.25, borderColor: "#434243" }} />
                <div className="position-relative z-999" ref={langMenuRef}>
                  <button
                    type="button"
                    className="hstack items-center gap-narrow border-0 bg-transparent p-0"
                    style={{ color: "#434243" }}
                    aria-expanded={langMenuOpen}
                    aria-haspopup="listbox"
                    onClick={() => setLangMenuOpen((open) => !open)}
                  >
                    <i className="unicon-earth icon-1" />
                    <span className="fw-medium">{currentLanguageLabel}</span>
                    <i className="unicon-chevron-down icon-1 opacity-70" />
                  </button>
                  {langMenuOpen ? (
                    <ul
                      className="position-absolute end-0 py-1 rounded-2 bg-white dark:bg-gray-800 shadow-xs border border-gray-100 dark:border-gray-700 list-unstyled m-0 z-999"
                      style={{
                        minWidth: 160,
                        zIndex: 1000,
                        bottom: "100%",
                        top: "auto",
                        marginBottom: 8,
                      }}
                      role="listbox"
                    >
                      <li>
                        <button
                          type="button"
                          className="w-100 text-start border-0 bg-transparent py-2 px-3 small"
                          style={{ color: "#434243" }}
                          onClick={() => {
                            void i18n.changeLanguage("en");
                            setLangMenuOpen(false);
                          }}
                        >
                          {t("footer.languageEnglish")}
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="w-100 text-start border-0 bg-transparent py-2 px-3 small"
                          style={{ color: "#434243" }}
                          onClick={() => {
                            void i18n.changeLanguage("sv");
                            setLangMenuOpen(false);
                          }}
                        >
                          {t("footer.languageSwedish")}
                        </button>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
