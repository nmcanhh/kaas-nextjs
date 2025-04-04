import React from "react";

const DividerIcon: React.FC = () => (
  <img
    src="icons/kaas-small-icon.svg"
    alt="Divider"
    className="object-contain shrink-0 self-stretch my-auto aspect-[17/24] fill-indigo-500 w-[17px]"
  />
);

const MarqueeContent: React.FC = () => (
  <>
    <DividerIcon />
    <p className="self-stretch my-auto whitespace-nowrap">
      Secure Transactions
    </p>
    <DividerIcon />
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
    <DividerIcon />
    <p className="self-stretch my-auto whitespace-nowrap">
      Robust Security Protocol
    </p>
    <DividerIcon />
  </>
);

const MarqueeText: React.FC = () => {
  return (
    <div className="relative z-10 py-5 mt-[10px] text-xl text-center border-t border-white border-opacity-30 text-neutral-800 max-md:max-w-full overflow-hidden ">
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
        <div className="flex gap-10 justify-center items-center min-w-full">
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
