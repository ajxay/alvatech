"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./Hero.css";

export default function Hero() {
  const { t } = useTranslation("common");
  const m = "servicePages.marketing.hero";

  return (
    <div
      id="hero_header"
      className="hero-header hero-five-scene section panel overflow-hidden"
    >
      <div className="position-cover bg-gradient-to-t from-secondary to-white dark:from-gray-800 dark:to-gray-900" />
      <div className="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="marketing-hero">
              <div
                className="marketing-hero__copy panel vstack gap-2"
                data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <h1 className="h2 sm:display-6 xl:display-4 fw-light mb-1 xl:mb-2">
                  {t(`${m}.title`)}
                </h1>
                <p className="fs-6 xl:fs-4">{t(`${m}.subtitle`)}</p>
                <div className="vstack gap-1 mt-2 xl:mt-4">
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

              <div
                className="marketing-hero__media panel"
                data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
              >
                <figure className="marketing-hero__figure m-0">
                  <Image
                    className="marketing-hero__image"
                    alt={t(`${m}.title`)}
                    src="/assets/images/template/digital-marketing.png"
                    width="1672"
                    height="941"
                    priority
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
