"use client";

import React from "react";
import PartnerCard from "./PartnerCard";

const partnersData = [
  {
    profileImage: "images/profile-1.png",
    profileAlt: "Profile",
    name: "Rebecca Emard",
    title: "Circle Partnership Manager",
    logoImage: "images/image-21.png",
    logoAlt: "Logo",
    cardTitle: "Circle Sole Integration Partner",
    description:
      "At Circle, we're excited to partner with Kaas to integrate USDC, enabling secure, fast, and compliant stablecoin transactions for businesses worldwide.",
  },
  {
    profileImage: "images/profile-2.png",
    profileAlt: "Profile",
    name: "Mark Pham",
    title: "CEO of Innotech.vn",
    logoImage: "images/image-24.png",
    logoAlt: "Logo",
    cardTitle: "Innotech Tech Builder",
    description:
      "Innotech partners with Napaglobal to develop Kaas, delivering the best stablecoin solution for TradFi with seamless integration and compliance.",
  },
  {
    profileImage: "images/profile-3.png",
    profileAlt: "Profile",
    name: "Peter Ngo",
    title: "Chairman of Napaglobal",
    logoImage: "images/image-25.png",
    logoAlt: "Logo",
    cardTitle: "Napa Global Tech Builder",
    description:
      "Napaglobal, as the tech builder, provides high-level architecture and infrastructure for Kaas, ensuring scalability, security, and seamless stablecoin integration",
  },
  {
    profileImage: "images/profile-4.png",
    profileAlt: "Profile",
    name: "Solana",
    title: "Ecosystem Partner",
    logoImage: "images/image-23.png",
    logoAlt: "Logo",
    cardTitle: "Solana Ecosystem Partner",
    description:
      "Kaas is bringing seamless stablecoin payments to the Solana ecosystem, enabling ultra-fast, low-cost transactions for businesses in Vietnam and beyond",
  },
];

const PartnersGrid: React.FC = () => {
  return (
    <section className="bg-[#D6D7E0E5] flex flex-wrap gap-8 justify-center px-6 py-[128px] max-md:p-5 max-sm:p-4">
      {partnersData.map((partner, index) => (
        <PartnerCard
          key={index}
          profileImage={partner.profileImage}
          profileAlt={partner.profileAlt}
          name={partner.name}
          title={partner.title}
          logoImage={partner.logoImage}
          logoAlt={partner.logoAlt}
          cardTitle={partner.cardTitle}
          description={partner.description}
        />
      ))}
    </section>
  );
};

export default PartnersGrid;
