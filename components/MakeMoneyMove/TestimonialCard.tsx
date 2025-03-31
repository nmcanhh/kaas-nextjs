import React from "react";

interface TestimonialCardProps {
  imageSrc: string;
  text: string;
  imageClassName?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  text,
  imageClassName = "",
}) => {
  return (
    <article className="flex gap-2.5 justify-center items-center p-[13px] rounded-3xl shadow-lg bg-stone-50 w-[275px] max-md:w-[270px] max-sm:w-[260px]">
      <div className="flex gap-4 items-start">
        <img
          src={imageSrc}
          alt=""
          className={`w-[46px] h-[46px] max-sm:w-[36px] max-sm:h-[36px] ${imageClassName}`}
        />
        <p className="text-base tracking-wide leading-normal max-w-[185px] text-neutral-700 text-[12px] md:text-[12px] lg:text-[14px]">
          {text}
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;
