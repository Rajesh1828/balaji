import React, { useRef, useState } from 'react';

const LensMagnifier = ({ src }) => {
  const [lensVisible, setLensVisible] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMove = (e) => {
    const img = imageRef.current;
    const rect = img.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setLensPosition({ x, y });
    setLensVisible(true);
  };

  return (
    <div
      className="relative w-full lg:w-[85%]"
      onMouseEnter={() => setLensVisible(true)}
      onMouseLeave={() => setLensVisible(false)}
      onMouseMove={handleMove}
    >
      <img
        src={src}
        ref={imageRef}
        alt="image"
        className="w-full md:h-[70vh] rounded-lg shadow-md object-cover"
      />

      {lensVisible && (
        <div
          className="hidden lg:block pointer-events-none absolute   shadow-lg"
          style={{
            width: "200px",
            height: "200px",
            top: lensPosition.y - 75,
            left: lensPosition.x - 75,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imageRef.current.width * 3}px ${
              imageRef.current.height * 2
            }px`,
            backgroundPosition: `-${lensPosition.x * 2 - 75}px -${
              lensPosition.y * 2 - 75
            }px`,
          }}
        ></div>
      )}
    </div>
  );
};

export default LensMagnifier;
