"use client";
import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Capture Photography' message='I capture moments in nature and keep them alive.'/>
    </div>
  );
};

export default page;
