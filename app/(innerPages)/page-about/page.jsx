import Header3 from "@/components/headers/Header3";

import Footer1 from "@/components/footers/Footer1";
import About from "@/components/innerpages/About";
import Brands from "@/components/common/Brands2";
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import Feedback from "@/components/homes/home-2/Feedback";
import Timeline from "@/components/homes/home-1/Timeline";
import Team from "@/components/homes/home-1/Team";
import Cta from "@/components/innerpages/Cta";
import { team } from "@/components/homes/home-13/Sections";
import Image from "next/image";
export const metadata = {
  title:
    "About || Alvatech - Website",
  description:
    "Alvatech - Website",
};
export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
      <Header3 />

        <div id="wrapper" className="wrap">
          <About />
          <div
            id="clients_brands"
            className="clients-brands section panel overflow-hidden"
          >
            <div className="section-outer panel pb-6 xl:pb-9">
              <div className="container max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="block-panel panel"
                    data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                  >
                    <div className="element-brands max-w-950px m-auto text-gray-900 dark:text-white">
                      <Brands />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <About2 />
          <AboutValues />
          <Feedback />
          {/* <Timeline /> */}
          <section className="home13-section home13-team">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <header className="home13-header">
            <h2>Our Executive Team</h2>
          </header>
          <div className="home13-team__grid">
            {team.map((member) => (
              <article key={member.name} className="home13-team__card">
                <Image src={member.image} alt={member.name} width={180} height={180} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
          <Cta />
        </div>
      </div>
      <Footer1 />

    </>
  );
}
