import Image from "next/image";
import React, { useState } from "react";
import logo_light from "../../public/logo_light.png";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed h-24 w-full bg-indigo-800 text-stone-100 shadow-xl">
      <div className="flex h-full w-full items-center justify-between px-4 2xl:px-16">
        <Link href={"/"}>
          <Image
            src={logo_light}
            alt="Logo"
            width="155"
            className="cursor-pointer bg-red-600"
            priority
          />
        </Link>
        <div className="text-md bg-red-400">
          <ul className="hidden sm:flex">
            <Link href={"/about"}>
              <li className="ml-10 uppercase hover:border-b">Organisations</li>
            </Link>
            <Link href={"/contact"}>
              <li className="ml-10 uppercase hover:border-b">Contact Us</li>
            </Link>
            <Link href={"/services"}>
              <li className="ml-10 uppercase hover:border-b">Services</li>
            </Link>
            <Link href={"/blog"}>
              <li className="ml-10 uppercase hover:border-b">Blog</li>
            </Link>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="cursor-pointer bg-red-400 sm:hidden"
        >
          <AiOutlineMenu size={30} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-[-24] h-screen w-full bg-indigo-700 bg-opacity-90 p-8 duration-200 ease-in sm:hidden"
            : "fixed left-[-100%] top-[-24] h-screen p-8 duration-100 ease-in"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4 text-lg">
          <ul>
            <Link href={"/"}>
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Home
              </li>
            </Link>
            <Link href={"/about"}>
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                About
              </li>
            </Link>
            <Link href={"/contact"}>
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Contact
              </li>
            </Link>
            <Link href={"/services"}>
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Services
              </li>
            </Link>
            <Link href={"/blog"}>
              <li
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer py-4"
              >
                Blog
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-around pt-10">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
        </div>
        <Link href={"/"}>
          <Image
            src={logo_light}
            alt="Logo"
            width="205"
            className="cursor-pointer pt-2"
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
