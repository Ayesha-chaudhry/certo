"use client"
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  
  return (
    <div>
      <div className="bg-[#F3F8FF] flex justify-around items-center list-none py-4">
        {/* Logo */}
        <div className="">
          <img src="/images/Logo.png" alt="/images/Logo.png" className="h-12" />
        </div>
        {/* Navigation */}
        <div className="hidden md:flex justify-around items-center text-black gap-5 font-bold">
          <li>iPhone</li>
          <li>Android</li>
          <li>Help</li>
          <li>Company</li>
          <MdOutlineKeyboardArrowDown/>
          
        </div>
        {/* Button */}
        <div  className="hidden md:flex px-5 py-2 rounded-full bg-[#4335de]">Sign in</div>
        {/* Menu */}
        <div onClick={() => {
          setIsOpen(!isOpen)
          console.log(isOpen)
         }} className="text-black ml-28 md:hidden">
        {isOpen ? <IoCloseOutline size={30}/> : <RxHamburgerMenu size={30}/>}        
        </div>
        {/* For Mobile start */}
        {/* <div className="top-0 left-0 fixed bg-green h-[100hv]">
        <div className="hidden md:flex justify-around items-center text-black gap-5 font-bold">
          <li>iPhone</li>
          <li>Android</li>
          <li>Help</li>
          <li>Company</li>
          <MdOutlineKeyboardArrowDown/>
          
        </div>
        </div> */}
        {/* For Mobile End */}
      </div>
    </div>
  );
};

export default Navbar;
