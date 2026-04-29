import Footer1 from "@/components/footers/Footer1";
import Contact3 from "@/components/innerpages/Contact3";
import Header3 from "@/components/headers/Header3";
export const metadata = {
  title: "Contact 3 || Alvatech - Website",
  description:
    "Get in touch with our team using Contact page variant 3.",
};

export default function ContactPage3() {
  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
      <Header3 />
      <div id="wrapper" className="wrap">
        <Contact3 />
      </div>
      <Footer1 />
    </div>
  );
}
