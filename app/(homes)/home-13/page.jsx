import React from "react";

import Header3 from "@/components/headers/Header3";
import Footer1 from "@/components/footers/Footer1";

import Hero from "@/components/homes/home-12/Hero";
import Features from "@/components/homes/home-13/Features";
import Sections from "@/components/homes/home-13/Sections";
import { pageMetadataFor } from "@/data/pageMeta";

export const metadata = pageMetadataFor("/");

export default function HomeThirteenPage() {
  return (
    <>
      <div className="theme-3">
        <div className="bp-xs page-wrapper home-13 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
          <Header3 />
          <div id="wrapper" className="wrap">
            <Hero />
            <Features />
            <Sections />
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}
