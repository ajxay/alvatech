"use client";

import Image from "next/image";

const showcaseImages = [
  "/assets/images/case/landing-showcase/showcase-01.png",
  "/assets/images/case/landing-showcase/showcase-02.png",
  "/assets/images/case/landing-showcase/showcase-03.png",
  "/assets/images/case/landing-showcase/showcase-04.png",
  "/assets/images/case/landing-showcase/showcase-05.png",
  "/assets/images/case/landing-showcase/showcase-06.png",
  "/assets/images/case/landing-showcase/showcase-07.png",
  "/assets/images/case/landing-showcase/showcase-08.png",
  "/assets/images/case/landing-showcase/showcase-09.png",
  "/assets/images/case/landing-showcase/showcase-10.png",
  "/assets/images/case/landing-showcase/showcase-11.png",
  "/assets/images/case/landing-showcase/showcase-12.png",
];

const columns = [
  { images: showcaseImages.slice(0, 3), direction: "up" },
  { images: showcaseImages.slice(3, 6), direction: "down" },
  { images: showcaseImages.slice(6, 9), direction: "up" },
  { images: showcaseImages.slice(9, 12), direction: "down" },
];

export default function WebsiteShowcase() {
  return (
    <section className="site-showcase">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center" style={{ justifyContent: "center" }}>Our Work</span>
          <h2>Real Shopify Stores We&apos;ve Built.</h2>
          <p>A look inside storefronts we&apos;ve designed and shipped for brands like yours.</p>
        </div>
      </div>

      <div className="site-showcase__wall reveal">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className={`site-showcase__col site-showcase__col--${col.direction}`}>
            <div className="site-showcase__track">
              {[...col.images, ...col.images].map((src, i) => (
                <div key={`${src}-${i}`} className="site-showcase__frame">
                  <Image src={src} alt="" width={440} height={966} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
