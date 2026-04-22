import { brands5 } from "@/data/brands";
import Image from "next/image";
import React from "react";

export default function Brands() {
  return (
    <div
      id="companies_sponsores"
      className="companies-sponsores section panel overflow-hidden my-8"
    >
      <div className="section-outer panel">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
              data-anime="onview: -200; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <h5 className="h5 lg:h4 m-0">
                Trusted by over most popular companies worldwide
              </h5>
              <div className="panel">
                <div className="hstack justify-center flex-wrap lg:flex-nowrap gap-2 lg:gap-4 text-center">
                  {brands5.map((brand, index) => (
                    <div key={index} className="w-1/2 sm:w-1/3 lg:w-auto lg:flex-none">
                      <div
                        className="panel d-flex items-center justify-center mx-auto w-84px h-36px lg:w-180px lg:h-72px"
                      >
                        <Image
                          className="w-100 h-100"
                          alt="brand"
                          src={brand.src}
                          width={brand.width}
                          height={brand.height}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
