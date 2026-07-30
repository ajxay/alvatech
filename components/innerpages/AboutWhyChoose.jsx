"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./AboutWhyChoose.css";

const cardLayout = [
  { id: "strategy", icon: "/assets/images/about/why-choose/strategy.png" },
  { id: "custom", icon: "/assets/images/about/why-choose/custom-solutions.png" },
  { id: "growth", icon: "/assets/images/about/why-choose/growth.png" },
  { id: "partnership", icon: "/assets/images/about/why-choose/partnership.png" },
];

export default function AboutWhyChoose() {
  const { t } = useTranslation("common");

  return (
    <div
      id="about_why_choose"
      className="about-why-choose section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <header
                className="about-why-choose__header"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <p className="about-why-choose__eyebrow">
                  {t("home13.whyChoose.eyebrow")}
                </p>
                <h2 className="about-trust__title m-0">
                  {t("pages.about.trustTitle")}{" "}
                  <span className="about-trust__accent">Alva Tech</span>
                </h2>
              </header>

              <div
                className="about-why-choose__grid"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {cardLayout.map((card) => (
                  <article key={card.id} className="about-why-choose__card">
                    <div className="about-why-choose__icon">
                      <Image src={card.icon} alt="" width={136} height={136} />
                    </div>
                    <span className="about-why-choose__rule" aria-hidden="true" />
                    <div className="about-why-choose__body">
                      <h3 className="about-why-choose__card-title">
                        {t(`home13.whyChoose.items.${card.id}.title`)}
                      </h3>
                      <p className="about-why-choose__card-text">
                        {t(`home13.whyChoose.items.${card.id}.text`)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
