import React from "react";
import Image from "next/image";
import "./ShopifyBento.css";

const tiles = [
  {
    title: "Publish Beautiful stores Online",
    image: "/assets/images/services/shopify/shopify-stores.png",
    alt: "Publish beautiful stores online",
    titleSize: "large",
    colClass: "col-12 lg:col-8",
    bg:
      "radial-gradient(120% 120% at 0% 0%, rgba(255,248,242,1) 0%, rgba(255,240,228,0.75) 60%, rgba(255,240,228,0.41) 100%)",
  },
  {
    title: "Launch Amazing Ads",
    image: "/assets/images/services/shopify/shopify-ads.png",
    alt: "Launch amazing ads",
    titleSize: "small",
    colClass: "col-12 lg:col-4",
    bg:
      "radial-gradient(120% 120% at 50% 30%, rgba(174,212,151,0.62) 0%, rgba(215,234,203,0.81) 50%, rgba(255,255,255,1) 100%)",
  },
  {
    title: "Grow Your Brand on Social Media",
    image: "/assets/images/services/shopify/shopify-social.png",
    alt: "Grow your brand on social media",
    titleSize: "small",
    colClass: "col-12 lg:col-4",
    bg: "#f5f9fb",
  },
  {
    title: "Turn Visitor Into Clients",
    image: "/assets/images/services/shopify/shopify-clients.png",
    alt: "Turn visitor into clients",
    titleSize: "large",
    colClass: "col-12 lg:col-8",
    bg:
      "conic-gradient(from 90deg at 50% 50%, rgb(255,246,238) 0%, rgb(255,255,254) 100%)",
  },
];

export default function ShopifyBento() {
  return (
    <div id="shopify_bento" className="shopify-bento section panel overflow-hidden">
      <div className="section-outer panel py-4 md:py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="row g-3 md:g-4"
              data-uc-scrollspy="target: >*; delay: 300; cls: uc-animation-slide-bottom-medium"
            >
              {tiles.map((tile, i) => (
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
                      {tile.title}
                    </h3>
                    <figure className="shopify-bento__figure">
                      <Image
                        className="shopify-bento__image"
                        src={tile.image}
                        width={1600}
                        height={800}
                        alt={tile.alt}
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
