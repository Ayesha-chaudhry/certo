"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#F3F8FF] flex justify-between items-center list-none py-4 px-4 md:px-12">
        {/* Logo */}
        <div>
          <Image src="/images/Logo.png" alt="Logo" height={12} width={200}/>
        </div>
        {/* Navigation for Desktop */}
        <div className="hidden md:flex justify-around items-center text-black gap-5 font-bold">
          <li className="cursor-pointer">iPhone</li>
          <li className="cursor-pointer">Android</li>
          <li className="cursor-pointer">Help</li>
          <li className="cursor-pointer">Company</li>
          <MdOutlineKeyboardArrowDown />
        </div>
        {/* Button for Desktop */}
        <div className="hidden md:flex px-5 py-2 rounded-full bg-[#4335de] text-white cursor-pointer">
          Sign in
        </div>
        {/* Hamburger Menu for Mobile */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-black ml-auto md:hidden cursor-pointer"
        >
          {isOpen ? <IoCloseOutline size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-[#F3F8FF] md:hidden flex flex-col items-center list-none py-4 space-y-4 h-screen">
          <li className="cursor-pointer text-black">iPhone</li>
          <li className="cursor-pointer text-black">Android</li>
          <li className="cursor-pointer text-black">Help</li>
          <li className="cursor-pointer text-black">Company</li>
          <button className="px-5 py-2 rounded-full bg-[#4335de] text-white cursor-pointer">
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
