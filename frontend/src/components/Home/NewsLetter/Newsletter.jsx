import React from 'react'
import { IoMailOpen } from "react-icons/io5";

const Newsletter = () => {
  return (
    <div className="bg-[#ed1b2f] w-full py-10 px-5 
        flex flex-col md:flex-row items-center justify-center gap-6">

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white text-center md:text-left max-w-xl">
        A Gift That Speaks From the Heart – Download Your Weekly Quote!
      </h2>

      {/* Icon */}
      <span className="rotate-[-45deg] text-white">
        <IoMailOpen size={60} />
      </span>

      {/* Input + Button */}
      <div className="flex w-full md:w-auto justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Type message"
          className="text-black bg-white py-2 px-3 text-center w-full md:w-64 
                     focus:outline-none rounded"
        />
        <button className="text-white px-4 py-2 bg-amber-950 rounded">
          Subscribe
        </button>
      </div>

    </div>
  );
};

export default Newsletter;
