import React from "react";

const Category_2 = () => {
  return (
    <div className=" grid  grid-cols-2 gap-4 p-1 lg:grid-cols-5  lg:auto-rows-[200px]  lg:grid-rows-2 h-screen">
      {/* 1 */}
      <div className=" overflow-hidden relative 
        lg:[grid-area:1/1/2/2]">
        <img
          src="https://images.unsplash.com/photo-1700993714236-0f7df58304a0?q=80&w=1480&auto=format&fit=crop"
          className="w-full h-full object-cover hover:scale-105 transition duration-600"
          alt="Bird figurines"
        />
        <h2 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white  drop-shadow-lg">
          Bird Figurines
        </h2>
      </div>

      {/* 2 */}
      <div className=" overflow-hidden relative 
        lg:[grid-area:2/1/3/2]">
        <img
          src="https://images.unsplash.com/photo-1627811269953-78e2f66c671d?q=80&w=1480&auto=format&fit=crop"
          className="w-full h-full object-cover hover:scale-105 transition duration-600"
          alt="Ganesh idols"
        />
        <h2 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white  drop-shadow-lg">
          Ganesh Idols
        </h2>
      </div>

      {/* 3 */}
      <div className=" overflow-hidden relative 
        lg:[grid-area:1/2/2/3]">
        <img
          src="https://images.unsplash.com/photo-1591109477239-73d4d5ad9d43?q=80&w=1480&auto=format&fit=crop"
          className="w-full h-full object-cover hover:scale-105 transition duration-600"
          alt="Tealight holders"
        />
        <h2 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white  drop-shadow-lg">
          Tealight Holders
        </h2>
      </div>

      {/* 4 */}
      <div className=" overflow-hidden relative 
        lg:[grid-area:2/2/3/3]">
        <img
          src="https://images.unsplash.com/photo-1674744540420-e94848013fa7?q=80&w=1480&auto=format&fit=crop"
          className="w-full h-full object-cover hover:scale-105 transition duration-600"
          alt="Lamps & lightings"
        />
        <h2 className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white drop-shadow-lg">
          Lamps & Lightings
        </h2>
      </div>

      {/* 5 → FULL WIDTH on mobile */}
      <div className="
        col-span-2  overflow-hidden relative  lg:[grid-area:1/3/3/6]
      ">
        <img
          src="https://images.unsplash.com/photo-1586097138696-c880cc849b03?w=1200&auto=format&fit=crop&q=60"
          className="w-full h-full object-cover hover:scale-105 transition duration-600"
          alt="Krishna idols"
        />
        <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white  drop-shadow-xl">
          Krishna Idols
        </h2>
      </div>

    </div>
  );
};

export default Category_2;
