"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./AboutMission.css";

const cards = [
  {
    id: "mission",
    icon: "/assets/images/about/mission-icon.png",
  },
  {
    id: "vision",
    icon: "/assets/images/about/vision-icon.png",
  },
];

export default function AboutMission() {
  const { t } = useTranslation("common");

  return (
    <div id="about_mission" className="about-mission section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="about-trust__title m-0"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                {t("pages.about.trustTitle")}{" "}
                <span className="about-trust__accent">Alva Tech</span>
              </h2>
              <div
                className="about-mission__grid"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {cards.map((card) => (
                  <article key={card.id} className="about-mission__card">
                    <div className="about-mission__icon">
                      <Image src={card.icon} alt="" width={138} height={125} />
                    </div>
                    <h3 className="about-mission__title">
                      {t(`pages.about.mission.${card.id}.title`)}
                    </h3>
                    <span className="about-mission__rule" aria-hidden="true" />
                    <p className="about-mission__text">
                      {t(`pages.about.mission.${card.id}.text`)}
                    </p>
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
