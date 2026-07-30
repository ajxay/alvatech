"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { openNewsletterModal } from "@/utlis/toggleNewsletterModal";
import { features } from "@/data/menu";

export default function Nav2() {
  const { t, i18n } = useTranslation("common");
  return (
    <>
      <li className="has-dd-menu ">
        <a href="#" role="button" aria-haspopup="true">
          {t("nav.menu.whatWeOffer")}{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>
        <div
          className="uc-navbar-dropdown uc-products p-0 ft-primary text-unset fs-6 fw-normal hide-scrollbar border-top border-dark dark:border-white border-opacity-5 rounded-2 overflow-hidden shadow-xl bg-white dark:bg-gray-900 uc-drop"
          data-uc-drop="mode: click; pos: bottom-center; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
          style={{ width: "min(860px, 96vw)" }}
        >
          <div className="container max-w-none px-3 lg:px-4">
            <div className="uc-dropbar-inner">
              <div className="panel vstack gap-4 py-4">
                <h5 className="h5 fw-medium m-0">
                  {t("nav.dropdown.discoverTitle")}
                </h5>
                <div className="row child-cols-4 g-3">
                  {features.map((feature, index) => (
                    <div key={index}>
                      <Link
                        href={feature.link}
                        className="hstack items-start gap-2 p-2 text-none rounded-1-5 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150"
                      >
                        <span className="icon">
                          <i
                            className={`icon-2 ${feature.iconClass} text-gray-900 dark:text-white`}
                          />
                        </span>
                        <div className="panel">
                          <h6 className="h6 fs-7 fw-medium mb-narrow">
                            {t(feature.tTitleKey)}
                          </h6>
                          <p className="fs-8 text-muted">
                            {t(feature.tDescKey)}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="has-dd-menu" style={{ position: "relative" }}>
        <a href="#" role="button" aria-haspopup="true">
          {t("nav.menu.resources")}{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>
        <div
          className="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-2 overflow-hidden uc-drop"
          data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div
            className="row child-cols-6 g-0 col-match uc-grid uc-grid-stack"
            data-uc-grid=""
          >
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2">
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/blog`}
                  >
                    <i className="icon-1 unicon-course fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">
                        {t("nav.resources.blogTitle")}
                      </b>
                      <span className="fw-normal">
                        {t("nav.resources.blogDesc")}
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/about-us`}
                  >
                    <i className="icon-1 unicon-play fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">
                        {t("nav.resources.knowMoreTitle")}
                      </b>
                      <span className="fw-normal">
                        {t("nav.resources.knowMoreDesc")}
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
                <li>
                  <a
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    onClick={openNewsletterModal}
                    role="button"
                  >
                    <i className="icon-1 unicon-email fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">
                        {t("nav.resources.newsletterTitle")}
                      </b>
                      <span className="fw-normal">
                        {t("nav.resources.newsletterDesc")}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/contact-us`}
                  >
                    <i className="icon-1 unicon-headset fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">
                        {t("nav.resources.contactTitle")}
                      </b>
                      <span className="fw-normal">
                        {t("nav.resources.contactDesc")}
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <li>
        <a href="/about-us">{t("nav.menu.aboutUs")}</a>
      </li>
      <li>
        <a href="/contact-us">{t("nav.menu.contactUs")}</a>
      </li>
      <li className="has-dd-menu" style={{ position: "relative" }}>
        <a href="#" role="button" aria-haspopup="true">
          {t("labels.language")}{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>
        <div
          className="uc-navbar-dropdown w-180px ft-primary text-unset fs-7 fw-medium p-1 hide-scrollbar rounded-2 overflow-hidden uc-drop"
          data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
        >
          <ul className="uc-nav uc-navbar-dropdown-nav">
            <li>
              <a
                href="#"
                className={i18n.language === "en" ? "menuActive" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  void i18n.changeLanguage("en");
                }}
              >
                {t("footer.languageEnglish")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className={i18n.language === "sv" ? "menuActive" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  void i18n.changeLanguage("sv");
                }}
              >
                {t("footer.languageSwedish")}
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}
