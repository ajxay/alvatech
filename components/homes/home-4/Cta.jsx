"use client";
import { openContactModal } from "@/utlis/toggleContactModal";
import Link from "next/link";
export default function Cta() {
  return (
    <div id="pre_cta" className="pre-cta section panel overflow-hidden">
      <div className="section-outer panel pb-4 sm:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel p-4 md:p-6 lg:p-8 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 dark:text-white"
            data-anime="onview: -200; translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
          >
            <div
              className="vstack items-center gap-2 sm:max-w-600px lg:max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 m-0">Schedule a call.</h2>
              <p className="fs-6 md:fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                Join over 500+ business already growing with Alvatch.
              </p>
              <div className="vstack sm:hstack justify-center gap-1 lg:gap-2 mt-1 lg:mt-2 flex-sm-column">
                
                <button
                  onClick={openContactModal}
                  className="btn btn-md btn-primary rounded-default text-white shadow-xs"
                  style={{ backgroundColor: "#84BA41", borderColor: "#84BA41" }}
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
