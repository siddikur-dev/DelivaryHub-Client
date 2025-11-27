import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import { GoShieldX } from "react-icons/go";
import Swal from "sweetalert2";
const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to make ${user.displayName} an admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!"
    }).then((result) => {
      if (result.isConfirmed) {
        const roleInfo = { role: "admin" };
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
          .then(res => {
            if (res.data.modifiedCount) {
              refetch()
              Swal.fire({
                title: "Success!",
                text: "User role has been updated to admin.",
                icon: "success"
              });
            }
          })
          .catch(error => {
            Swal.fire({
              title: "Error!",
              text: "Failed to update user role.",
              icon: "error"
            });
          });
      }
    });
  }

  const handleRemoveAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to make ${user.displayName} a user?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make user!"
    }).then((result) => {
      if (result.isConfirmed) {
        const roleInfo = { role: "user" };
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
          .then(res => {
            if (res.data.modifiedCount) {
              refetch()
              Swal.fire({
                title: "Success!",
                text: "Admin role has been updated to user.",
                icon: "success"
              });
            }
          })
          .catch(error => {
            Swal.fire({
              title: "Error!",
              text: "Failed to update user role.",
              icon: "error"
            });
          });
      }
    });
  }



  return (
    <div>
      <label className="input">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input onChange={(e) => setSearchText(e.target.value)} type="search" className="grow" placeholder="Search" />
      </label>
      <table className="table table-zebra w-full">
        <thead className="bg-base-200 text-base font-semibold">
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action Button</th>
          </tr>
        </thead>
        <tbody>
          {users?.length > 0 ? (
            users.map((p, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="truncate" title={p.photoURL}>
                  <img
                    src={p.photoURL || "empty"}
                    className="w-6 rounded-full"
                    alt=""
                  />
                </td>
                <td>{p.displayName}</td>
                <td>{p.email}</td>
                <td>{p.role}</td>
                <td>
                  <>{
                    p.role === "user"
                      ?
                      <button
                        onClick={() => handleMakeAdmin(p)}
                        className="btn btn-xs btn-secondary text-white  "
                      >
                        <FaUserShield />

                      </button>
                      :
                      <button
                        onClick={() => handleRemoveAdmin(p)}
                        className="btn btn-xs btn-primary"
                      >
                        <GoShieldX />

                      </button>
                  }
                  </>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-gray-500 py-6">
                No payment history found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
