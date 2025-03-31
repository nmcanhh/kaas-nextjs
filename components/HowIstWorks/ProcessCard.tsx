"use client";
import * as React from "react";

interface ProcessCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

function ProcessCard({ imageUrl, title, description }: ProcessCardProps) {
  return (
    <article className="flex flex-col grow items-start p-11 bg-[linear-gradient(104deg,#CBD6FC_0%,#9BAFFF_101.74%,rgba(0,64,57,0.00)_101.75%)] rounded-[30px] max-md:px-5 max-md:mt-10 w-full">
      <img
        src={imageUrl}
        className="object-contain max-w-full rounded-none aspect-square w-[110px]"
        alt={`${title} icon`}
      />
      <h3 className="mt-12 text-2xl text-black max-md:mt-10">{title}</h3>
      <p className="self-stretch mt-5 text-base leading-6 text-neutral-600">
        {description}
      </p>
    </article>
  );
}

export default ProcessCard;
