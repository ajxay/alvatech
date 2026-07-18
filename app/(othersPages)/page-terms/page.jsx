import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Terms from "@/components/otherPages/Terms";
import { pageMetadataFor } from "@/data/pageMeta";

export const metadata = pageMetadataFor("/page-terms");
export default function TermsPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb title="Terms of Service" />
          <Terms />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
