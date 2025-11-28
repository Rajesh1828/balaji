import React, { useContext, useEffect, useState } from 'react';
import { GiftContext } from '../context/GiftContext';
import { useParams } from 'react-router-dom';
import { FaShippingFast } from "react-icons/fa";
import { IoStar } from 'react-icons/io5';
import LensMagnifier from '../components/Lens/LensMagnifier';


const Products = () => {
  const { products, addToCart } = useContext(GiftContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);

  const selectedProduct = products.find(
    p => p.id == id || p._id == id
  );

  const colorMap = {
    Gold: "#FFD700",
    Black: "#000000",
    Brown: "#8B4513",
    Pink: "#FFC0CB",
    Blue: "#0000FF",
    Green: "#008000",
    Beige: "#F5F5DC",
    Grey: "#808080",
    Yellow: "#FFFF00",
    Red: "#FF0000",
  };

  useEffect(() => {
    setProduct(selectedProduct);
    if (selectedProduct) {
      setSelectedImage(selectedProduct.images?.[0]);
    }
  }, [selectedProduct]);

  if (!product) {
    return <div className="p-10 text-center">Loading product...</div>;
  }

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="pt-10 px-5 md:px-10">
      <div className="flex flex-col lg:flex-row gap-10">

        {/* LEFT: Images */}
        <div className="flex-1 flex flex-col lg:flex-row gap-5">

          {/* Thumbnails */}
          <div className="
            flex 
            lg:flex-col 
            gap-3 
            overflow-x-auto 
            lg:overflow-y-auto 
            scrollbar-hide 
            lg:w-[18%] 
            w-full
          ">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setSelectedImage(img)}
                className="w-[22%] lg:w-full rounded border cursor-pointer 
                          hover:opacity-80 transition"
                alt="thumbnail"
              />
            ))}
          </div>

          {/* Main Image */}
          {/* <div className="flex justify-center items-center w-full">
            <img
              src={selectedImage}
              alt="Product"
              className="w-full lg:w-[85%] sm:h-[70vh]   object-cover"
            />
          </div> */}
          <LensMagnifier src={selectedImage} />

        </div>

        {/* RIGHT: Details */}
        <div className="flex-1">

          <h2 className="text-3xl font-bold">{product.name}</h2>
          <div className='flex mt-1'>
            Rating:
            {Array.from({length: 5}).map((_, index) => (
              <IoStar key={index} size={20} className="text-yellow-500" />
            ))}
          </div>

          {/* Price Section */}
          <div className="flex items-center gap-4 mt-4">
            <p className="text-3xl font-bold text-black">₹{product.price}</p>
            <p className="text-lg line-through text-gray-500">₹{product.mrp}</p>
            <p className="text-lg text-green-600 font-semibold">{discount}% OFF</p>
          </div>

          <p className="text-gray-600 mt-3 leading-6">{product.description}</p>

          {/* Colors */}
         <div className="mt-5">
  <h3 className="font-semibold">Available Colors:</h3>
  <div className="flex gap-3 mt-2">
    {product.colors.map((clr, idx) => (
      <button
        key={idx}
        onClick={() => setColor(clr)}
        className={`
          w-7 h-7 rounded-full border cursor-pointer shadow-sm hover:scale-110 transition
          ${color === clr ? "ring-2 ring-offset-2 ring-red-400" : ""}
        `}
        style={{
          backgroundColor: colorMap[clr] || clr
        }}
      ></button>
    ))}
  </div>
</div>


          {/* Sizes */}
         <div className="mt-5">
  <h3 className="font-semibold mb-1">Sizes:</h3>
  <div className="flex gap-3">
    {product.sizes.map((sizeItem, idx) => (
      <button
        key={idx}
        onClick={() => setSize(sizeItem)}
        className={`px-4 py-2 rounded cursor-pointer transition 
          ${size === sizeItem ? "bg-red-600 text-white" : "bg-red-400 text-white hover:bg-red -600"}
        `}
      >
        {sizeItem}
      </button>
    ))}
  </div>
</div>


          {/* Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row gap-4 ">
            <button onClick={()=>addToCart(product.id, color, size)} className="cursor-pointer px-6 py-3 border text-red-500  font-semibold hover:text-red-600image1 transition shadow">
              Add to Cart
            </button>

            <button className="cursor-pointer px-10 py-[0.7rem] border  font-semibold text-[0.9rem] bg-linear-to-r from-red-500 to-orange-500 text-white   transition shadow">
              Buy Now
            </button>
          </div>
          
          <div className='mt-7 flex  sm:flex-row gap-4'>
           <div>
            <img  className='w-20'  src="https://www.ecraftindia.com/cdn/shop/files/Authentic_product_black_100x100.jpg?v=1643437476" alt="image1" />
           </div>
           <div>
            <img   className='w-20' src="https://www.ecraftindia.com/cdn/shop/files/Free_Shipping_black_100x100.jpg?v=1643437500" alt="image1" />
           </div>
           <div>
            <img   className='w-20' src="https://www.ecraftindia.com/cdn/shop/files/Free_Shipping_black_100x100.jpg?v=1643437500" alt="image1" />
           </div>
           <div>
            <img  className='w-20'  src="https://www.ecraftindia.com/cdn/shop/files/Easy_Return_black_100x100.jpg?v=1643437526" alt="image1" />
           </div>
           <div>
            <img   className='w-20' src="https://www.ecraftindia.com/cdn/shop/files/make-in-india_f35f6d85-9268-422f-9dc6-c66787669bc5_100x100.jpg?v=1665206712" alt="image1" />
           </div>
          </div>
          <hr className='mt-2.5 text-gray-300' />
        <div className='mt-2.5'>
          <p> <span className='font-semibold'>Product Features:</span> <span className='font-semibold text-red-500'></span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, saepe maxime. Laboriosam beatae provident amet velit, aspernatur architecto doloribus animi repellendus sed cum hic doloremque in voluptas minus dolore dolorum.</p>
        </div>
         </div>
        
      </div>
      
    </div>
  );
};

export default Products;
