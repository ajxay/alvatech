import React from "react";

import Header3 from "@/components/headers/Header3";
import Footer1 from "@/components/footers/Footer1";

import Hero from "@/components/homes/home-12/Hero";
import Features from "@/components/homes/home-13/Features";

import Brands from "@/components/homes/home-3/Brands";
import Cta from "@/components/homes/home-1/Cta";

export const metadata = {
  title: "Home 13 || Alvatech - Website",
  description:
    "Smart features for your business. We help brands launch eCommerce stores, scale revenue with performance marketing, and streamline operations with smart systems.",
};

export default function HomeThirteenPage() {
  return (
    <>
      <div className="theme-3">
        <div className="bp-xs page-wrapper home-13 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
          <Header3 />
          <div id="wrapper" className="wrap">
            <Hero />
            <Brands />
            <Features />
            <Cta />
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}
