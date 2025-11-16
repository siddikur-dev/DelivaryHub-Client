import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  // Destructure the required fields
  const { pictureURL, toyName, rating, availableQuantity, price, toyId } = toy;

  return (
    <div className="group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
      {/* Card Image */}
      <figure className="overflow-hidden">
        <img
          src={pictureURL}
          alt={toyName}
          className="h-40 sm:h-44 md:h-48 lg:h-56 w-full object-contain bg-white dark:bg-white transition-transform duration-500 ease-in-out group-hover:scale-110 p-4"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body bg-base-100 transition-all duration-300 group-hover:shadow-xl">
        <h2 className="card-title text-primary text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
          {toyName}
        </h2>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm ">⭐ {rating}</span>
          <span className="text-xs sm:text-sm">
            Available: {availableQuantity}
          </span>
        </div>
        <p className="text-sm sm:text-lg font-semibold ">${price}</p>

        {/* Button */}
        <Link
          to={`/toy-details/${toyId}`}
          className="btn btn-primary w-full sm:w-auto text-sm sm:text-base flex items-center justify-center gap-2 py-2 px-4 "
        >
          <span>View More</span>
          <FaArrowRightLong className="text-sm sm:text-base" />
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
