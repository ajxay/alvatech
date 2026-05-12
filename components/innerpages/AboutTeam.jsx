"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import "@/components/homes/home-13/Sections.css";

const team = [
  { name: "MONICA LANDBERG", roleKey: "ceo", image: "/assets/images/home-13/team/monica-landberg.png" },
  { name: "ANDRES LANDBERG", roleKey: "coo", image: "/assets/images/home-13/team/andres-landberg.png" },
  { name: "NIKHIL KHETAN", roleKey: "cto", image: "/assets/images/home-13/team/nikhil-khetan.png" },
  { name: "ANDRE RANDAHL", roleKey: "cfo", image: "/assets/images/home-13/team/andre-randahl.png" },
  { name: "MANISH KUMAR", roleKey: "techLead", image: "/assets/images/home-13/team/manish-kumar.png" },
  { name: "ASHISH RANJAN", roleKey: "marketingLead", image: "/assets/images/home-13/team/ashish-ranjan.png" },
  { name: "LUICY", roleKey: "leadOfFun", image: "/assets/images/home-13/team/luicy.png" },
  { name: "MOOLY", roleKey: "directorOfJoy", image: "/assets/images/home-13/team/mooly.png" },
];

export default function AboutTeam() {
  const { t } = useTranslation("common");

  return (
    <section className="home13-section home13-team">
      <div className="container sm:max-w-lg xl:max-w-xl">
        <header className="home13-header">
          <h2>{t("pages.about.team.title")}</h2>
        </header>
        <div className="home13-team__grid">
          {team.map((member) => (
            <article key={member.name} className="home13-team__card">
              <Image src={member.image} alt={member.name} width={180} height={180} />
              <h3>{member.name}</h3>
              <p>{t(`pages.about.team.roles.${member.roleKey}`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
