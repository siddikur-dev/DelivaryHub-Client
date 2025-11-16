import React, { useState } from "react";
import { useParams } from "react-router";
import useToys from "../../../hook/useToys";
import toast from "react-hot-toast";
import DetailsImageZoom from "./DetailsImageZoom";

const ToyCardDetails = () => {
  const { toys, loading } = useToys();
  const { id } = useParams();
  const detailsId = parseInt(id);

  const [formData, setFormData] = useState({ name: "", email: "" });

  const singleToy = toys.find((toy) => toy.toyId === detailsId);

  if (loading) {
    return <p>loading...</p>;
  }
  //  Not Found
  if (!singleToy) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-lg text-red-500 font-semibold">
        Toy not found!
      </div>
    );
  }

  const {
    toyName,
    pictureURL,
    price,
    rating,
    availableQuantity,
    description,
    sellerName,
    sellerEmail,
  } = singleToy;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({ name: "", email: "" });
    toast.success(" Your request has been submitted successfully!");
  };

  return (
    <section className="bg-base-100 py-16 px-4">
      {/* helmet title */}
      <title>Toy Details - Toy Universe</title>
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        {/* <div className="lg:w-1/2 bg-white rounded-2xl shadow-md p-4 flex justify-center items-center cursor-zoom-in">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full h-96 object-contain rounded-xl cursor-zoom-in"
          />
        </div> */}
        <DetailsImageZoom pictureURL={pictureURL} toyName={toyName} />

        {/* Details Section */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">{toyName}</h1>
            <p className="text-base-content/80 mb-4">{description}</p>

            <div className="space-y-2">
              <p className="text-lg  ">
                💲 Price: <span className="font-semibold"> ${price}</span>
              </p>
              <p className=" ">⭐ Rating: {rating}</p>
              <p className="">🧸 Available: {availableQuantity} pcs</p>
              <p className="text-sm text-base-content/90">
                Seller: {sellerName} ({sellerEmail})
              </p>
            </div>
          </div>

          {/* Try Now Form */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Try Now This Toy 🎯
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4  p-5 rounded-xl shadow-md"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />

              <button
                type="submit"
                className="btn btn-primary w-full text-white  transition-all duration-300"
              >
                Try Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyCardDetails;
