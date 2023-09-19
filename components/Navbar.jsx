"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);
  const [textColor, setTextColor] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 70){
        setColor('#fff')
        setTextColor('#000')
      }else{
        setColor('transparent')
        setTextColor('#fff')
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  const Items = [
    { name: "Home", link: "/home" },
    { name: "Gallery", link: "/#gallery" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in-out duration-300 py-3">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{color: `${textColor}`}} className="font-bold text-4xl">Captur</h1>
        </Link>
        <ul style={{color: `${textColor}`}} className="hidden sm:flex gap-8">
          {Items.map((link) => (
            <li key={link}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div style={{color: `${textColor}`}} className="sm:hidden block z-10 text-2xl" onClick={handleNav}>
          {nav ? <AiOutlineClose color="#fff"/> : <AiOutlineMenu />}
        </div>

        {/* Mobile nav */}
        <div
          className={
            nav
              ? "sm:hidden absolute left-0 right-0 top-0 bottom-0 flex justify-center text-center items-center w-full h-screen bg-black ease-out duration-500"
              : "sm:hidden absolute left-[-100%] right-0 top-0 bottom-0 flex justify-center text-center items-center w-full h-screen bg-black ease-out duration-300"
          }
        >
          <ul>
            {Items.map((link) => (
              <li key={link} className="my-7 text-[1.5rem] hover:text-gray-500">
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
