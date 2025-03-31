"use client";
import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="relative pt-8 w-full lg:max-w-[326px]">
      <div className="absolute -top-[24px] left-8 z-10">
        <div className="p-4 text-white bg-gradient-to-r from-[#CBD6FC] to-[#9BAFFF] w-[110px] h-[110px] rounded-2xl flex items-center justify-center shadow-sm">
          {icon}
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden pt-10">
        <div className="p-6 min-h-[204px]">
          <h3 className="text-2xl text-black">{title}</h3>
          <p className="mt-5 text-base text-neutral-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
