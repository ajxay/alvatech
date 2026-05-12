"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./Features.css";

const cardLayout = [
  {
    id: "ecommerce",
    image: "/assets/images/home-13/ecommerce-store.png",
    mediaBg:
      "radial-gradient(circle at 50% 50%, rgba(220,234,206,1) 0%, rgba(243,248,239,1) 100%)",
  },
  {
    id: "marketing",
    image: "/assets/images/home-13/performance-marketing.png",
    mediaBg:
      "radial-gradient(circle at 50% 50%, rgba(253,248,244,1) 0%, rgba(255,250,246,1) 100%)",
  },
  {
    id: "systems",
    image: "/assets/images/home-13/smart-systems.png",
    mediaBg:
      "radial-gradient(circle at 50% 50%, rgba(245,249,251,1) 0%, rgba(232,234,237,1) 100%)",
  },
];

export default function Features() {
  const { t } = useTranslation("common");

  return (
    <section
      id="smart_features"
      className="features-thirteen section panel overflow-hidden"
    >
      <div className="features-thirteen__outer panel py-5 md:py-7 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="features-thirteen__inner panel">
            <header
              className="features-thirteen__header"
              data-anime="onview: -200; targets: >*; translateY: [32, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="features-thirteen__title m-0">
                {t("home13.features.sectionTitle")}
              </h2>
              <p className="features-thirteen__subtitle m-0">
                {t("home13.features.sectionSubtitle")}
              </p>
            </header>

            <div
              className="features-thirteen__grid"
              data-uc-scrollspy="target: >*; delay: 200; cls: uc-animation-slide-bottom-medium"
            >
              {cardLayout.map((card) => {
                const base = `home13.features.cards.${card.id}`;
                const title = t(`${base}.title`);
                return (
                <article key={card.id} className="features-thirteen__card">
                  <div
                    className="features-thirteen__media"
                    style={{ background: card.mediaBg,}}
                  >
                    <div className="features-thirteen__media-inner">
                      <Image
                        className="features-thirteen__image"
                        src={card.image}
                        alt={t(`${base}.alt`)}
                        width={520}
                        height={520}
                      />
                    </div>
                  </div>
                  <div className="features-thirteen__body">
                    <h3 className="features-thirteen__card-title m-0">
                      {title}
                    </h3>
                    <p className="features-thirteen__card-desc m-0">
                      {t(`${base}.description`)}
                    </p>
                  </div>
                </article>
              );})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
