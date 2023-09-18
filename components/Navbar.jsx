import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiCloseMenu } from "react-icons/ai";

const Navbar = () => {
  const Items = [
    { name: "Home", link: "/home" },
    { name: "Gallery", link: "/#gallery" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in-out duration-300 py-3">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold text-4xl">Captur</h1>
        </Link>
        <ul className="hidden sm:flex gap-8">
          {Items.map((link) => (
            <li key={link.name} className="">
              <Link
                href={link.link}
                className=""
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden block">
          <AiOutlineMenu size={20} />
        </div>

        {/* Mobile nav */}
        <ul className="sm:hidden block">
          {Items.map((link) => (
            <li key={link.name} className="">
              <Link
                href={link.link}
                className=""
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
