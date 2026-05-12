import Header3 from "@/components/headers/Header3";

import Footer1 from "@/components/footers/Footer1";

import Faq from "@/components/homes/home-2/Faq";
import Cta from "@/components/innerpages/features/Cta";
import Integrations from "@/components/innerpages/Integrations";
import TrustedByBrands from "@/components/innerpages/integrations/TrustedByBrands";
import { integrationsFaq } from "@/data/faq";
export const metadata = {
  title:
    "Integrations || Alvatech - Website",
  description:
    "Alvatech - Website",
};
export default function IntegrationPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
      <Header3 />

        <div id="wrapper" className="wrap">
          <Integrations />
          <Faq faqData={integrationsFaq} titleKey="pages.integrations.faqTitle" />
          {/* <Testimonials /> */} {/* commented out testimonials section */}
          <TrustedByBrands />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
