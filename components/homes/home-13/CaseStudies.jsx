"use client";

import React, { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useTranslation } from "react-i18next";
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

function getCaseStudyPdf(item, language) {
  const locale = language?.startsWith("sv") ? "sv" : "en";
  return encodeURI(item.pdfs[locale] || item.pdfs.en);
}

export default function CaseStudies() {
  const { t, i18n } = useTranslation("common");
  const titleId = useId();
  const [activeCase, setActiveCase] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!activeCase) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveCase(null);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeCase]);

  const openCase = (item) => {
    setActiveCase({
      name: t(`home13.caseStudies.items.${item.id}.name`),
      href: getCaseStudyPdf(item, i18n.language),
    });
  };

  const closeCase = () => setActiveCase(null);

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
