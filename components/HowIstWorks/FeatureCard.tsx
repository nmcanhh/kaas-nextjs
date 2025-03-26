"use client";
import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="grow px-11 pt-24 pb-11 mt-1.5 w-full bg-slate-50 rounded-[30px] max-md:px-5 max-md:mt-10">
      <h3 className="text-2xl text-black">
        {title.includes("&") ? (
          <>
            {title.split("&")[0]}
            <br />& {title.split("&")[1]}
          </>
        ) : (
          title
        )}
      </h3>
      <p className="mt-5 w-60 text-base leading-6 text-neutral-600">
        {description}
      </p>
    </article>
  );
}

export default FeatureCard;
