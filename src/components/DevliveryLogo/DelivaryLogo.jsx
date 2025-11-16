import React from "react";
import logo from "../../../assets/Project/logo.png";
import { Link } from "react-router";
const DeliveryLogo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="" />
      <h2 className="text-xl font-bold ms-5 -mt-8">Delivery Hub</h2>
    </Link>
  );
};

export default DeliveryLogo;
