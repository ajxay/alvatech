"use client";
import Link from "next/link";
import Image from "next/image";
import { openNewsletterModal } from "@/utlis/toggleNewsletterModal";
import { mainPages, othermenuItems } from "@/data/menu";
import { usePathname } from "next/navigation";
import { features, homeLinks, links } from "@/data/menu";
import { featuresMenu, services } from "@/data/services";


export default function Nav2() {
  const pathname = usePathname();
  return (
    <>
      <li className="has-dd-menu ">
        <a href="#" role="button" aria-haspopup="true">
          What We Offer{" "}
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
          style={{ width: "min(1120px, 96vw)" }}
        >
          <div className="container max-w-none px-3 lg:px-4">
            <div className="uc-dropbar-inner after-bg ">
              <div className="row gx-5 col-match justify-between ">
                <div className="col-8">
                  <div className="panel vstack gap-4 py-4">
                    <div className="panel vstack gap-4">
                      <div className="hstack gap-4 justify-between">
                        <h5 className="h5 fw-medium m-0">
                          Discover our Services &amp; Solutions
                        </h5>
                        <Link
                          href={`/page-shopify`}
                          className="btn btn-sm dark:text-white"
                        >
                          <span>See what's new</span>
                          <span className="cstack w-32px h-32px rounded-circle bg-primary-100 dark:bg-primary">
                            <i className="icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                          </span>
                        </Link>
                      </div>
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
                                  {feature.title}
                                </h6>
                                <p className="fs-8 text-muted">
                                  {feature.description}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="panel vstack gap-4 p-5 bg-gray-25 dark:bg-gray-800">
                    {/* <div className="panel category-section">
                      <h6 className="h6 fs-8 text-uppercase">
                        Professional solutions
                      </h6>
                      <ul className="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                        {services.map((service, index) => (
                          <li key={index}>
                            <a href="#">{service}</a>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                    <div className="panel category-section">
                      <h6 className="h6 fs-8 text-uppercase">
                        Get started is Easy!
                      </h6>
                      <ul className="uc-nav uc-navbar-dropdown-nav fs-7 fw-normal row child-cols-12">
                        {links.map((link, index) => (
                          <li key={index}>
                            {link.isInternal ? (
                              <Link href={link.href}>{link.label}</Link>
                            ) : (
                              <a href={link.href}>{link.label}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      
      <li className="has-dd-menu" style={{ position: "relative" }}>
        <a href="#" role="button" aria-haspopup="true">
          Resources{" "}
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
                      <b className="fw-bold dark:text-white">Blog</b>
                      <span className="fw-normal">
                        Managing multiple software and tools for different
                        tasks.
                      </span>
                    </span>
                  </Link>
                </li>
                {/* <li>
                  <a
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    onClick={openNewsletterModal}
                    role="button"
                  >
                    <i className="icon-1 unicon-email fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Newsletter</b>
                      <span className="fw-normal">
                        The latest industry reports, updates and info.
                      </span>
                    </span>
                  </a>
                </li> */}
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/page-about`}
                  >
                    <i className="icon-1 unicon-play fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Know More About Us</b>
                      <span className="fw-normal">
                        Learn more about our company, our mission, and our values.
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
                {/* <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`#`}
                  >
                    <i className="icon-1 unicon-star fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">We're hiring</b>
                      <span className="fw-normal">
                        Managing multiple software and tools for different
                        tasks.
                      </span>
                    </span>
                  </Link>
                </li> */}
                 <li>
                  <a
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    onClick={openNewsletterModal}
                    role="button"
                  >
                    <i className="icon-1 unicon-email fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Newsletter</b>
                      <span className="fw-normal">
                        The latest industry reports, updates and info.
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/page-contact`}
                  >
                    <i className="icon-1 unicon-headset fw-bold text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Contact Us</b>
                      <span className="fw-normal">
                        Get in touch with us for any inquiries or feedback.
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
        <a href="/page-integrations">
          Services
        </a>
      </li>
      <li>
        <a href="/page-about">
          About Us
        </a>
      </li>
      <li>
        <a href="/page-contact">
          Contact Us
        </a>
      </li>
      
    </>
  );
}
