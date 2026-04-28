import React from "react";

import Header3 from "@/components/headers/Header3";
import Footer1 from "@/components/footers/Footer1";

import Hero from "@/components/homes/home-12/Hero";
import Features from "@/components/homes/home-13/Features";
import Sections from "@/components/homes/home-13/Sections";

export const metadata = {
  title: "Home 13 || Alvatech - Website",
  description:
    "Do More, Grow Faster with Smart Systems. We combine eCommerce development, performance marketing, and CRM automation to help brands launch quickly, scale efficiently, and manage operations without complexity.",
};

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
