import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { CiLocationOn, CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <>
    <div className="bg-[#f6f6f8] w-full px-4 py-10 border border-gray-300 ">
      {/* Top About Section */}
      <p className="text-gray-700 text-sm ">
        balajiframe offers a sincere access to a treasure trove of hand-crafted artifacts,
        richly curated by partnering with empaneled artisan communities and independent artists.
        Borrowing inspiration from our ‘Rajasthani Karigar’ roots, we dedicate this gateway to the
        inspiring nature of Indian artisan-ship. Our mission is to offer the global audience a
        gateway to hand-picked Indian artifacts and inspire a conversation dedicated to conserving
        arts and crafts.
      </p>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10">

        {/* Get In Touch */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-red-600">Get In Touch</h2>

          <div className="flex items-start gap-3 mb-3">
            <CiLocationOn className="text-xl" />
            <p className="text-sm text-gray-600">
              44, Kailash Nagar, Guntur Road  
              Andhra Pradesh, 502006  
              Rajasthan, India
            </p>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <CiMail className="text-xl" />
            <p className="text-sm text-gray-600">support@balajiframe.com</p>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <HiOutlinePhone className="text-xl" />
            <p className="text-sm text-gray-600">+91 9876543210</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3 text-2xl">
            <FaFacebook className="cursor-pointer text-blue-600" />
            <FaInstagram className="cursor-pointer text-pink-500" />
            <FaTwitter className="cursor-pointer text-blue-400" />
            <FaLinkedin className="cursor-pointer text-blue-700" />
          </div>
        </div>

        {/* Top Categories */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-red-600">Top Categories</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Home Decor</li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Painting</li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Kitchen Utensils</li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Gifts</li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Rakhi</li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Gift Holder</li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Lord Statues</li>
          </ul>
        </div>

        {/* About Store */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-red-600">About Store</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">About Us</li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Bulk Orders</li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Reviews</li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Gifts</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="font-semibold text-lg mb- text-red-600">Useful Links</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Wishlist</li>
            <li className="text-gray-500 hover:text-red-600 cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* Help & Policy */}
        <div >
          <h2 className="font-semibold text-lg mb-4 text-red-600">Help & Policy</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
            <li className="hover:text-red-600 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-red-600 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-red-600 cursor-pointer">Return Policy</li>
          </ul>
        </div>
      </div>
    </div>
     {/* Footer Bottom */}
      <div className="text-center flex justify-center items-center py-5 text-xs text-gray-500">
        © {new Date().getFullYear()} Balaji Frame. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
