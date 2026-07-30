"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "./ProcessSteps.css";

const CALENDLY_URL = "https://calendly.com/nikhil-k-alvatech/30min";

const steps = ["discover", "strategy", "design", "develop", "integrate", "grow"];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33333M12.6667 8L8.00001 12.6667"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProcessSteps() {
  const { t } = useTranslation("common");

  return (
    <section className="home13-process">
      <div className="home13-process__inner">
        <header className="home13-process__header">
          <p className="home13-process__eyebrow">{t("home13.process.eyebrow")}</p>
          <span className="home13-process__rule" aria-hidden="true" />
          <h2 className="home13-process__title">{t("home13.process.title")}</h2>
        </header>

        <div className="home13-process__list">
          {steps.map((step, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <article key={step} className="home13-process__card">
                <div className="home13-process__content">
                  <div className="home13-process__meta">
                    <span className="home13-process__badge">
                      {t("home13.process.stepLabel", { number })}
                    </span>
                  </div>
                  <h3 className="home13-process__card-title">
                    {t(`home13.process.steps.${step}.title`)}
                  </h3>
                  <p className="home13-process__card-text">
                    {t(`home13.process.steps.${step}.text`)}
                  </p>
                  <div className="home13-process__actions">
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="home13-process__btn home13-process__btn--solid"
                    >
                      {t("home13.process.consultBtn")}
                      <ArrowIcon />
                    </a>
                    <a href="/contact-us" className="home13-process__btn home13-process__btn--outline">
                      {t("home13.process.chatBtn")}
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
                <div className="home13-process__media" aria-hidden="true">
                  <span className="home13-process__number">{number}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
