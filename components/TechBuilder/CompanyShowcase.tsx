"use client";

import React from "react";
import Image from "next/image";
import CompanyCard from "./CompanyCard";

const CompanyShowcase: React.FC = () => {
  return (
    <section className="flex gap-5 max-md:flex-col">
      <div className="w-6/12 max-md:ml-0 max-md:w-full">
        <CompanyCard
          backgroundImage="/images/image-51.png"
          logoImage="/images/image-52.png"
          companyName="NAPA GLOBAL"
          website="napaglobal.com"
          title="Scalable & Secure Blockchain Tech Solutions"
          description="Napa Global specializes in fintech, blockchain, and enterprise software, delivering scalable, secure, and user-centric solutions for banks, fintech firms, and global enterprises, ensuring seamless digital transformation and optimized user experiences."
        />
      </div>
      <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <CompanyCard
          backgroundImage="/images/image-53.png"
          logoImage="/images/image-54.png"
          companyName="INNOTECH"
          website="Innotech.vn"
          title="Leading Fintech & Banking Software Provider"
          description="Innotech Vietnam provides banking, cloud, and blockchain solutions, trusted by top financial institutions, fintech startups, and multinational corporations, offering high-performance, regulatory-compliant, and secure technology to drive financial innovation and digital transformation"
        />
      </div>
    </section>
  );
};

export default CompanyShowcase;
