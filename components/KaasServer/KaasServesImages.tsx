import * as React from "react";

interface ImageProps {
  src: string;
  left: string;
  top: string;
}

function KaasServesImages() {
  const images: ImageProps[] = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b28857ca47ac10e708c94bde297420ed7435b280",
      left: "200px",
      top: "268px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cff9f7d68cee73d7ed424791036e026c79d9419d",
      left: "174px",
      top: "-237px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/91a0ea45311cc7cb514e1dc73722109baf558018",
      left: "596px",
      top: "159px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd4cc11b981e5d3dbe44e9b4d4ec31a9692efce1",
      left: "399px",
      top: "649px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d02f00d614f9f79bdb14dba0b5f1bf9c8f120ad",
      left: "-24px",
      top: "677px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d48aefa4de9878dcd9ac74537b34e45c83ca567e",
      left: "-196px",
      top: "14px",
    },
  ];

  return (
    <div className="overflow-hidden absolute top-0 right-0 w-6/12 h-full max-md:opacity-20">
      <div className="relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt=""
            className="w-[323px] h-[341px] absolute transform rotate-[-14.72deg] rounded-[117px] border-[8px] border-[#DCE1FF] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]"
            style={{ left: image.left, top: image.top }}
          />
        ))}
      </div>
    </div>
  );
}

export default KaasServesImages;
