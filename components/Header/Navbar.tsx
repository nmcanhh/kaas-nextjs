import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-wrap gap-10 justify-between items-center py-5 px-20 max-w-full w-full bg-white/80 backdrop-blur-sm">
      <p className="self-stretch pt-10 my-auto text-xs text-black rounded-none w-[226px]">
        A project of INNOTECH & NAPA GLOBAL{" "}
      </p>

      <div className="flex flex-wrap gap-10 justify-center items-center self-stretch py-1.5 pr-8 pl-1.5 my-auto bg-slate-50 min-w-60 rounded-[290px] max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-1.5 justify-center items-center self-stretch px-4 py-2 my-auto bg-indigo-500 rounded-[40px] w-[52px]">
          <img
            src="./images/image-14.png"
            alt="Home"
            className="object-contain self-stretch my-auto w-5 aspect-square"
          />
        </div>
        <button className="self-stretch my-auto text-base font-medium text-center text-neutral-800">
          Solution
        </button>
        <button className="self-stretch my-auto text-base font-medium text-center text-neutral-800">
          Services
        </button>
        <button className="self-stretch my-auto text-base font-medium text-center text-neutral-800">
          About Innotech
        </button>
        <button className="self-stretch my-auto text-base font-medium text-center text-neutral-800">
          About Napa Global
        </button>
      </div>

      <img
        src="./images/image-15.png"
        alt="Profile"
        className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[600px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
      />
    </nav>
  );
};

export default Navbar;
