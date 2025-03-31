import React from "react";

interface ProfileImageProps {
  src: string;
  className?: string;
  size?: "large" | "medium" | "small";
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  className = "",
  size = "medium",
}) => {
  const sizeClasses = {
    large:
      "w-[130px] h-[130px] max-xl:w-[115px] max-xl:h-[115px] max-lg:w-[80px] max-lg:h-[80px] max-sm:w-[60px] max-sm:h-[60px]",
    medium:
      "w-[105px] h-[105px] max-xl:w-[90px] max-xl:h-[90px] max-lg:w-[60px] max-lg:h-[60px] max-sm:w-[50px] max-sm:h-[50px]",
    small:
      "w-[101px] h-[100px] max-xl:w-[85px] max-xl:h-[85px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px]",
  };

  return (
    <img
      src={src}
      alt=""
      className={`${sizeClasses[size]} rounded-full border-[3.9px] border-[#FFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_4.678px_70.164px_0px_rgba(0,0,0,0.08)] ${className}`}
    />
  );
};

export default ProfileImage;
