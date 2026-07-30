"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./WhyChooseTrust.css";

const cardLayout = [
  { id: "strategy", icon: "/assets/images/home-13/why-choose-2/strategy.png" },
  { id: "custom", icon: "/assets/images/home-13/why-choose-2/custom-solutions.png" },
  { id: "growth", icon: "/assets/images/home-13/why-choose-2/growth.png" },
  { id: "partnership", icon: "/assets/images/home-13/why-choose-2/partnership.png" },
];

export default function WhyChooseTrust() {
  const { t } = useTranslation("common");

  return (
    <section className="home13-trust2">
      <div className="home13-trust2__inner">
        <header className="home13-trust2__header">
          <p className="home13-trust2__eyebrow">{t("home13.whyChoose.eyebrow")}</p>
          <span className="home13-trust2__rule" aria-hidden="true" />
          <h2 className="home13-trust2__title">
            {t("home13.trust.title")} <span className="home13-trust2__accent">Alva Tech</span>
          </h2>
        </header>

        <div className="home13-trust2__grid">
          {cardLayout.map((card) => (
            <article key={card.id} className="home13-trust2__card">
              <span className="home13-trust2__icon">
                <Image src={card.icon} alt="" width={32} height={32} />
              </span>
              <h3 className="home13-trust2__card-title">
                {t(`home13.whyChoose.items.${card.id}.title`)}
              </h3>
              <span className="home13-trust2__line" aria-hidden="true" />
              <p className="home13-trust2__card-text">
                {t(`home13.whyChoose.items.${card.id}.text`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
