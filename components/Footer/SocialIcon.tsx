import React from "react";

interface SocialIconProps {
  svg: string;
  "aria-label"?: string;
}

const SocialIcon: React.FC<SocialIconProps> = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.svg }}
      role="img"
      aria-label={props["aria-label"]}
    />
  );
};

export default SocialIcon;
