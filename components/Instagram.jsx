import React from "react";
import InstagramImg from "./InstagramImg";
import IgImg1 from "@/public/ig-img-1.jpeg";
import IgImg2 from "@/public/ig-img-2.jpeg";
import IgImg3 from "@/public/ig-img-3.jpeg";
import IgImg4 from "@/public/ig-img-4.jpeg";
import IgImg5 from "@/public/ig-img-5.jpeg";
import IgImg6 from "@/public/ig-img-6.jpeg";

const Instagram = () => {
  return (
    <div className="max-w-[1400px] h-[780px] mx-auto w-full p-16 px-4 relative text-center ">
      <h1 className="text-3xl font-mooli py-2">Follow me on Instagram</h1>
      <p className="text-2xl p-2">@ametov.me</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4'>
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
      </div>
    </div>
  );
};

export default Instagram;
