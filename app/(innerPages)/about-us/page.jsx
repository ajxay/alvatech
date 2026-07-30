import Header3 from "@/components/headers/Header3";

import Footer1 from "@/components/footers/Footer1";
import About from "@/components/innerpages/About";
import AboutMission from "@/components/innerpages/AboutMission";
import AboutWhyChoose from "@/components/innerpages/AboutWhyChoose";
import Brands from "@/components/common/Brands2";
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import AboutTechStack from "@/components/innerpages/AboutTechStack";
import Cta from "@/components/innerpages/Cta";
import AboutTeam from "@/components/innerpages/AboutTeam";
import { pageMetadataFor } from "@/data/pageMeta";
export const metadata = pageMetadataFor("/about-us");

export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header3 />

        <div id="wrapper" className="wrap">
          <About /> {/* TODO: Update contents in hero section */}
          <About2 /> {/* TODO: Update contents in about 2 section */}
          <AboutMission />
          <AboutWhyChoose />
          <AboutTeam />
          <AboutTechStack />
          {/* TODO: fix and add clientals here same as home page*/}
          {/* <div className="home13-techstack__trust">
            <div className="home13-techstack__trust-head">
              <h3>{t("home13.techStack.trustTitle")}</h3>
              <p className="home13-techstack__trust-sub">
                {t("home13.techStack.trustReviews")}
              </p>
            </div>
            <div className="home13-techstack__trust-logos">
              {trustLogos.map((logo) => (
                <span
                  key={logo.src}
                  className="home13-techstack__trust-logo"
                  style={{ width: `${logo.w}px` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={logo.h}
                  />
                </span>
              ))}
            </div>
          </div>{" "}
          <div className="home13-techstack__trust">
            <div className="home13-techstack__trust-head">
              <h3>{t("home13.techStack.trustTitle")}</h3>
              <p className="home13-techstack__trust-sub">
                {t("home13.techStack.trustReviews")}
              </p>
            </div>
            <div className="home13-techstack__trust-logos">
              {trustLogos.map((logo) => (
                <span
                  key={logo.src}
                  className="home13-techstack__trust-logo"
                  style={{ width: `${logo.w}px` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={logo.h}
                  />
                </span>
              ))}
            </div>
          </div> */}
          {/* TODO: FAQ Section will come here */}
          <Cta /> {/* TODO: content update in this section */}
        </div>
      </div>
      <Footer1 />
    </>
  );
}
