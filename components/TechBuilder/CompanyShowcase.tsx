"use client";

import React from "react";
import Image from "next/image";
import CompanyCard from "./CompanyCard";
import TechBuildersHeader from "./TechBuildersHeader";

const techBuilders = [
  {
    companyName: "Napa Global",
    website: "napaglobal.com",
    logoImage: "images/image-25.png",
    logoAlt: "Logo",
    cardTitle: "Scalable & Secure Blockchain Tech Solutions",
    description:
      "Napa Global specializes in fintech, blockchain, and enterprise software, delivering scalable, secure, and user-centric solutions for banks, fintech firms, and global enterprises, ensuring seamless digital transformation and optimized user experiences.",
  },
  {
    companyName: "INNOTECH",
    website: "Innotech.vn",
    logoImage: "images/image-24.png",
    logoAlt: "Logo",
    cardTitle: "Leading Fintech & Banking Software Provider",
    description:
      "Innotech Vietnam provides banking, cloud, and blockchain solutions, trusted by top financial institutions, fintech startups, and multinational corporations, offering high-performance, regulatory-compliant, and secure technology to drive financial innovation and digital transformation",
  },
];

const CompanyShowcase: React.FC = () => {
  return (
    <section className="bg-[#D6D7E0E5] pt-[48px] py-[80px]" >
      <TechBuildersHeader />
      <div className="flex flex-wrap justify-center gap-[81px] mt-[18px]">
        {techBuilders.map((builder, index) => (
          <CompanyCard
            key={index}
            logoImage={builder.logoImage}
            companyName={builder.companyName}
            website={builder.website}
            title={builder.cardTitle}
            description={builder.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanyShowcase;
