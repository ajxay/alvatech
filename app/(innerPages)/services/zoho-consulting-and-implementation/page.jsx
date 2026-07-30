import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
import Brands from "@/components/homes/home-4/Brands";
import Cta from "@/components/homes/home-4/Cta";
import Faq from "@/components/homes/home-4/Faq";
import Testimonials from "@/components/homes/home-4/Testimonials";
import ZohoFacts from "@/components/services/ZohoFacts";
import ZohoHero from "@/components/services/ZohoHero";
import ZohoService from "@/components/services/ZohoService";
import React from "react";
import SalesforceBrands from "@/components/services/SalesforceBrands";
import { zohoCrmFaq } from "@/data/faq";
import { pageMetadataFor } from "@/data/pageMeta";

export const metadata = pageMetadataFor("/services/zoho-consulting-and-implementation");

export default function ZohoPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header3 />
        <div id="wrapper" className="wrap">
          <ZohoHero />
          <SalesforceBrands />
          <ZohoFacts />
          <ZohoService />
          <Cta />
          {/* <Testimonials /> */}  {/* commented out testimonials section */}
          <Faq faqData={zohoCrmFaq} />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
