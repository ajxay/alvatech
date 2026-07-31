"use client";
import { useContextElement } from "@/context/Context";
import { menuItems } from "@/data/menu";
import { socialLinks } from "@/data/footer";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MobileMenu() {
  const { t, i18n } = useTranslation("common");
  const { isDark, handleToggle } = useContextElement();
  const pathname = usePathname();
  const [activeParent1, setActiveParent1] = useState(-1);
  const [activeParent2, setActiveParent2] = useState(-1);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const elementRef = useRef(null);
  const containerRef = useRef(null);
  const langMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target)
      ) {
        setLangMenuOpen(false);
      }
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeMobileMenu();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  const currentLanguageLabel =
    i18n.language === "sv"
      ? t("footer.languageSwedish")
      : t("footer.languageEnglish");

  const isMenuActive = (menu) => {
    let isActive = false;
    if (menu.href) {
      if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
        isActive = true;
      }
    }
    if (menu.subItems) {
      menu.subItems.forEach((el) => {
        if (el.href) {
          if (pathname.split("/")[1] == el.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (el.subItems) {
          el.subItems.map((elm) => {
            if (elm.href) {
              if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                isActive = true;
              }
            }
          });
        }
      });
    }
    return isActive;
  };
  return (
    <div
      ref={containerRef}
      id="uc-menu-panel"
      data-uc-offcanvas="overlay: true;"
      className="uc-offcanvas mobile-menu"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide "
        role="dialog"
        aria-modal="true"
        style={{ maxWidth: 876 }}
      >
        <header className="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
          <div className="uc-logo">
            <Link
              href={`/`}
              className="h5 text-none text-gray-900 dark:text-white"
              style={{ width: 140 }}
            >
              <Image
                className="dark:d-none"
                alt="Alvatech"
                src="/assets/images/common/main-logo.svg"
                width="117"
                height="40"
              />
              <Image
                className="d-none dark:d-block"
                alt="Alvatech"
                src="/assets/images/common/main-logo-dark.svg"
                width="117"
                height="40"
              />
            </Link>
          </div>
          <button
            className="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
            type="button"
            onClick={closeMobileMenu}
          >
            <i className="unicon-close" />
          </button>
        </header>
        <div className="panel">
          {/* <form
            onSubmit={(e) => e.preventDefault()}
            id="search-panel"
            className="form-icon-group vstack gap-1 mb-2 uc-sticky"
            data-uc-sticky=""
          >
            <input
              type="email"
              className="form-control form-control-sm fs-7 rounded-default"
              placeholder="Search.."
            />
            <span className="form-icon text-gray">
              <i className="unicon-search icon-1" />
            </span>
          </form> */}
          <div
            className="uc-sticky-placeholder"
            style={{ height: 40, width: 290, margin: "0px 0px 16px" }}
            hidden=""
          />
          <ul className="nav-y gap-narrow fw-medium fs-6 uc-nav" data-uc-nav="">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${item.subItems ? "uc-parent" : ""} ${
                  activeParent1 == index ? "active" : ""
                }`}
              >
                    {item.href ? (
                  <Link
                    className={isMenuActive(item) ? "menuActive" : ""}
                    href={item.href}
                  >
                    {item.tKey ? t(item.tKey) : item.label}
                  </Link>
                ) : (
                  <>
                    <a
                      className={isMenuActive(item) ? "menuActive" : ""}
                      onClick={() =>
                        setActiveParent1((pre) => (pre == index ? -1 : index))
                      }
                    >
                      {item.tKey ? t(item.tKey) : item.label}
                    </a>
                    {item.subItems && (
                      <ul
                        className={`uc-nav-sub ${
                          activeParent1 == index ? "active" : ""
                        }`}
                      >
                        {item.subItems.map((subItem, index2) => (
                          <li
                            key={index2}
                            className={`${!subItem.href ? "uc-parent" : ""}  ${
                              activeParent2 == index2 ? "active" : ""
                            }`}
                            role="presentation"
                          >
                            {subItem.href ? (
                              <Link
                                className={
                                  isMenuActive(subItem) ? "menuActive" : ""
                                }
                                href={subItem.href}
                              >
                                {subItem.tKey ? t(subItem.tKey) : subItem.label}
                              </Link>
                            ) : (
                              <>
                                <a
                                  className={
                                    isMenuActive(subItem) ? "menuActive" : ""
                                  }
                                  onClick={() =>
                                    setActiveParent2((pre) =>
                                      pre == index2 ? -1 : index2
                                    )
                                  }
                                >
                                  {subItem.tKey ? t(subItem.tKey) : subItem.label}
                                </a>
                                {subItem.subItems && (
                                  <ul
                                    className={`uc-nav-sub ${
                                      activeParent2 == index2 ? "active" : ""
                                    }`}
                                  >
                                    {subItem.subItems.map((subItem, index3) => (
                                      <li
                                        key={index3}
                                        className={
                                          !subItem.href ? "uc-parent" : ""
                                        }
                                        role="presentation"
                                      >
                                        {subItem.href ? (
                                          <Link
                                            className={
                                              isMenuActive(subItem)
                                                ? "menuActive"
                                                : ""
                                            }
                                            href={subItem.href}
                                          >
                                            {subItem.tKey ? t(subItem.tKey) : subItem.label}
                                          </Link>
                                        ) : (
                                          <></>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <a
              href="https://calendly.com/nikhil-k-alvatech/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-default text-white text-none w-100 justify-center"
              style={{ backgroundColor: "#84BA41", borderColor: "#84BA41" }}
            >
              {t("header.scheduleCall")}
            </a>
          </div>
          <div className="hstack justify-between items-center gap-2 mt-4">
            <ul className="social-icons nav-x m-0">
              <li>
                {socialLinks.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={icon.label}
                  >
                    <i className={icon.iconClass} />
                  </a>
                ))}
              </li>
            </ul>
            <div className="position-relative z-999" ref={langMenuRef}>
              <button
                type="button"
                className="hstack items-center gap-narrow border-0 bg-transparent p-0"
                style={{ color: "#434243" }}
                aria-expanded={langMenuOpen}
                aria-haspopup="listbox"
                aria-label={t("labels.language")}
                onClick={() => setLangMenuOpen((open) => !open)}
              >
                <i className="unicon-earth icon-1" />
                <span className="fw-medium fs-7">{currentLanguageLabel}</span>
                <i className="unicon-chevron-down icon-1 opacity-70" />
              </button>
              {langMenuOpen ? (
                <ul
                  className="position-absolute end-0 py-1 rounded-2 bg-white dark:bg-gray-800 shadow-xs border border-gray-100 dark:border-gray-700 list-unstyled m-0"
                  style={{
                    minWidth: 160,
                    zIndex: 1000,
                    bottom: "100%",
                    top: "auto",
                    marginBottom: 8,
                  }}
                  role="listbox"
                >
                  <li>
                    <button
                      type="button"
                      className="w-100 text-start border-0 bg-transparent py-2 px-3 small"
                      style={{ color: "#434243" }}
                      onClick={() => {
                        void i18n.changeLanguage("en");
                        setLangMenuOpen(false);
                      }}
                    >
                      {t("footer.languageEnglish")}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="w-100 text-start border-0 bg-transparent py-2 px-3 small"
                      style={{ color: "#434243" }}
                      onClick={() => {
                        void i18n.changeLanguage("sv");
                        setLangMenuOpen(false);
                      }}
                    >
                      {t("footer.languageSwedish")}
                    </button>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          <div
            className="py-2 hstack gap-2 mt-4 bg-white dark:bg-gray-900 uc-sticky uc-active uc-sticky-fixed"
            data-uc-sticky="position: bottom"
          >
            <div className="vstack gap-1">
              {/* Theme toggle disabled: always render light mode. */}
              <span className="fs-7 opacity-60" style={{ visibility: "hidden" }}>
                {t("mobile.selectTheme")}
              </span>
            </div>
          </div>
          <div
            className="uc-sticky-placeholder"
            style={{ height: 83, width: 290, margin: "32px 0px 0px" }}
          />
        </div>
      </div>
    </div>
  );
}
