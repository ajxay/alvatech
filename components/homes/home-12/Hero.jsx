"use client";

import Image from "next/image";
import Link from "next/link";

const PRIMARY = "#84BA41";
const PRIMARY_SOFT = "#EEF5E3";

export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header hero-twelve section panel overflow-hidden"
    >
      <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-secondary dark:bg-gray-800" />

      <div
        className="position-absolute top-0 start-0 end-0 bottom-0 d-none sm:d-block"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,24,40,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,24,40,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 75%)",
        }}
      />

      <div className="section-outer panel pb-5 lg:pb-8 pt-6 sm:pt-8 lg:pt-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-3 text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span
                className="hstack gap-1 fs-7 fw-bold py-narrow px-2 rounded-pill"
                style={{
                  color: PRIMARY,
                  backgroundColor: "#ffffff",
                  border: `1px solid ${PRIMARY}`,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z"
                    fill={PRIMARY}
                  />
                  <path
                    d="M19 14l.8 2.7L22 17.5l-2.2.8L19 21l-.8-2.7L16 17.5l2.2-.8L19 14z"
                    fill={PRIMARY}
                  />
                </svg>
                <span>End-to-End Growth Partner</span>
              </span>

              <h1 className="h2 sm:h1 md:display-6 lg:display-4 xl:display-3 fw-normal m-0 max-w-1100px">
                Do More, Grow Faster{" "}
                <span className="d-inline-block position-relative">
                  <span className="position-relative z-1">
                    with <span className="fw-bold">Smart Systems</span>
                  </span>
                  <span className="hero-smart-icons d-none md:d-inline-block">
                    <span
                      className="hero-blob"
                      style={{ backgroundColor: PRIMARY }}
                    />
                    <Image
                      className="hero-icon hero-icon-shopify"
                      src="/assets/images/apps/shopify-plus.svg"
                      alt="Shopify"
                      width={60}
                      height={60}
                    />
                    <Image
                      className="hero-icon hero-icon-salesforce"
                      src="/assets/images/apps/salesforce.svg"
                      alt="Salesforce"
                      width={56}
                      height={56}
                    />
                    <Image
                      className="hero-icon hero-icon-power"
                      src="/assets/images/apps/zoho.svg"
                      alt="Zoho"
                      width={48}
                      height={48}
                    />
                  </span>
                </span>
              </h1>

              <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 max-w-600px">
                We combine eCommerce development, performance marketing, and
                CRM automation to help brands launch quickly, scale
                efficiently, and manage operations without complexity.
              </p>

              <div className="hstack justify-center gap-2 mt-2">
                <Link
                  href="/page-shopify"
                  className="btn btn-md lg:btn-lg fw-bold rounded-pill text-white"
                  style={{
                    backgroundColor: PRIMARY,
                    borderColor: PRIMARY,
                    boxShadow: "0 6px 20px rgba(132, 186, 65, 0.35)",
                  }}
                >
                  <span>Explore Services</span>
                </Link>
                <Link
                  href="/page-contact"
                  className="btn btn-md lg:btn-lg fw-bold rounded-pill bg-white border dark:bg-gray-900 dark:border-gray-700"
                >
                  <span>Schedule a Call</span>
                </Link>
              </div>

              <div className="hstack justify-center gap-1 mt-3 lg:mt-5 text-dark dark:text-white text-opacity-60 fs-7 fw-medium">
                <span>Scroll for more</span>
                <span
                  className="cstack w-24px h-24px rounded-circle border"
                  style={{ borderColor: "rgba(16,24,40,0.15)" }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 4v14M6 12l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-twelve {
          background-color: ${PRIMARY_SOFT};
        }
        :global(.dark) .hero-twelve {
          background-color: transparent;
        }
        .hero-smart-icons {
          position: absolute;
          top: 50%;
          left: 100%;
          width: 0;
          height: 0;
          pointer-events: none;
        }
        .hero-blob {
          position: absolute;
          top: -36px;
          left: 16px;
          width: 200px;
          height: 72px;
          border-radius: 9999px;
          filter: blur(0.5px);
          opacity: 0.95;
        }
        :global(.hero-smart-icons) :global(.hero-icon) {
          position: absolute;
          border-radius: 12px;
          background: #ffffff;
          padding: 6px;
          box-shadow: 0 8px 20px rgba(16, 24, 40, 0.1);
        }
        :global(.hero-smart-icons) :global(.hero-icon-shopify) {
          top: -48px;
          left: 118px;
          width: 60px;
          height: 60px;
          transform: rotate(10deg);
          z-index: 2;
        }
        :global(.hero-smart-icons) :global(.hero-icon-salesforce) {
          top: -8px;
          left: 28px;
          width: 56px;
          height: 56px;
          transform: rotate(-8deg);
          z-index: 2;
        }
        :global(.hero-smart-icons) :global(.hero-icon-power) {
          top: 20px;
          left: 98px;
          width: 48px;
          height: 48px;
          transform: rotate(-15deg);
          z-index: 2;
        }
        @media (max-width: 1199.98px) {
          .hero-blob {
            top: -28px;
            left: 8px;
            width: 150px;
            height: 58px;
          }
          :global(.hero-smart-icons) :global(.hero-icon-shopify) {
            top: -40px;
            left: 90px;
            width: 50px;
            height: 50px;
          }
          :global(.hero-smart-icons) :global(.hero-icon-salesforce) {
            top: -6px;
            left: 16px;
            width: 46px;
            height: 46px;
          }
          :global(.hero-smart-icons) :global(.hero-icon-power) {
            top: 18px;
            left: 74px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}
