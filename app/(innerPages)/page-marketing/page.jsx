import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
import Faq from "@/components/homes/home-5/Faq";
import Features from "@/components/homes/home-5/Features";
import Hero from "@/components/homes/home-5/Hero";
import Howworks from "@/components/homes/home-5/Howworks";
import Support from "@/components/homes/home-5/Support";
import MarketingTrustStrip from "@/components/services/MarketingTrustStrip";
import React from "react";
import { marketingFaq } from "@/data/faq";

export const metadata = {
  title: "Home 5 || Alvatech - Website",
  description: "Alvatech - Website",
};

export default function HomePage5() {
  return (
    <>
      <div className=" page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header3 />
        <div id="wrapper" className="wrap">
          <Hero />
          <MarketingTrustStrip />
          <Features />
          <hr className="w-100 m-0 d-block lg:d-none" />
          <Howworks />
          <Faq faqData={marketingFaq} />
          <Support />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
