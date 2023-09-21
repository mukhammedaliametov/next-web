"use client";
import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Slider from '@/components/Slider';
import Head from "next/head";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='Capture Photography' message='I capture moments in nature and keep them alive.'/>
      <Slider/>
    </div>
  );
};

export default page;
