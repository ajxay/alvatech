"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./TrustedClients.css";

const clientLogos = [
  {
    src: "/assets/images/home-13/trust/review-1563.png",
    alt: "Bonbelle",
    w: 160,
    h: 28,
  },
  {
    src: "/assets/images/home-13/trust/review-asset18.png",
    alt: "Smile",
    w: 120,
    h: 26,
  },
  {
    src: "/assets/images/home-13/trust/logo-tincleton.png",
    alt: "Tincleton Solar",
    w: 140,
    h: 40,
  },
  {
    src: "/assets/images/home-13/trust/logo-nera.png",
    alt: "Nera Electrical & Renewables Ltd.",
    w: 140,
    h: 40,
  },
  {
    src: "/assets/images/home-13/trust/review-asset11.png",
    alt: "Geggamoja",
    w: 180,
    h: 16,
  },
  {
    src: "/assets/images/home-13/trust/review-1564.png",
    alt: "Kit & Kin",
    w: 140,
    h: 24,
  },
  {
    src: "/assets/images/home-13/trust/review-1561.png",
    alt: "Morning Owl",
    w: 84,
    h: 45,
  },
  {
    src: "/assets/images/home-13/trust/review-asset12.png",
    alt: "reirei",
    w: 96,
    h: 33,
  },
];

export default function TrustedClients() {
  const { t } = useTranslation("common");

  return (
    <section className="home13-clients">
      <div className="home13-clients__inner">
        <header className="home13-clients__head">
          <h2 className="home13-clients__title">
            {t("home13.techStack.trustTitle")}
          </h2>
          <span className="home13-clients__rule" aria-hidden="true" />
          <p className="home13-clients__sub">
            {t("home13.techStack.trustReviews")}
          </p>
        </header>

        <div className="home13-clients__grid" role="list">
          {clientLogos.map((logo) => (
            <div key={logo.src} className="home13-clients__cell" role="listitem">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
