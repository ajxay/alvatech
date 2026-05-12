"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./ShopifyBento.css";

const tileLayout = [
  {
    titleSize: "large",
    colClass: "col-12 lg:col-8",
    i18nKey: "0",
    image: "/assets/images/services/shopify/shopify-stores.png",
    bg:
      "radial-gradient(120% 120% at 0% 0%, rgba(255,248,242,1) 0%, rgba(255,240,228,0.75) 60%, rgba(255,240,228,0.41) 100%)",
  },
  {
    titleSize: "small",
    colClass: "col-12 lg:col-4",
    i18nKey: "1",
    image: "/assets/images/services/shopify/shopify-ads.png",
    bg:
      "radial-gradient(120% 120% at 50% 30%, rgba(174,212,151,0.62) 0%, rgba(215,234,203,0.81) 50%, rgba(255,255,255,1) 100%)",
  },
  {
    titleSize: "small",
    colClass: "col-12 lg:col-4",
    i18nKey: "2",
    image: "/assets/images/services/shopify/shopify-social.png",
    bg: "#f5f9fb",
  },
  {
    titleSize: "large",
    colClass: "col-12 lg:col-8",
    i18nKey: "3",
    image: "/assets/images/services/shopify/shopify-clients.png",
    bg:
      "conic-gradient(from 90deg at 50% 50%, rgb(255,246,238) 0%, rgb(255,255,254) 100%)",
  },
];

export default function ShopifyBento() {
  const { t } = useTranslation("common");

  return (
    <div id="shopify_bento" className="shopify-bento section panel overflow-hidden">
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="row g-3 md:g-4"
              data-uc-scrollspy="target: >*; delay: 300; cls: uc-animation-slide-bottom-medium"
            >
              {tileLayout.map((tile, i) => {
                const base = `servicePages.shopify.bento.${tile.i18nKey}`;
                const title = t(`${base}.title`);
                return (
                <div key={i} className={tile.colClass}>
                  <div
                    className="shopify-bento__card panel overflow-hidden rounded-2"
                    style={{ background: tile.bg }}
                  >
                    <h3
                      className={`shopify-bento__title m-0 ${
                        tile.titleSize === "large"
                          ? "shopify-bento__title--large"
                          : "shopify-bento__title--small"
                      }`}
                    >
                      {title}
                    </h3>
                    <figure className="shopify-bento__figure">
                      <Image
                        className="shopify-bento__image"
                        src={tile.image}
                        width={1600}
                        height={800}
                        alt={t(`${base}.alt`)}
                      />
                    </figure>
                  </div>
                </div>
              );})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
