"use client"

interface FeatureCardProps {
  title: string
  description: string
  imageUrl: string;
  imageAlt: string;
  isLarge: boolean;
}

export default function FeatureCardNew({ title,
  description,
  imageUrl,
  imageAlt,
  isLarge }: FeatureCardProps) {
  return (

    <>
      <div
        className={`flex flex-col items-center h-full w-full lg:max-w-[379px] bg-[#FFFFFF] rounded-3xl shadow-md px-[30px] pt-10 pb-5 max-sm:px-5 max-sm:py-8 transition-shadow duration-300
          }`}
      >
        <div className="p-4 pb-0 flex justify-between items-start">
          <div className="w-full">
            <h3 className="mb-5 text-2xl font-semibold text-center text-indigo-500">
              {title}
            </h3>
          </div>
        </div>
        <div className="p-6 pt-2 flex flex-col flex-grow justify-between">
          <p className="mb-2 text-base tracking-normal leading-7 text-center text-neutral-700">
            {description}
          </p>
          <div className="flex items-center justify-center">
            <img
              src={imageUrl}
              className={`object-contain ${isLarge ? "w-[168px] lg:w-[300px]" : "w-[168px] md:w-[102px]"}`}
              alt={imageAlt}
            /></div>
          {isLarge && <div className="mt-8"></div>}
        </div>
      </div>
    </>
  )
}
