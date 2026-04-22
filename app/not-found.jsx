import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Notfound from "@/components/otherPages/404";
import Header3 from "@/components/headers/Header3";
import Footer1 from "@/components/footers/Footer1";
export const metadata = {
  title:
    "Not Found || Alvatech - Website",
  description:
    "Alvatech - Website",
};
export default function NotFoundPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header3 />
        <div id="wrapper" className="wrap">
          <Breadcumb />
          <Notfound />
        </div>
        
        <Footer1 />
      </div>
    </>
  );
}
