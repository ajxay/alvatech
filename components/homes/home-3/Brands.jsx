"use client";

import { reviewLogos } from "@/data/brands";
import React from "react";
import Image from "next/image";

export default function Brands() {
  const chunkSize = 5;
  const firstRow = reviewLogos.slice(0, chunkSize);
  const secondRow = reviewLogos.slice(chunkSize, chunkSize * 2);
  const secondRowSource = secondRow.length > 0 ? secondRow : firstRow;

  return (
    <div id="trusted_brands" className="trusted-brands section panel">
      <div className="section-outer panel pb-4 lg:pb-6">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="review-brands panel vstack justify-center gap-2 px-3 py-4 sm:px-4 sm:py-6 lg:p-6 text-center rounded-3 bg-secondary dark:bg-gray-800 overflow-hidden"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
            >
              <h3 className="title h4 sm:h3 lg:h2 m-0">
                Trusted for overall simplicity
              </h3>
              <div className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white flex-sm-column">
                <div className="rating panel">
                  <div className="hstack justify-center gap-0">
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                    <i className="icon unicon-star-filled" />
                  </div>
                </div>
                <span className="desc rtl:order-first">
                  Based on 4,000+ reviews with customer satisfaction on
                </span>
              </div>
              <div className="panel mt-3 sm:mt-4 vstack gap-4 lg:gap-5">
                <div className="brands-marquee-row">
                  <div className="brands-marquee-track marquee-right">
                    {[...firstRow, ...firstRow].map((logo, index) => (
                      <div
                        key={`first-${index}-${logo.lightSrc}`}
                        className="brand-item"
                      >
                        <Image
                          src={logo.lightSrc}
                          width={36}
                          height={46}
                          style={{ height: "42px", width: "fit-content" }}
                          alt="Trustpilot"
                          className="dark:d-none"
                        />
                        <Image
                          src={logo.darkSrc}
                          width={36}
                          height={46}
                          style={{ height: "42px", width: "fit-content" }}
                          alt="Trustpilot"
                          className="d-none dark:d-block"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="brands-marquee-row">
                  <div className="brands-marquee-track marquee-left">
                    {[...secondRowSource, ...secondRowSource].map((logo, index) => (
                      <div
                        key={`second-${index}-${logo.lightSrc}`}
                        className="brand-item"
                      >
                        <Image
                          src={logo.lightSrc}
                          width={36}
                          height={46}
                          style={{ height: "42px", width: "fit-content" }}
                          alt="Trustpilot"
                          className="dark:d-none"
                        />
                        <Image
                          src={logo.darkSrc}
                          width={36}
                          height={46}
                          style={{ height: "42px", width: "fit-content" }}
                          alt="Trustpilot"
                          className="d-none dark:d-block"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .brands-marquee-row {
          overflow: hidden;
          width: 100%;
        }

        .brands-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 28px;
        }

        .brand-item {
          flex: 0 0 auto;
          min-width: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .marquee-right {
          animation: marquee-right 20s linear infinite;
        }

        .marquee-left {
          animation: marquee-left 20s linear infinite;
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
