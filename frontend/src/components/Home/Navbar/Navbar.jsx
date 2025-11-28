import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMail, IoCart } from "react-icons/io5";
import { NavLink, Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";





const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-[#ed1b2f] text-white py-1 ">
        <div className="w-full mx-auto flex justify-between items-center px-4  text-sm">
          <div className="w-full mx-auto flex justify-end gap-7 items-center px-4 text-sm">
            <div className="flex gap-5 items-center justify-center">
              <p className="hidden sm:flex items-center justify-center gap-2"> <IoMail /> support@example.com</p>
              <p className="hidden sm:flex items-center justify-center gap-2" > <FaPhoneAlt /> +91 98765 43210</p>
            </div>

            <div className="flex gap-4 text-gray-700 items-center justify-center">
              <a href="#" className="hover:text-black text-white"><FaFacebookF /></a>
              <a href="#" className="hover:text-black text-white"><FaInstagram /></a>
              <a href="#" className="hover:text-black text-white"><FaTwitter /></a>
              <a href="#" className="hover:text-black text-white"><FaWhatsapp /></a>
            </div>
          </div>

        </div>
      </div>


      {/* Main Navbar */}
      <nav className="w-full shadow-sm bg-[#f1eded]">
        <div className="max-full mx-auto flex justify-between items-center px-4 h-16">

          {/* Logo */}
          <Link to='/'>
            <img src={assets.logo} alt="logo" className="w-30" />
          </Link>
          {/* searchbar */}
          <input type="search" placeholder="Search here" className="px-2 md:w-[50%] w-[40%] py-[5px] rounded-lg  bg-[#ffffff]  focus:outline-none " />
          <div className="flex gap-5">
            <Link to='/cart' className='flex gap-2 items-center justify-center'><IoCart className='text-2xl' /> <span className="text-sm font-bold hidden md:flex">Cart</span>
            </Link>
            <Link to='/login' className='flex gap-2 items-center justify-center '>  <CgProfile /><span className=" text-sm font-bold hidden md:flex gap-2 items-center justify-center">
              Login</span>
            </Link>
              <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <RxCross1 /> : <CiMenuFries />}
          </button>
          </div>


        </div>

         {/* menu */}
        <div className=" hidden  max-full mx-auto text-sm md:flex justify-center items-center bg-[#ffffff] px-4 h-12">
          <ul className="hidden md:flex gap-8 font-medium">

            <NavLink to='/'className={({isActive})=>(isActive?"active":'')}>

              <li className="cursor-pointer hover:text-red-600">Home</li>
            </NavLink>
            <NavLink to='/about' className={({isActive})=>(isActive?"active":'')}>

              <li className="cursor-pointer hover:text-red-600">About</li>
            </NavLink>
            <NavLink to='/collections' className={({isActive})=>(isActive?"active":'')}>

              <li className="cursor-pointer hover:text-red-600">Collections</li>
            </NavLink>

            <NavLink to='/contact' className={({isActive})=>(isActive?"active":'')}>

              <li className="cursor-pointer hover:text-red-600">Contact</li>
            </NavLink>
          </ul>
        
        </div>

        {/* Mobile Menu (Smooth Slide Down) */}
        <div
          className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 
  ${open ? "max-h-96 opacity-100 py-3 px-4" : "max-h-0 opacity-0 py-0 px-4"}`}
        >
          {open && (
            <div className="space-y-3">
              <NavLink to='/' className={({isActive})=>(isActive?"active":'')}>
                <p onClick={() => setOpen(false)} className="cursor-pointer  pb-2">Home</p>
              </NavLink>
              <NavLink to='/about' className={({isActive})=>(isActive?"active":'')}>

                <p onClick={() => setOpen(false)} className="cursor-pointer  pb-2">About</p>
              </NavLink>

              <NavLink to='/collections' className={({isActive})=>(isActive?"active":'')}>

                <p onClick={() => setOpen(false)} className="cursor-pointer  pb-2">Collections</p>
              </NavLink>

              <NavLink to='/contact' className={({isActive})=>(isActive?"active":'')}>

                <p onClick={() => setOpen(false)} className="cursor-pointer  pb-2">Contact</p>
              </NavLink>


            </div>
          )}
        </div>

      </nav>
    </>
  );
};

export default Navbar;
