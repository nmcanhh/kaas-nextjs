"use client";

import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
}) => {
  return (
    <article className="flex flex-col items-center px-16 pt-10 pb-5 bg-white rounded-3xl shadow-md max-sm:px-5 max-sm:py-8">
      <h3 className="mb-5 text-2xl font-semibold text-center text-indigo-500">
        {title}
      </h3>
      <p className="mb-5 text-base tracking-normal leading-7 text-center text-neutral-700">
        {description}
      </p>
      <figure className="flex justify-center items-center h-[102px] w-[102px] max-sm:w-20 max-sm:h-20">
        <img
          src={imageUrl}
          className="object-contain size-full"
          alt={imageAlt}
        />
      </figure>
    </article>
  );
};

export default FeatureCard;
