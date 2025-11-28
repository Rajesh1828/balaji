import React from "react";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";

const ProductItem = ({ id, images, name, price }) => {
  return (
    <div className="border border-gray-100  p-3  hover:shadow-md transition-all duration-300 bg-white">
      <Link to={`/products/${id}`}>

        {/* Image Container */}
        <div className="w-full h-[200px] overflow-hidden rounded-lg flex items-center justify-center bg-gray-50">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="mt-3">
          <h2 className="text-sm font-medium text-red-500 truncate">{name}</h2>
          <p className="text-base font-semibold text-red-600 mt-1">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoStar key={index} size={12} className="text-yellow-500" />
              ))}
            </div>

            ₹{price}
          </p>
        </div>

      </Link>
    </div>
  );
};

export default ProductItem;
