import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex items-center w-[189px] h-[32px] relative">
        <Image
          src="/images/zimo-team-black.png"
          fill
          alt="Picture of the author"
        />
      </div>
      <div className="flex items-center w-[100px] h-[83px] relative">
        <Image
          src="/images/zimoInternship.png"
          fill
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Footer;
