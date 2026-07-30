"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./WhyChoose.css";

const cardLayout = [
  {
    id: "strategy",
    number: "01",
    icon: "/assets/images/home-13/why-choose/strategy.png",
    iconWidth: 44,
    iconHeight: 44,
  },
  {
    id: "custom",
    number: "02",
    icon: "/assets/images/home-13/why-choose/custom-solutions.png",
    iconWidth: 44,
    iconHeight: 44,
  },
  {
    id: "growth",
    number: "03",
    icon: "/assets/images/home-13/why-choose/growth.png",
    iconWidth: 44,
    iconHeight: 45,
  },
  {
    id: "partnership",
    number: "04",
    icon: "/assets/images/home-13/why-choose/partnership.png",
    iconWidth: 44,
    iconHeight: 44,
  },
];

export default function WhyChoose() {
  const { t } = useTranslation("common");

  return (
    <section className="home13-why">
      <div className="home13-why__inner">
        <header className="home13-why__header">
          <p className="home13-why__eyebrow">{t("home13.whyChoose.eyebrow")}</p>
          <span className="home13-why__rule" aria-hidden="true" />
          <h2 className="home13-why__title">{t("home13.whyChoose.title")}</h2>
        </header>

        <div className="home13-why__grid">
          {cardLayout.map((card) => {
            const title = t(`home13.whyChoose.items.${card.id}.title`);
            return (
              <article key={card.id} className="home13-why__card">
                <div className="home13-why__meta">
                  <span className="home13-why__number">{card.number}</span>
                  <span className="home13-why__line" aria-hidden="true" />
                </div>
                <div className="home13-why__icon">
                  <Image
                    src={card.icon}
                    alt=""
                    width={card.iconWidth}
                    height={card.iconHeight}
                  />
                </div>
                <h3 className="home13-why__card-title">{title}</h3>
                <p className="home13-why__card-text">
                  {t(`home13.whyChoose.items.${card.id}.text`)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
