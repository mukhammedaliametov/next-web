"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Instagram from "@/components/Instagram";
import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="flex justify-center items-center text-center w-full">
      {loading ? (
        <PuffLoader color="#36d7b7" size={90} loading={loading} className="mt-[90%] md:mt-[20%]"/>
      ) : (
        <div className="w-full text-left">
          <Navbar />
          <Hero
            heading="Capture Photography"
            message="I capture moments in nature and keep them alive."
          />
          <Slider />
          <Instagram />
        </div>
      )}
    </div>
  );
};

export default page;
