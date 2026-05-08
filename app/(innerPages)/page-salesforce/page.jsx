import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
import SalesforceBrands from "@/components/services/SalesforceBrands";
import Faq from "@/components/homes/home-4/Faq";
import Testimonials from "@/components/homes/home-4/Testimonials";
import SalesforceCta from "@/components/services/SalesforceCta";
import SalesforceFacts from "@/components/services/SalesforceFacts";
import SalesforceHero from "@/components/services/SalesforceHero";
import SalesforceServices from "@/components/services/SalesforceServices";
import React from "react";
import { salesforceCrmFaq } from "@/data/faq";

export const metadata = {
  title: "Salesforce Services || Alvatech - Website",
  description:
    "Alvatech Salesforce services — tailored CRM solutions to accelerate your revenue growth.",
};

export default function SalesforcePage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header3 />
        <div id="wrapper" className="wrap">
          <SalesforceHero />
          <SalesforceBrands />
          <SalesforceFacts />
          <SalesforceServices />
          <SalesforceCta />
          {/* <Testimonials /> */}
          <Faq faqData={salesforceCrmFaq} />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
