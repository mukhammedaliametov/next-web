import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InsgramImg = ({ socialImg }) => {
  return (
    <div className="relative">
      <Image src={socialImg} alt="/" className="w-full h-full rounded-[10px]" layout='responsive' />
      {/* Overlay */}
      <div className="absolute flex justify-center items-center bottom-0 right-0 left-0 top-0 cursor-pointer hover:rounded-[10px] hover:bg-black/70 group">
        <p className="text-gray-300 absolute hidden group-hover:block text-center">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
};

export default InsgramImg;
