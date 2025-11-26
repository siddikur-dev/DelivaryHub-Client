import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: "users",
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  
  return (
    <div>
      <table className="table table-zebra w-full">
        <thead className="bg-base-200 text-base font-semibold">
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
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
