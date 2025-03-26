"use client";

import React from "react";
import PartnerCard from "./PartnerCard";

const partnersData = [
  {
    profileImage: "https://placehold.co/60x60/e4e4e4/e4e4e4",
    profileAlt: "Profile",
    name: "Rebecca Emard",
    title: "Circle Partnership Manager",
    logoImage: "https://placehold.co/60x60/e4e4e4/e4e4e4",
    logoAlt: "Logo",
    cardTitle: "Circle Sole Integration Partner",
    description:
      "At Circle, we're excited to partner with Kaas to integrate USDC, enabling secure, fast, and compliant stablecoin transactions for businesses worldwide.",
  },
  {
    profileImage: "https://placehold.co/60x60/e4e4e4/e4e4e4",
    profileAlt: "Profile",
    name: "Mark Pham",
    title: "CEO of Innotech.vn",
    logoImage: "https://placehold.co/60x60/e4e4e4/e4e4e4",
    logoAlt: "Logo",
    cardTitle: "Innotech Tech Builder",
    description:
      "Innotech partners with Napaglobal to develop Kaas, delivering the best stablecoin solution for TradFi with seamless integration and compliance.",
  },
  {
    profileImage: "https://placehold.co/60x60/e4e4e4/e4e4e4",
    profileAlt: "Profile",
    name: "Peter Ngo",
    title: "Chairman of Napaglobal",
    logoImage: "https://placehold.co/60x60/e4e4e4/e4e4e4",
    logoAlt: "Logo",
    cardTitle: "Napa Global Tech Builder",
    description:
      "Napaglobal, as the tech builder, provides high-level architecture and infrastructure for Kaas, ensuring scalability, security, and seamless stablecoin integration",
  },
  {
    profileImage: "https://placehold.co/60x60/e4e4e4/e4e4e4",
    profileAlt: "Profile",
    name: "Solana",
    title: "Ecosystem Partner",
    cardTitle: "Solana Ecosystem Partner",
    description:
      "Kaas is bringing seamless stablecoin payments to the Solana ecosystem, enabling ultra-fast, low-cost transactions for businesses in Vietnam and beyond",
  },
];

const PartnersGrid: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-8 justify-center p-6 max-md:p-5 max-sm:p-4">
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
