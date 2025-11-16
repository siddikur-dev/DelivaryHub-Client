import React from "react";
import DeliveryLogo from "../../components/DevliveryLogo/DelivaryLogo";
import { Outlet } from "react-router";
import authImage from "../../../assets/Project/authImage.png";
const AuthLayout = () => {
  return (
    <div className="container mx-auto px-8 ">
      <DeliveryLogo></DeliveryLogo>
      <div className="flex gap-5">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <img src={authImage} alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;
