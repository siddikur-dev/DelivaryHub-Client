import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import { HashLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className=" flex justify-center my-20 ">
        <HashLoader size= {150} color="rgba(232, 89, 79, 1)" />
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return <div>{children};</div>;
};

export default PrivateRoute;
