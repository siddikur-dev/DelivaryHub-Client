import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const sendParcel = (data) => {
    console.log(data);
    const sameDistrict = data.senderDistrict === data.receiverDistrict;
    console.log(sameDistrict);
  };

  const serviceCenter = useLoaderData();
  const duplicateDivision = serviceCenter.map((c) => c.division);
  const divisions = [...new Set(duplicateDivision)];
  // explore useMemo Callback
  const senderDivision = useWatch({ control, name: "senderDivision" });
  const receiverDivision = useWatch({ control, name: "receiverDivision" });
  // districts by divisions
  const districtsByDivision = (senderDivision) => {
    const divisions = serviceCenter.filter(
      (s) => s.division === senderDivision
    );
    const district = divisions.map((d) => d.district);
    return district;
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-10 rounded-3xl shadow-sm">
      {/* Title */}
      <h1 className="text-4xl font-bold text-[#063C33]">Add Parcel</h1>

      <hr className="my-6 border-gray-300" />

      {/* Section Title */}
      <h2 className="text-xl font-semibold text-[#063C33] mb-4">
        Enter your parcel details
      </h2>

      <form onSubmit={handleSubmit(sendParcel)}>
        {/* Parcel Type */}
        <div>
          <label className="label">Type</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 label">
              <input
                type="radio"
                {...register("parcelType", { required: true })}
                value="document"
                className="radio"
              />
              Document
            </label>
            <label className="flex items-center gap-2 label">
              <input
                type="radio"
                {...register("parcelType", { required: true })}
                value="non-document"
                className="radio"
              />
              Non-Document
            </label>
          </div>
          {errors.parcelType && (
            <span className="text-red-500 text-sm">
              Parcel type is required
            </span>
          )}
        </div>

        {/* Parcel Name + Weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <label className="text-sm font-medium">Parcel Name</label>
            <input
              {...register("parcelName", { required: true })}
              className="input input-bordered w-full mt-1"
              placeholder="Parcel Name"
            />
            {errors.parcelName && (
              <span className="text-red-500 text-sm">
                Parcel name is required
              </span>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Parcel Weight (KG)</label>
            <input
              type="number"
              {...register("parcelWeight", {
                required: true,
              })}
              step="0.01"
              className="input input-bordered w-full mt-1"
              placeholder="Parcel Weight (KG)"
            />
            {errors.parcelWeight && (
              <span className="text-red-500 text-sm">
                {errors.parcelWeight.message || "Parcel weight is required"}
              </span>
            )}
          </div>
        </div>

        {/* Sender + Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Sender */}
          <div>
            <h3 className="text-lg font-semibold text-[#063C33] mb-3">
              Sender Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                {...register("senderName", { required: true })}
                className="input input-bordered"
                placeholder="Sender Name"
              />

              <input
                {...register("senderAddress", { required: true })}
                className="input input-bordered"
                placeholder="Address"
              />
              {/* sender division */}
              <select
                {...register("senderDivision", { required: true })}
                className="select select-bordered "
              >
                <option value="">Select your division</option>
                {divisions.map((division, i) => (
                  <option value={division} key={i}>
                    {division}
                  </option>
                ))}
              </select>
              {/* sender district */}
              <select
                {...register("senderDistrict", { required: true })}
                className="select select-bordered"
              >
                <option value="">Select District</option>
                {districtsByDivision(senderDivision).map((district, i) => (
                  <option value={district} key={i}>
                    <option value={district}>{district} </option>
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <input
                type="number"
                {...register("senderContact", {
                  required: true,
                })}
                className="input input-bordered w-full"
                placeholder="Sender Contact No"
              />
            </div>

            <textarea
              {...register("pickupInstruction")}
              className="textarea textarea-bordered w-full mt-4"
              placeholder="Pickup Instruction"
            ></textarea>
          </div>

          {/* Receiver */}
          <div>
            <h3 className="text-lg font-semibold text-[#063C33] mb-3">
              Receiver Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                {...register("receiverName", { required: true })}
                className="input input-bordered"
                placeholder="Receiver Name"
              />

              <input
                {...register("receiverAddress", { required: true })}
                className="input input-bordered"
                placeholder="Address"
              />

              {/* receiver division */}
              <select
                {...register("receiverDivision", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select your division</option>
                {divisions.map((division, i) => {
                  return (
                    <option value={division} key={i}>
                      {division}
                    </option>
                  );
                })}
              </select>
              {/* receiver district */}
              <select
                {...register("receiverDistrict", { required: true })}
                className="select select-bordered"
              >
                <option value="">Select receiver district</option>
                {districtsByDivision(receiverDivision).map((district) => (
                  <option value={district}>{district}</option>
                ))}
              </select>
            </div>
            {/* receiver number */}
            <input
              type="number"
              {...register("receiverContact", {
                required: true,
              })}
              className="input input-bordered w-full mt-4"
              placeholder="Receiver Contact No"
            />

            <textarea
              {...register("deliveryInstruction")}
              className="textarea textarea-bordered w-full mt-4"
              placeholder="Delivery Instruction"
            ></textarea>
          </div>
        </div>

        {/* Pickup Time Note */}
        <p className="text-sm text-gray-600 mt-6">
          * PickUp Time 4pm–7pm Approx.
        </p>

        {/* Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="btn bg-secondary/80 hover:bg-secondary text-black px-10"
          >
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
