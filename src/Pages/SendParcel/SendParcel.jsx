import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const sendParcel = (data) => {
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    const isDocument = data.parcelType == "document";
    console.log(data);
    let cost = 0;

    if (isDocument) {
      //  Cost is set here for documents
      cost = isSameDistrict ? 60 : 80;
    } else {
      // For non-documents
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        // Cost is set here for non-documents > 3kg
        cost = minCharge + extraCharge;
      }
    }

    // MOVED THESE LINES OUTSIDE THE IF/ELSE BLOCKS
    data.cost = cost;
    // data.paymentStatus = "pending";
    Swal.fire({
      title: "Are you sure?",
      text: `You will be paid ${cost} taka `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          console.log(res.data);
        });
        Swal.fire({
          title: "Pay!",
          text: "Your parcel's cost paid.",
          icon: "success",
        });
      }
    });
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
      <title>Send Parcel - DeliveryHub</title>
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
                defaultValue={user?.displayName}
                readOnly
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
                <option>Select your division</option>
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
                <option>Select District</option>
                {districtsByDivision(senderDivision).map((district, i) => (
                  <option value={district} key={i}>
                    <option value={district}>{district} </option>
                  </option>
                ))}
              </select>
            </div>
            {/* sender email */}
            <div className="mt-4">
              <input
                type="email"
                {...register("senderEmail", {
                  required: true,
                })}
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full"
                placeholder="Sender Email"
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
                <option>Select your division</option>
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
                <option>Select receiver district</option>
                {districtsByDivision(receiverDivision).map((district, i) => (
                  <option value={district} key={i}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            {/* receiver email */}
            <input
              type="email"
              {...register("receiverEmail", {
                required: true,
              })}
              className="input input-bordered w-full mt-4"
              placeholder="Receiver Email"
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
