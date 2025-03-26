import React from "react";
import PartnerCard from "./PartnerCard";

const PartnerGrid: React.FC = () => {
  const partners = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fcea83f3dc40b83fd4738d2cbd58a2121f3aa2b8?placeholderIfAbsent=true&apiKey=c95e0d248e8b485b85a8e9d0f6ee1a87",
      name: "Circle",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3ccce1a51ca00fc7e4e290b80d1ad7a754226def?placeholderIfAbsent=true&apiKey=c95e0d248e8b485b85a8e9d0f6ee1a87",
      name: "USDC",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/69edf9f794673a21b733baa4aa73ef13174953aa?placeholderIfAbsent=true&apiKey=c95e0d248e8b485b85a8e9d0f6ee1a87",
      name: "Solana",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/94cfeb6085d2935fd1cc3accb5b32d2565f7bceb?placeholderIfAbsent=true&apiKey=c95e0d248e8b485b85a8e9d0f6ee1a87",
      name: "Innotech",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f49529f85826e90728e613204e6d87f4e95b22bc?placeholderIfAbsent=true&apiKey=c95e0d248e8b485b85a8e9d0f6ee1a87",
      name: "napa Global",
      isRounded: true,
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center px-16 py-12 mx-auto w-full text-2xl font-medium bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-slate-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-11 items-start max-md:max-w-full">
        {partners.map((partner, index) => (
          <PartnerCard
            key={index}
            imageUrl={partner.imageUrl}
            name={partner.name}
            isRounded={partner.isRounded}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerGrid;
