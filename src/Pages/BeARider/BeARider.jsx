import React from "react";
import { useForm, useWatch } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";

const BeARider = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const serviceCenter = useLoaderData();

  const beARider = async (data) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Login Required",
        text: "Please login to submit your application.",
      });
      return;
    }

    const riderData = {
      ...data,
      name: user.displayName,
      email: user.email,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    Swal.fire({
      title: "Confirm Submission?",
      text: "Your application will be sent for approval.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, submit",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.post("/riders", riderData);
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Submitted!",
              text: "Your application is pending approval.",
            });
            reset();
          }
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: err.response?.data?.message || "Submission failed.",
          });
        }
      }
    });
  };

  // -----------------------------
  // Create dropdown dependent
  // -----------------------------
  const duplicateDivision = serviceCenter.map((c) => c.division);
  const divisions = [...new Set(duplicateDivision)];

  const riderDivision = useWatch({ control, name: "riderDivision" });

  const getDistrictsByDivision = (division) => {
    const found = serviceCenter.filter((item) => item.division === division);
    return found.map((d) => d.district);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto p-10 bg-white rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Become a Rider
        </h1>

        <form onSubmit={handleSubmit(beARider)} className="space-y-6">
          {/* Personal Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="label">Full Name</label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full mb-4 bg-gray-100"
            />

            <label className="label">Email</label>
            <input
              type="email"
              defaultValue={user?.email || ""}
              className="input input-bordered w-full mb-4 bg-gray-100"
            />

            <label className="label">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone", { required: "Phone is required" })}
              className="input input-bordered w-full mb-4"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}

            <label className="label">NID</label>
            <input
              type="text"
              placeholder="Enter NID"
              {...register("nid", { required: "NID is required" })}
              className="input input-bordered w-full"
            />
            {errors.nid && (
              <p className="text-red-500 text-sm">{errors.nid.message}</p>
            )}
          </div>

          {/* Service Area */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="label">Region (Division)</label>
            <select
              {...register("riderDivision", { required: true })}
              className="select select-bordered w-full mb-4"
            >
              <option value="">Select Division</option>
              {divisions.map((div, i) => (
                <option key={i} value={div}>
                  {div}
                </option>
              ))}
            </select>
            {errors.riderDivision && (
              <p className="text-red-500 text-sm">Region is required</p>
            )}

            <label className="label">District</label>
            <select
              {...register("riderDistrict", { required: true })}
              className="select select-bordered w-full"
              disabled={!riderDivision}
            >
              <option value="">Select District</option>
              {getDistrictsByDivision(riderDivision)?.map((district, i) => (
                <option key={i} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.riderDistrict && (
              <p className="text-red-500 text-sm">District is required</p>
            )}
          </div>

          {/* Vehicle Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="label">Bike Brand & Model</label>
            <input
              type="text"
              placeholder="e.g., Yamaha FZ"
              {...register("bike_brand", { required: "Bike brand required" })}
              className="input input-bordered w-full mb-4"
            />
            {errors.bike_brand && (
              <p className="text-red-500 text-sm">
                {errors.bike_brand.message}
              </p>
            )}

            <label className="label">Bike Registration Number</label>
            <input
              type="text"
              placeholder="e.g., Dhaka Metro-1234"
              {...register("bike_registration", {
                required: "Registration required",
              })}
              className="input input-bordered w-full"
            />
            {errors.bike_registration && (
              <p className="text-red-500 text-sm">
                {errors.bike_registration.message}
              </p>
            )}
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="label">Additional Notes</label>
            <textarea
              placeholder="Optional notes"
              {...register("note")}
              className="textarea textarea-bordered w-full"
              rows={4}
            ></textarea>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-secondary text-black w-full">
            Submit Rider Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeARider;
