import React from "react";

import Header3 from "@/components/headers/Header3";
import Footer1 from "@/components/footers/Footer1";

import Hero from "@/components/homes/home-12/Hero";
import Features from "@/components/homes/home-12/Features";

import Brands from "@/components/homes/home-3/Brands";
import Integretion from "@/components/homes/home-1/Integretion";
import Associations from "@/components/homes/home-8/Brands";
import Facts from "@/components/homes/home-1/Facts";
import Feedback from "@/components/homes/home-1/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Team from "@/components/homes/home-1/Team";
import Blogs from "@/components/homes/home-4/Blogs";
import Cta from "@/components/homes/home-1/Cta";

export const metadata = {
  title: "Home 12 || Alvatech - Website",
  description:
    "Do More, Grow Faster with Smart Systems. We combine eCommerce development, performance marketing, and CRM automation to help brands launch quickly, scale efficiently, and manage operations without complexity.",
};

export default function HomeTwelvePage() {
  return (
    <>
      <div className="theme-3">
        <div className="bp-xs page-wrapper home-12 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
          <Header3 />
          <div id="wrapper" className="wrap">
            <Hero />
            <Brands />
            <Features />
            <Integretion />
            <Associations />
            <Facts />
            <Feedback />
            <Timeline />
            <Blogs />
            <Team />
            <Cta />
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}
