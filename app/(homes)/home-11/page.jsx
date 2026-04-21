import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Topbar from "@/components/headers/Topbar";
import Blogs from "@/components/homes/home-4/Blogs";
import Hero from "@/components/homes/home-7/Hero";
import Brands from "@/components/homes/home-3/Brands";
import Features from "@/components/homes/home-2/Features";
import Integration from "@/components/homes/home-1/Integretion";
import Associations from "@/components/homes/home-8/Brands";
import Facts from "@/components/homes/home-1/Facts";

import Cta from "@/components/homes/home-1/Cta";
import Faqs from "@/components/homes/home-7/Faqs";
import Pricing from "@/components/homes/home-7/Pricing";
import Solutions from "@/components/homes/home-7/Solutions";
import Testimonials from "@/components/homes/home-7/Testimonials";

import React from "react";
import Feedback from "@/components/homes/home-1/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Team from "@/components/homes/home-1/Team";
import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
export const metadata = {
  title:
    "Home 7 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function page() {
  return (
    <>
      <div className="theme-3">
        <div className="bp-xs page-wrapper home-7 bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden disable-cursor">
          <Topbar />
          <Header3 />
          <div id="wrapper" className="wrap">
            <Hero />
            <Brands />
            <Features />
            <Integration />
            <Associations />
            <Testimonials />
            {/* testimonials have some additonal section which
            needs to be removed */}
            <Facts />
            <Feedback />
            <Timeline />
            <Team />
            <Blogs />

            <Cta />
            {/*   <Solutions />
            <Pricing />
            <Faqs />
            */}
          </div>
          <Footer1 />
        </div>
      </div>
    </>
  );
}
