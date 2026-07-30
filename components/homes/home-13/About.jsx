"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "./About.css";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <section className="home13-about">
      <div className="home13-about__grid">
        <div className="home13-about__body">
          <div className="home13-about__content">
            <p className="home13-about__eyebrow">{t("home13.about.eyebrow")}</p>
            <h2 className="home13-about__title">{t("home13.about.title")}</h2>
            <div className="home13-about__copy">
              <p>{t("home13.about.paragraph1")}</p>
              <p>{t("home13.about.paragraph2")}</p>
              <p>{t("home13.about.paragraph3")}</p>
            </div>
            <div className="home13-about__actions">
              <Link href="/about-us" className="home13-about__button">
                {t("home13.about.learnMore")}
              </Link>
              <Link href="/services" className="home13-about__link">
                <span>{t("home13.about.ourServices")}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8H13M9 12L13 8L9 4"
                    stroke="#84BA41"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="home13-about__media">
          <Image
            src="/assets/images/home-13/about-alvatech.png"
            alt={t("home13.about.title")}
            width={776}
            height={653}
            className="home13-about__illustration"
          />
          {/* Figma overlays a #EFF2E6 disc plus the Alvatech wordmark on top of
              the illustration's own centre mark. */}
          <span className="home13-about__badge" aria-hidden="true">
            <Image
              src="/assets/images/common/main-logo.svg"
              alt=""
              width={161}
              height={24}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
