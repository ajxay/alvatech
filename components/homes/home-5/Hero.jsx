"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

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
            <div className="row child-cols-12 justify-center lg:justify-between items-center g-6 lg:g-0">
              <div className="sm:col-8 lg:col-5">
                <div
                  className="panel vstack gap-2 text-center lg:text-start rtl:lg:text-end xl:me-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h2 sm:display-6 xl:display-4 fw-light mb-1 xl:mb-2">
                    {t(`${m}.title`)}
                  </h1>
                  <p className="fs-6 xl:fs-4">{t(`${m}.subtitle`)}</p>
                  <div className="vstack gap-1 mt-2 xl:mt-4">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="row child-cols g-1 mt-1 sm:mt-2"
                    >
                      <div className="col-12 sm:col-auto">
                        <a
                          href="https://calendly.com/nikhil-k-alvatech/30min"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="about-hero__button"
                        >
                          {t("pages.about.heroButton")}
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="sm:col-auto">
                <div
                  className="hero-scroll-scene panel sm:w-550px sm:h-600px lg:w-450px lg:h-500px xl:w-600px xl:h-650px"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-3 h-100 overflow-hidden">
                    <Image
                      className="media-cover image"
                      alt="image"
                      src="/assets/images/marketing/hero-market.png"
                      width="1184"
                      height="1280"
                    />
                  </figure>
                  <div
                    className="hero-five-contries position-absolute sm:w-300px lg:w-250px xl:w-350px d-none sm:d-block"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    style={{ top: "20%" }}
                  >
                    <Image
                      alt="Countries"
                      data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -200; onscroll-trigger: 0; onscroll-duration: 400%; translateY: [-100, 0];"
                      src="/assets/images/marketing/hero-market.png"
                      width="710"
                      height="854"
                    />
                  </div>
                  <div
                    className="hero-five-account position-absolute sm:w-250px lg:w-200px xl:w-300px d-none sm:d-block"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    style={{ bottom: "20%" }}
                  >
                    <Image
                      alt="Account"
                      data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -200; onscroll-trigger: 0; onscroll-duration: 400%; translateY: [100, 0];"
                      src="/assets/images/template/hero-05-account.png"
                      width="605"
                      height="274"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
