import React from "react";

const Divider: React.FC = () => (
  <div className="flex shrink-0 self-stretch my-auto h-6 bg-indigo-500 rounded-none w-[17px]" />
);

const DividerIcon: React.FC = () => (
  <img
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe9014a2a415939863a090f3b37dfed96a604385?placeholderIfAbsent=true&apiKey=c95e0d248e8b485b85a8e9d0f6ee1a87"
    alt="Divider"
    className="object-contain shrink-0 self-stretch my-auto aspect-[17/24] fill-indigo-500 w-[17px]"
  />
);

const MarqueeContent: React.FC = () => (
  <>
    <p className="self-stretch my-auto whitespace-nowrap">
      Secure Transactions
    </p>
    <Divider />
    <p className="self-stretch my-auto whitespace-nowrap">
      Universal stablecoins
    </p>
    <DividerIcon />
    <p className="self-stretch my-auto whitespace-nowrap">APIs connectors</p>
    <DividerIcon />
    <p className="self-stretch my-auto whitespace-nowrap">
      Instant Settlements
    </p>
    <DividerIcon />
    <p className="self-stretch my-auto whitespace-nowrap">
      Seamless Integration
    </p>
    <DividerIcon />
    <p className="self-stretch my-auto whitespace-nowrap">
      Multichain on/off-ramp
    </p>
    <Divider />
    <p className="self-stretch my-auto whitespace-nowrap">
      Robust Security Protocol
    </p>
    <Divider />
  </>
);

const MarqueeText: React.FC = () => {
  return (
    <div className="relative z-10 py-5 mt-0 text-xl text-center border-t border-white border-opacity-30 text-neutral-800 max-md:max-w-full overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-animation {
          animation: scroll 30s linear infinite;
        }
        .marquee-animation:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex marquee-animation whitespace-nowrap">
        {/* First copy of the content */}
        <div className="flex gap-10 justify-center items-center min-w-full">
          <MarqueeContent />
        </div>

        {/* Duplicate content for seamless looping */}
        <div className="flex gap-10 justify-center items-center min-w-full">
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
