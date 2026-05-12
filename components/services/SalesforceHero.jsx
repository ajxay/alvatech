"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SalesforceHero() {
  const { t } = useTranslation("common");
  const c = "servicePages.common";

  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden"
    >
      <div
        className="position-cover"
        style={{
          background:
            "linear-gradient(180deg, rgba(132, 186, 65, 0.35) 0%, rgba(132, 186, 65, 0.10) 45%, #ffffff 100%)",
        }}
      />
      <div className="section-outer panel pb-4 md:pb-6 xl:pb-8 salesforce-hero-outer">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols justify-center lg:justify-between items-center g-2 lg:g-4">
              <div className="col-12 sm:col-10 md:col-8 lg:col-6">
                <div
                  className="panel vstack gap-2 sm:text-center lg:text-start rtl:lg:text-end py-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h2 xl:display-5 mb-1 xl:mb-2 text-gray-900">
                    {t("servicePages.salesforce.hero.title")}
                    <span style={{ color: "#84BA41" }}>
                      {t("servicePages.salesforce.hero.titleHighlight")}
                    </span>
                  </h1>
                  <p className="fs-6 lg:fs-5 text-dark text-opacity-70">
                    {t("servicePages.salesforce.hero.subtitle")}
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row child-cols g-1 mt-1 sm:mt-2"
                  >
                    <div>
                      <div className="form-icon-group inline-block">
                        <input
                          type="email"
                          className="form-control rounded-default h-48px w-full bg-white"
                          placeholder={t(`${c}.emailPlaceholder`)}
                          required
                        />
                        <span className="form-icon text-gray">
                          <i className="unicon-email icon-1" />
                        </span>
                      </div>
                    </div>
                    <div className="col-12 sm:col-auto">
                      <Link
                        href={`/page-pricing`}
                        className="btn btn-md rounded-default h-48px w-100 lg:min-w-150px text-white"
                        style={{
                          backgroundColor: "#84BA41",
                          borderColor: "#84BA41",
                        }}
                      >
                        {t(`${c}.contactUs`)}
                      </Link>
                    </div>
                  </form>
                  <p className="fs-7 text-dark text-opacity-70 mt-1">
                    {t(`${c}.privacyPrefix`)}
                    <Link
                      href={`/page-privacy`}
                      className="uc-link text-underline"
                      style={{ color: "#12715b" }}
                    >
                      {t(`${c}.privacyLink`)}
                    </Link>
                    {t(`${c}.privacySuffix`)}
                  </p>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div
                  className="panel mt-2 lg:mt-0 ltr:lg:ms-2 rtl:lg:me-2"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <Image
                    className="w-100 h-auto d-block mx-auto"
                    alt="salesforce-hero"
                    src="/assets/images/salesforce/hero.png"
                    width={1428}
                    height={1142}
                    style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .salesforce-hero-outer {
          padding-top: calc(var(--uc-nav-height, 70px) + 24px);
        }
        @media (min-width: 992px) {
          .salesforce-hero-outer {
            padding-top: calc(var(--uc-nav-height, 180px) + 14px);
          }
        }
      `}</style>
    </div>
  );
}
