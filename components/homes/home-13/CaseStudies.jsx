"use client";

import React, { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { hasLeadAccess, markLeadSubmitted } from "@/utlis/leadUnlock";
import "./CaseStudies.css";

const caseStudies = [
  {
    id: "geggamoja",
    image: "/assets/images/home-13/case-studies/geggamoja.png",
    pdfs: {
      en: "/assets/pdfs/Geggamoja English.pdf",
      sv: "/assets/pdfs/Geggamoja Swedish.pdf",
    },
  },
  {
    id: "bonbelle",
    image: "/assets/images/home-13/case-studies/bonbelle.png",
    pdfs: {
      en: "/assets/pdfs/Bonbelle English.pdf",
      sv: "/assets/pdfs/Bonbelle Swedish.pdf",
    },
  },
  {
    id: "reirei",
    image: "/assets/images/home-13/case-studies/reirei.png",
    pdfs: {
      en: "/assets/pdfs/ReiRei English.pdf",
      sv: "/assets/pdfs/ReiRei Swedish.pdf",
    },
  },
];

const COUNTRY_CODES = [
  { code: "+46", label: "SE +46" },
  { code: "+47", label: "NO +47" },
  { code: "+45", label: "DK +45" },
  { code: "+358", label: "FI +358" },
  { code: "+44", label: "UK +44" },
  { code: "+49", label: "DE +49" },
  { code: "+91", label: "IN +91" },
  { code: "+1", label: "US/CA +1" },
  { code: "+33", label: "FR +33" },
  { code: "+31", label: "NL +31" },
];

const CUSTOM_COUNTRY_CODE = "custom";

function getCaseStudyPdf(item, language) {
  const locale = language?.startsWith("sv") ? "sv" : "en";
  return encodeURI(item.pdfs[locale] || item.pdfs.en);
}

function splitName(fullName) {
  const trimmed = fullName.trim().replace(/\s+/g, " ");
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) return { firstName: trimmed, lastName: "" };
  return {
    firstName: trimmed.slice(0, spaceIndex),
    lastName: trimmed.slice(spaceIndex + 1),
  };
}

