import React from "react";

const Navbar = () => {
  return (
    <nav
      id="nav"
      className="w-full z-[2] sticky top-0 px-[30px] border-b-[2px] border-black md:px-[100px] py-[20px] vsm:py-[12px] bg-white text-black flex justify-between items-center cursor-pointer"
    >
      <h1 className="flex gap-[5px] items-center">
        <p className="font-bold text-[20px] vsm:text-[25px] md:text-[35.31px] leading-[1.2] font-SpaceGrotesk">
          Launches Updater
        </p>
      </h1>

      <a
        href="https://web3-launches.vercel.app/"
        target="blank"
        className="px-[10px] vsm:px-[29px] py-[5px] text-center vsm:text-left vsm:py-[17px] bg-indigo-600 rounded-[10px] text-base font-semibold text-white"
      >
        GO TO MAIN WEBSITE
      </a>
    </nav>
  );
};

export default Navbar;
