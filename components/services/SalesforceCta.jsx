"use client";
import { openContactModal } from "@/utlis/toggleContactModal";
import Link from "next/link";

export default function SalesforceCta() {
  return (
    <div id="pre_cta" className="pre-cta section panel overflow-hidden">
      <div className="section-outer panel py-4 sm:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel p-4 md:p-6 lg:p-7 rounded-2 position-relative overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(199, 224, 185, 0.85) 0%, rgba(255, 255, 255, 1) 100%)",
            }}
            data-anime="onview: -200; translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
          >
            <div
              className="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center position-relative"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 m-0" style={{ color: "#0e0e0f" }}>
                Get a call back.
              </h2>
              <p
                className="fs-6 md:fs-5 m-0"
                style={{ color: "rgba(33, 37, 41, 0.7)" }}
              >
                Join over 500+ business already growing with Alvatech.
              </p>
              <div className="vstack gap-1 w-100 mt-1 lg:mt-2 sm:max-w-500px mx-auto">
                
                <button
                  onClick={openContactModal}
                  className="btn btn-md rounded-default text-dark shadow-xs w-100 fw-bold"
                  style={{
                    backgroundColor: "#84BA41",
                    borderColor: "#84BA41",
                    color: "#434243",
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
