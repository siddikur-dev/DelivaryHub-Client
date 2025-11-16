import React, { useState } from "react";
import useToys from "../../hook/useToys";
import ToyCard from "./ToyCard/ToyCard";
import { HashLoader } from "react-spinners";

const AllToys = () => {
  const { toys, loading } = useToys();

  const [showAll, setShowAll] = useState(false);
  // click  show all / show less
  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <HashLoader size={150} color="rgba(232, 89, 79, 1)" />
      </div>
    );
  }

  // initial showing fast 6 data
  const toysToShow = showAll ? toys : toys.slice(0, 8);
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-8">
            Explore Popular Toys
          </h2>
        </div>
        {/* Map All Toys  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {toysToShow.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy}></ToyCard>
          ))}
        </div>
        {/* Show All Button */}
        <div className="flex justify-center my-6">
          <button
            className="mx-auto btn btn-primary btn-outline"
            onClick={handleShowAll}
          >
            {showAll ? "ShowLess" : "ShowAll"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllToys;
