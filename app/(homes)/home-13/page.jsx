import React from "react";

import Header3 from "@/components/headers/Header3";
import Footer1 from "@/components/footers/Footer1";

import Hero from "@/components/homes/home-12/Hero";
import HeroStats from "@/components/homes/home-13/HeroStats";
import About from "@/components/homes/home-13/About";
import WhyChoose from "@/components/homes/home-13/WhyChoose";
import Features from "@/components/homes/home-13/Features";
import ProcessSteps from "@/components/homes/home-13/ProcessSteps";
import Sections from "@/components/homes/home-13/Sections";
import { pageMetadataFor } from "@/data/pageMeta";
import AboutWhyChoose from "@/components/innerpages/AboutWhyChoose";

export const metadata = pageMetadataFor("/");

export default function HomeThirteenPage() {
  return (
    <>
      <div className="theme-3">
        <div className="bp-xs page-wrapper home-13 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
          <Header3 />
          <div id="wrapper" className="wrap">
            <Hero />
            <HeroStats />
            <About />
            {/* <WhyChoose /> */}
            <AboutWhyChoose />
            <ProcessSteps />
            {/* <Features /> */}
            <Sections />
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}
