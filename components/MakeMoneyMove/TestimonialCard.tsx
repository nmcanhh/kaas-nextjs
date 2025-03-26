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
    <article className="flex gap-2.5 justify-center items-center p-3.5 rounded-3xl shadow-sm bg-stone-50 w-[275px] max-md:w-[250px] max-sm:w-[200px]">
      <div className="flex gap-4 items-start">
        <img
          src={imageSrc}
          alt=""
          className={`w-[46px] h-[46px] max-sm:w-[36px] max-sm:h-[36px] ${imageClassName}`}
        />
        <p className="text-base tracking-wide leading-normal max-w-[185px] text-neutral-700 max-sm:text-sm">
          {text}
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;
