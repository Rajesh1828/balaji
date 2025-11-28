import React, { useContext, useEffect, useState } from 'react';
import { GiftContext } from '../context/GiftContext';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { products } = useContext(GiftContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

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
      setSelectedImage(selectedProduct.images?.[0]); // default first image
    }
  }, [selectedProduct]);

  if (!product) {
    return <div className="p-10 text-center">Loading product...</div>;
  }

  return (
    <div className='border-top pt-10 px-5 md:px-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex flex-col sm:gap-12 sm:flex-row'>
        
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          
          {/* Thumbnails */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll gap-3 justify-between sm:justify-normal sm:w-[16.5%] w-full'>
            
            {product.images?.map((img, index) => (
              <img
                src={img}
                key={index}
                onClick={() => setSelectedImage(img)}
                alt=""
                className='w-[30%] sm:w-full cursor-pointer border border-gray-300 rounded'
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="  flex justify-start items-start">
            <img
              src={selectedImage}
              alt="selected"
              className="sm:w-1/2 w-full rounded-lg shadow"
            />
          </div>
<div className="flex gap-3 mt-3">
  {product.colors.map((color, index) => (
    <div
      key={index}
      className="w-7 h-7 rounded-full border cursor-pointer shadow-sm hover:scale-110 transition"
      style={{ backgroundColor: colorMap[color] || color }}
    ></div>
  ))}
</div>
<div>
    <h2 className='text-3xl'>

    {product.name}
    </h2>
    <p>{product.price}</p>
    </div>         

        </div>
      </div>
    </div>
  );
};

export default Products;
