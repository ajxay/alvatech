"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import "./Hero.css";

function DottedArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="1.333" cy="1.333" r="1.333" fill="#111827" />
      <circle cx="4.667" cy="1.333" r="1.333" fill="#111827" />
      <circle cx="4.667" cy="4.667" r="1.333" fill="#111827" />
      <circle cx="8" cy="4.667" r="1.333" fill="#111827" />
      <circle cx="8" cy="8" r="1.333" fill="#111827" />
      <circle cx="11.333" cy="8" r="1.333" fill="#111827" />
      <circle cx="8" cy="11.333" r="1.333" fill="#111827" />
      <circle cx="4.667" cy="11.333" r="1.333" fill="#111827" />
      <circle cx="4.667" cy="14.667" r="1.333" fill="#111827" />
      <circle cx="1.333" cy="14.667" r="1.333" fill="#111827" />
    </svg>
  );
}

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <div
      id="hero_header"
      className="hero-header hero-twelve section panel overflow-hidden position-relative"
    >
      <div className="hero-twelve__bg" aria-hidden="true" />
      <div className="hero-twelve__grid" aria-hidden="true" />

      <div
        className="hero-twelve__arrows hero-twelve__arrows--left"
        aria-hidden="true"
      >
        {Array.from({ length: 11 }).map((_, i) => (
          <span
            key={i}
            className="hero-twelve__arrow"
            style={{ ["--i"]: i }}
          >
            <DottedArrow />
          </span>
        ))}
      </div>

      <div
        className="hero-twelve__arrows hero-twelve__arrows--right"
        aria-hidden="true"
      >
        {Array.from({ length: 11 }).map((_, i) => (
          <span
            key={i}
            className="hero-twelve__arrow"
            style={{ ["--i"]: i }}
          >
            <DottedArrow />
          </span>
        ))}
      </div>

      <div className="hero-twelve__inner">
        <span className="hero-twelve__badge">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2l1.8 6.4L20 10l-6.2 1.6L12 18l-1.8-6.4L4 10l6.2-1.6L12 2z"
              fill="#84BA41"
            />
            <path
              d="M19 14l.8 2.7L22 17.5l-2.2.8L19 21l-.8-2.7L16 17.5l2.2-.8L19 14z"
              fill="#84BA41"
            />
          </svg>
          <span>{t("home13.hero.badge")}</span>
        </span>

        <h1 className="hero-twelve__title" style={{ fontWeight: 300 }}>
          <span
            className="hero-twelve__line hero-twelve__line-1"
            style={{ fontWeight: 300 }}
          >
            {t("home13.hero.titleLine1")}
          </span>
          <span
            className="hero-twelve__line hero-twelve__line-2"
            style={{ fontWeight: 300 }}
          >
            <span className="hero-twelve__text" style={{ fontWeight: 300 }}>
              {t("home13.hero.titleWith")}{" "}
              <span className="hero-twelve__bold" style={{ fontWeight: 700 }}>
                {t("home13.hero.titleSmartSystems")}
              </span>
            </span>
            <span className="hero-twelve__icons" aria-hidden="true">
              <span className="hero-twelve__blob" />
              <span className="hero-twelve__chip hero-twelve__chip--shopify">
                <Image
                  src="/assets/images/home-12/hero-icon-1.png"
                  alt=""
                  width={48}
                  height={48}
                />
              </span>
              <span className="hero-twelve__chip hero-twelve__chip--salesforce">
                <Image
                  src="/assets/images/home-12/hero-icon-2.png"
                  alt=""
                  width={53}
                  height={60}
                />
              </span>
              <span className="hero-twelve__chip hero-twelve__chip--visa">
                <Image
                  src="/assets/images/home-12/hero-icon-3.png"
                  alt=""
                  width={46}
                  height={32}
                />
              </span>
            </span>
          </span>
        </h1>

        <p className="hero-twelve__desc">{t("home13.hero.description")}</p>

        <div className="hero-twelve__actions">
          <Link
            href="/services"
            className="hero-twelve__btn hero-twelve__btn--primary"
          >
            <span>{t("home13.hero.exploreServices")}</span>
          </Link>
          <a
            href="https://calendly.com/nikhil-k-alvatech/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-twelve__btn hero-twelve__btn--ghost"
          >
            <span>{t("header.scheduleCall")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
