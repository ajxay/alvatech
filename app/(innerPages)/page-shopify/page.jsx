import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Blogs from "@/components/homes/home-4/Blogs";
import Brands from "@/components/homes/home-4/Brands";
import Cta from "@/components/homes/home-4/Cta";
import Cta2 from "@/components/homes/home-4/Cta2";
import Facts from "@/components/homes/home-4/Facts";
import Faq from "@/components/homes/home-4/Faq";
import Features from "@/components/services/ShopifyService";
import ShopifyBento from "@/components/services/ShopifyBento";
import Hero from "@/components/services/ShopifyHero";
import Pricing from "@/components/homes/home-4/Pricing";
import Team from "@/components/homes/home-4/Team";
import Testimonials from "@/components/homes/home-4/Testimonials";
import React from "react";
import Footer1 from "@/components/footers/Footer1";
import SalesforceBrands from "@/components/services/SalesforceBrands";
import { shopifyFaq } from "@/data/faq";
export const metadata = {
  title:
    "Home 4 || Alvatech - Website",
  description:
    "Alvatech - Website",
};
export default function HomePage4() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header3 />
        <div id="wrapper" className="wrap">
          <Hero />
          <SalesforceBrands />
          <Facts />
          <Features />
          <ShopifyBento />
          <Cta />
          {/* <Testimonials /> */} {/* commented out testimonials section */}
          <Faq faqData={shopifyFaq} />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
