"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./About.css";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="panel row child-cols-12 lg:child-cols-6 g-4 xl:g-6 items-center">
              <div>
                <div className="vstack items-start gap-3 lg:gap-4 text-start">
                  <p className="about-hero__eyebrow">{t("pages.about.heroEyebrow")}</p>
                  <span className="about-hero__rule" aria-hidden="true" />
                  <h1 className="h2 sm:h1 lg:display-6 m-0">
                    {t("pages.about.heroTitleLine1")}{" "}
                    {t("pages.about.heroTitleThat")}{" "}
                    <span className="about-hero__accent">
                      {t("pages.about.heroAccent")}
                    </span>
                  </h1>
                  <p className="fs-6 md:fs-5 text-dark dark:text-white text-opacity-70">
                    {t("pages.about.heroBody")}
                  </p>
                  <a
                    href="https://calendly.com/nikhil-k-alvatech/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-hero__button"
                  >
                    {t("pages.about.heroButton")}
                  </a>
                </div>
              </div>
              <div>
                <figure className="panel m-0 rounded-2 overflow-hidden">
                  <Image
                    className="w-100 h-auto"
                    alt={t("pages.about.heroEyebrow")}
                    src="/assets/images/about/hero-graphic.png"
                    width={762}
                    height={604}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
