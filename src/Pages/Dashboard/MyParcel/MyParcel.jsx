import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  // const handle delete parcel
  const handleDeleteParcel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((data) => {
          if (data.data.deletedCount) {
            // it will be automatically refresh window
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto shadow-md rounded-xl">
      <table className="table table-zebra w-full">
        <thead className="bg-base-200 text-base font-semibold">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            {/* <th>Created At</th> */}
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
              {/* <td>{parcel.createdAt}</td> */}
              <td>৳{parcel.cost}</td>
              <td>
                <Link
                  to={`/dashboard/payment/${parcel._id}`}
                  className="btn btn-xs btn-secondary text-black"
                >
                  {" "}
                  Pay
                </Link>
                {/* <span
                  className={`badge ${
                    parcel.payment_status === "paid"
                      ? "badge-success"
                      : "badge-error"
                  }`}
                >
                  {parcel.payment_status}
                </span> */}
              </td>
              <td className="space-x-2">
                <button className="btn btn-xs hover:btn-secondary text-black">
                  Details
                </button>
                {parcel.payment_status === "unpaid" && (
                  <button className="btn btn-xs btn-primary">Pay</button>
                )}
                <button
                  onClick={() => handleDeleteParcel(parcel._id)}
                  className="btn btn-xs btn-error btn-outline"
                >
                  <FaTrashAlt />
                </button>
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
