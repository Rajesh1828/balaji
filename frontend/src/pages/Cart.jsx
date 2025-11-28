import React, { useContext, useEffect, useState } from 'react'
import DynamicHeroPage from '../components/DynamicHeroPages/DynamicHeroPage'
import { GiftContext } from '../context/GiftContext'

const Cart = () => {
  const{cartItems,products,updateQuantity}=useContext(GiftContext);
  const[cartDataItem,setCartDataItem]=useState([]);



const crt = () => {
  let tempData = [];

  for (const items in cartItems) {
    for (const size in cartItems[items]) {
      for (const color in cartItems[items][size]) {

        const qty = cartItems[items][size][color];
        if (qty > 0) {

          const product = products.find(
            (prd) =>
              String(prd.id) === String(items) ||
              String(prd._id) === String(items)
          );

          if (!product) continue;

          tempData.push({
            ...product,
            size,
            color,
            quantity: qty,
          });
        }
      }
    }
  }

  setCartDataItem(tempData);
};


  useEffect(()=>{
    crt()
  },[cartItems,products])


  return (
    <>
      {/* <DynamicHeroPage/> */}
<div className="max-w-7xl mx-auto px-4 py-10">

  <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

  {cartDataItem.length === 0 ? (
    <p className="text-lg">Your cart is empty.</p>
  ) : (
    <div className="space-y-5">

      {cartDataItem.map((item, index) => (
        <div
          key={index}
          className="flex gap-5 p-4  rounded-lg shadow-sm bg-white"
        >

          {/* Image */}
          <img
            src={item?.images || item?.img}
            alt=""
            className="w-28 h-28 object-cover rounded-lg"
          />

          {/* Info */}
          <div className="flex justify-between w-full">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>

              <p className="text-sm">
                Size: <span className="font-bold">{item.size}</span>
              </p>

              <p className="text-sm">
                Color: <span className="font-bold">{item.color}</span>
              </p>

              <p className="text-sm font-semibold">
                Price: ₹{item.price}
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-3 mt-2">
                <button onClick={()=>updateQuantity(item.id || item._id , item.size, item.color, item.quantity-1)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                  -
                </button>

                <span className="font-bold">{item.quantity}</span>

                <button onClick={()=>updateQuantity(item.id || item._id , item.size, item.color, item.quantity+1)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 ">
                  +
                </button>
              </div>
            </div>

            {/* Remove */}
            <div className="flex flex-col justify-between">
              <button className="text-red-500 font-semibold hover:text-red-700">
                Remove
              </button>

              <h3 className="font-bold text-lg">
                ₹{item.price * item.quantity}
              </h3>
            </div>
          </div>
        </div>
      ))}

      {/* TOTAL SECTION */}
      <div className="p-5 border rounded-lg shadow-md bg-gray-50 mt-8">
        <h3 className="text-xl font-semibold mb-3">Order Summary</h3>

        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>
            ₹
            {cartDataItem.reduce(
              (acc, itm) => acc + itm.price * itm.quantity,
              0
            )}
          </span>
        </div>

        <button className="w-full mt-5 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )}
</div>

    </>
  )
}

export default Cart