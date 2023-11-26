"use client";
import Logo from "../assets/logo.webp";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[200px] border-t-2 border-gray-400 ">
      <div className="p-4 flex justify-center items-center">
        <Image src={Logo} width={100} height={100} alt="flash" />
      </div>

      <div className="flex justify-center items-center">
        <p className="px-4 mx-2">Terms and condition</p>
        <p className="px-4 mx-2"> Refund Policy</p>
        <p className="px-4 mx-2">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
