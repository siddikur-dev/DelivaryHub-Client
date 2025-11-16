import React, { useState } from "react";

const DetailsImageZoom = ({ pictureURL, toyName }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  const handleClick = (e) => {
    if (!isZoomed) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setBackgroundPosition(`${x}% ${y}%`);
      setIsZoomed(true);
    } else {
      setIsZoomed(false);
      setBackgroundPosition("center");
    }
  };

  const handleMouseMove = (e) => {
    if (isZoomed) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setBackgroundPosition(`${x}% ${y}%`);
    }
  };

  return (
    <div
      className="relative lg:w-1/2 bg-white rounded-2xl p-4 flex justify-center items-center overflow-hidden cursor-zoom-in"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      {/* Normal image (hidden when zoomed) */}
      <img
        src={pictureURL}
        alt={toyName}
        className={`w-full h-96 object-contain rounded-xl transition-opacity duration-300 ${
          isZoomed ? "opacity-0 cursor-zoom-out" : "opacity-100 cursor-zoom-in"
        }`}
      />

      {/* Zoomed background image */}
      {isZoomed && (
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            backgroundImage: `url(${pictureURL})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "200%", // zoom level
            backgroundPosition,
            transition: "background-position 0.05s ease",
            cursor: "zoom-out",
          }}
        ></div>
      )}
    </div>
  );
};

export default DetailsImageZoom;
