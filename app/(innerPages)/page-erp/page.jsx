import Header3 from "@/components/headers/Header3";
import Brands from "@/components/homes/home-4/Brands";
import Cta from "@/components/homes/home-4/Cta";
import Faq from "@/components/homes/home-4/Faq";
import Testimonials from "@/components/homes/home-4/Testimonials";
import ErpHero from "@/components/services/ErpHero";
import ErpFacts from "@/components/services/ErpFacts";
import ErpService from "@/components/services/ErpService";
import React from "react";
import Footer1 from "@/components/footers/Footer1";
import SalesforceBrands from "@/components/services/SalesforceBrands";
export const metadata = {
  title: "ERP Services || Alvatech - Website",
  description:
    "All in one Business Solution. Centralize all core business functions in one platform to improve collaboration, streamline operations, and enhance overall productivity.",
};

export default function ErpPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header3 />
        <div id="wrapper" className="wrap">
          <ErpHero />
          <SalesforceBrands />
          <ErpFacts />
          <ErpService />
          <Cta />
          <Testimonials />
          <Faq />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
