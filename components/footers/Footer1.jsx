import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/data/footer";

export default function Footer1() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden">
      <div
        className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white"
        style={{ backgroundColor: "rgba(220, 234, 206, 0.5)", color: "#434243" }}
      >
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8" style={{ paddingTop: 26 }}>
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4" style={{ rowGap: 20 }}>
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link href={`/`}>
                        <Image
                          className="w-120px"
                          alt="Alvatech"
                          src="/assets/images/common/main-logo.svg"
                          width="140"
                          height="60"
                          style={{ width: "140px", height: "auto" }}
                        />
                      </Link>
                      <p style={{ maxWidth: 340, margin: 0, lineHeight: 1.5, fontSize: 16 }}>
                        Alvatech is a leading digital transformation agency,
                        delivering tailored ecommerce solutions to help businesses
                        grow and thrive online.
                      </p>
                    </div>
                  </div>
                </div>
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    <ul className="nav-y gap-1 fw-medium" style={{ fontSize: 17 }}>
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href} style={{ color: "#434243" }}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div
                className="row items-center g-3 lg:g-5 mt-4 lg:mt-6"
                style={{ paddingTop: 12 }}
              >
                <div className="col-12 lg:col-6">
                  <div className="vstack gap-narrow">
                    <h4 className="h4 m-0" style={{ color: "#1c1f25" }}>
                      Newsletter
                    </h4>
                    <p className="m-0" style={{ color: "#434243", fontSize: 16 }}>
                      Subscribe to get the latest updates and news.
                    </p>
                  </div>
                </div>
                <div className="col-12 lg:col-6">
                  <form className="vstack gap-1" action="#">
                    <label className="position-relative">
                      <i
                        className="unicon-email position-absolute"
                        style={{ left: 14, top: "50%", transform: "translateY(-50%)", opacity: 0.6 }}
                      />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="form-control h-48px bg-white border-0"
                        style={{ paddingLeft: 40, color: "#434243" }}
                        required
                      />
                    </label>
                    <button
                      type="submit"
                      className="btn btn-md text-dark fw-medium"
                      style={{ backgroundColor: "#84BA41", borderColor: "#84BA41", borderRadius: 8 }}
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white"
              style={{ borderTopColor: "#babbbd", marginTop: 10 }}
            >
              <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
                <p className="opacity-60" style={{ color: "#434243", marginBottom: 2 }}>
                  Alvatech © {new Date().getFullYear()}, All rights reserved.
                </p>
                <ul className="nav-x gap-2 fw-medium">
                  <li>
                    <a href="#" style={{ color: "#434243" }}>
                      Privacy notice
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "#434243" }}>
                      Legal
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "#434243" }}>
                      Cookie settings
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hstack justify-center lg:justify-end gap-2 lg:gap-3">
                <ul className="nav-x gap-2">
                  {socialLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <a href={link.href} style={{ color: "#434243" }}>
                        <i className={`icon icon-2 ${link.iconClass}`} />
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="vr" style={{ opacity: 0.25, borderColor: "#434243" }} />
                <button
                  type="button"
                  className="hstack items-center gap-narrow border-0 bg-transparent p-0"
                  style={{ color: "#434243" }}
                >
                  <i className="unicon-earth icon-1" />
                  <span className="fw-medium">English</span>
                  <i className="unicon-chevron-down icon-1 opacity-70" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
