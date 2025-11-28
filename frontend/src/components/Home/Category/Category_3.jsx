import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Handicraft Items",
    img: "https://images.unsplash.com/photo-1610177498573-78deaa4a797b?q=80&w=1480&auto=format&fit=crop",
    link: "/",
  },
  {
    name: "Water Fountains",
    img: "https://images.unsplash.com/photo-1707197113825-add4072ff8e1?q=80&w=1474&auto=format&fit=crop",
    link: "/",
  },
  {
    name: "Buddha Idols",
    img: "https://images.unsplash.com/photo-1735923358182-6e60f76ab011?q=80&w=1494&auto=format&fit=crop",
    link: "/",
  },
  {
    name: "Pendulum Clocks",
    img: "https://images.unsplash.com/photo-1679973957366-2f926a250629?q=80&w=1480&auto=format&fit=crop",
    link: "/",
  },

];

const Category_3 = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5 px-5">

      {categories.map((item, index) => (
        <Link to={item.link} key={index}>
          <motion.div 
            transition={{ duration: 0.3 }} 
            className="flex flex-col items-center cursor-pointer "
          >
            <img
              src={item.img}
              alt={item.name}
              className=" object-cover w-full  hover:scale-105 transition duration-600"
            />
            <h2 className="mt-2 font-medium">{item.name}</h2>
          </motion.div>
        </Link>
      ))}

    </div>
  );
};

export default Category_3;
