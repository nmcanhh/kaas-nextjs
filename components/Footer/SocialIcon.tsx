import React from "react";

interface SocialIconProps {
  svg: string;
  "aria-label"?: string;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = (props) => {
  return (
    <a href={props.href}>
      <div
        dangerouslySetInnerHTML={{ __html: props.svg }}
        role="img"
        aria-label={props["aria-label"]}
      />
    </a>
  );
};

export default SocialIcon;
