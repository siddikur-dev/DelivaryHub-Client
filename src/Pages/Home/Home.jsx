import React from "react";
import AllToys from "../../Component/Toys/AllToys";
import Slider from "../../Component/Slider/Slider";
import Review from "../Review/Review";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Slider></Slider>

      {/*  */}
      <AllToys></AllToys>
      <Review />
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
