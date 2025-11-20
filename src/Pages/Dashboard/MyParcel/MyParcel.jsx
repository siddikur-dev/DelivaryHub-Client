import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="overflow-x-auto shadow-md rounded-xl">
      <table className="table table-zebra w-full">

        <thead className="bg-base-200 text-base font-semibold">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Created At</th>
            <th>Cost</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel, index) => (
            <tr key={parcel._id}>
              <td>{index + 1}</td>
              <td className="max-w-[180px] truncate">{parcel.parcelName}</td>
              <td className="capitalize">{parcel.parcelType}</td>
              <td>{parcel.createdAt}</td>
              <td>৳{parcel.cost}</td>
              <td>
                <span
                  className={`badge ${
                    parcel.payment_status === "paid"
                      ? "badge-success"
                      : "badge-error"
                  }`}
                >
                  {parcel.payment_status}
                </span>
              </td>
              <td className="space-x-2">
                <button className="btn btn-xs btn-outline">View</button>
                {parcel.payment_status === "unpaid" && (
                  <button className="btn btn-xs btn-primary">Pay</button>
                )}
                <button className="btn btn-xs btn-error">Delete</button>
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan="6" className="text-center text-gray-500 py-6">
              No parcels found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyParcel;