export default function CaseStudies() {
  const { t, i18n } = useTranslation("common");
  const titleId = useId();
  const gateTitleId = useId();
  const [activeCase, setActiveCase] = useState(null);
  const [pendingCase, setPendingCase] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gateError, setGateError] = useState("");
  const [countryCode, setCountryCode] = useState("+46");
  const [customCountryCode, setCustomCountryCode] = useState("+");
  const isCustomCountryCode = countryCode === CUSTOM_COUNTRY_CODE;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!activeCase && !pendingCase) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveCase(null);
        setPendingCase(null);
        setGateError("");
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeCase, pendingCase]);

  const buildCasePayload = (item) => ({
    name: t(`home13.caseStudies.items.${item.id}.name`),
    href: getCaseStudyPdf(item, i18n.language),
  });

  const openCase = (item) => {
    const payload = buildCasePayload(item);
    if (hasLeadAccess()) {
      setActiveCase(payload);
      return;
    }
    setGateError("");
    setPendingCase(payload);
  };

  const closeCase = () => setActiveCase(null);

  const closeGate = () => {
    if (isSubmitting) return;
    setPendingCase(null);
    setGateError("");
    setCountryCode("+46");
    setCustomCountryCode("+");
  };

  function resolveCountryCode() {
    if (!isCustomCountryCode) return countryCode;
    const cleaned = customCountryCode.trim().replace(/\s+/g, "");
    if (!cleaned) return "";
    return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
  }

  async function handleGateSubmit(event) {
    event.preventDefault();
    if (isSubmitting || !pendingCase) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const { firstName, lastName } = splitName(
      formData.get("name")?.toString() || "",
    );
    const email = formData.get("email")?.toString() || "";
    const phoneNumber = (formData.get("phone")?.toString() || "").replace(
      /\s+/g,
      "",
    );
    const selectedCode = resolveCountryCode();
    const phone = `${selectedCode} ${phoneNumber}`.trim();

    if (!firstName || !email || !phoneNumber || !selectedCode || selectedCode === "+") {
      setGateError(t("home13.caseStudies.gate.error"));
      return;
    }

    try {
      setIsSubmitting(true);
      setGateError("");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message: `Requested case study: ${pendingCase.name}`,
          services: [],
          source: "case-study-gate",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit lead");
      }

      markLeadSubmitted();
      setActiveCase(pendingCase);
      setPendingCase(null);
      form.reset();
      setCountryCode("+46");
      setCustomCountryCode("+");
    } catch (_error) {
      setGateError(t("home13.caseStudies.gate.error"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="home13-cases">
      <div className="home13-cases__inner">
        <header className="home13-cases__head">
          <p className="home13-cases__eyebrow">{t("home13.caseStudies.eyebrow")}</p>
          <span className="home13-cases__rule" aria-hidden="true" />
          <h2 className="home13-cases__title">{t("home13.caseStudies.title")}</h2>
        </header>

        <div className="home13-cases__grid">
          {caseStudies.map((item) => {
            const name = t(`home13.caseStudies.items.${item.id}.name`);
            return (
              <article key={item.id} className="home13-cases__card">
                <button
                  type="button"
                  className="home13-cases__media"
                  aria-label={name}
                  onClick={() => openCase(item)}
                >
                  <Image src={item.image} alt={name} width={618} height={394} />
                </button>
                <div className="home13-cases__body">
                  <span className="home13-cases__badge">
                    <Image
                      src="/assets/images/home-13/case-studies/shopify-plus-badge.png"
                      alt=""
                      width={16}
                      height={14}
                    />
                    <span>{t("home13.caseStudies.badge")}</span>
                  </span>
                  <h3 className="home13-cases__name">{name}</h3>
                  <p className="home13-cases__desc">
                    {t(`home13.caseStudies.items.${item.id}.desc`)}
                  </p>
                  <button
                    type="button"
                    className="home13-cases__link"
                    onClick={() => openCase(item)}
                  >
                    <span>{t("home13.caseStudies.viewCase")}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8H13M9 12L13 8L9 4"
                        fill="none"
                        stroke="#84BA41"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {mounted &&
        pendingCase &&
        createPortal(
          <div
            className="home13-cases-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby={gateTitleId}
            onClick={closeGate}
          >
            <div
              className="home13-cases-gate"
              onClick={(event) => event.stopPropagation()}
            >
              <header className="home13-cases-gate__header">
                <div>
                  <h3 id={gateTitleId} className="home13-cases-gate__title">
                    {t("home13.caseStudies.gate.title")}
                  </h3>
                  <p className="home13-cases-gate__subtitle">
                    {t("home13.caseStudies.gate.subtitle")}
                  </p>
                </div>
                <button
                  type="button"
                  className="home13-cases-lightbox__close"
                  aria-label={t("home13.caseStudies.close")}
                  onClick={closeGate}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M5 5L15 15M15 5L5 15"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </header>

              <form className="home13-cases-gate__form" onSubmit={handleGateSubmit}>
                <label className="home13-cases-gate__field">
                  <span>{t("home13.caseStudies.gate.name")}</span>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("home13.caseStudies.gate.namePlaceholder")}
                    required
                    autoComplete="name"
                  />
                </label>

                <label className="home13-cases-gate__field">
                  <span>{t("home13.caseStudies.gate.email")}</span>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("home13.caseStudies.gate.emailPlaceholder")}
                    required
                    autoComplete="email"
                  />
                </label>

                <div
                  className={`home13-cases-gate__phone${
                    isCustomCountryCode
                      ? " home13-cases-gate__phone--custom"
                      : ""
                  }`}
                >
                  <label className="home13-cases-gate__field">
                    <span>{t("home13.caseStudies.gate.countryCode")}</span>
                    <select
                      name="countryCode"
                      value={countryCode}
                      onChange={(event) => setCountryCode(event.target.value)}
                      required
                    >
                      {COUNTRY_CODES.map((item) => (
                        <option key={item.code} value={item.code}>
                          {item.label}
                        </option>
                      ))}
                      <option value={CUSTOM_COUNTRY_CODE}>
                        {t("home13.caseStudies.gate.otherCustom")}
                      </option>
                    </select>
                  </label>
                  {isCustomCountryCode ? (
                    <label className="home13-cases-gate__field">
                      <span>{t("home13.caseStudies.gate.customCode")}</span>
                      <input
                        type="text"
                        name="customCountryCode"
                        value={customCountryCode}
                        onChange={(event) =>
                          setCustomCountryCode(event.target.value)
                        }
                        placeholder={t(
                          "home13.caseStudies.gate.customCodePlaceholder",
                        )}
                        required
                        inputMode="tel"
                        autoComplete="tel-country-code"
                      />
                    </label>
                  ) : null}
                  <label className="home13-cases-gate__field home13-cases-gate__field--grow">
                    <span>{t("home13.caseStudies.gate.phone")}</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t("home13.caseStudies.gate.phonePlaceholder")}
                      required
                      autoComplete="tel-national"
                      inputMode="tel"
                    />
                  </label>
                </div>

                {gateError ? (
                  <p className="home13-cases-gate__error" role="alert">
                    {gateError}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="home13-cases-gate__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? t("home13.caseStudies.gate.submitting")
                    : t("home13.caseStudies.gate.submit")}
                </button>
              </form>
            </div>
          </div>,
          document.body,
        )}

      {mounted &&
        activeCase &&
        createPortal(
          <div
            className="home13-cases-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={closeCase}
          >
            <div
              className="home13-cases-lightbox__dialog"
              onClick={(event) => event.stopPropagation()}
            >
              <header className="home13-cases-lightbox__header">
                <h3 id={titleId} className="home13-cases-lightbox__title">
                  {activeCase.name}
                </h3>
                <div className="home13-cases-lightbox__actions">
                  <a
                    href={activeCase.href}
                    className="home13-cases-lightbox__open"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("home13.caseStudies.openExternal")}
                  </a>
                  <button
                    type="button"
                    className="home13-cases-lightbox__close"
                    aria-label={t("home13.caseStudies.close")}
                    onClick={closeCase}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M5 5L15 15M15 5L5 15"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </header>
              <div className="home13-cases-lightbox__body">
                <iframe
                  key={activeCase.href}
                  src={activeCase.href}
                  title={activeCase.name}
                  className="home13-cases-lightbox__frame"
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
