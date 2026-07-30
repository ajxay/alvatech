"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "./HeroStats.css";

const statsLayout = [
  { id: "shopifyStores", value: "100+" },
  { id: "storeMigrations", value: "50+" },
  { id: "salesforceImplementations", value: "70+" },
  { id: "ecommerceWebsites", value: "300+" },
];

export default function HeroStats() {
  const { t } = useTranslation("common");

  return (
    <section className="home13-hero-stats">
      <div className="container sm:max-w-lg xl:max-w-xl">
        <h2 className="home13-hero-stats__title">
          {t("home13.heroStats.title")}
        </h2>
        <div className="home13-hero-stats__card">
          {statsLayout.map((item, idx) => (
            <div key={item.id} className="home13-hero-stats__item">
              <strong>{item.value}</strong>
              <span className="home13-hero-stats__label">
                {t(`home13.heroStats.${item.id}`)}
              </span>
              {idx !== statsLayout.length - 1 ? (
                <span
                  className="home13-hero-stats__divider"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
