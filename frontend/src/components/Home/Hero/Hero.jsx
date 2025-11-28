import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "https://images.unsplash.com/photo-1760016666021-45ae08341f77?q=80&w=1489&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">

      {/* Slides */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={slides[index]}
          alt="Slide"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? "bg-white transition-all duration-300 scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Left / Right Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 p-2 rounded-full"
        onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)
        }
      >
        ◀
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 p-2 rounded-full"
        onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
      >
        ▶
      </button>
    </div>
  );
};

export default HeroSlider;
