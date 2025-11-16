import React from "react";
import HeroSlider from "./HeroSlider";
import TopFoods from "./TopFoods";
import HowItWorks from "./HowItWorks";
// import CallToAction from './CallToAction';
import DeviceSupport from "./DeviceSupport";
import CustomerReview from "./CustomerReview";

const Home = () => {
  return (
    <>
      <section>
        <HeroSlider />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <TopFoods />
      </section>
      <section>
        <DeviceSupport />
      </section>

      {/* <section>
                <CallToAction/>
            </section> */}
      <section>
        <CustomerReview />
      </section>
    </>
  );
};

export default Home;
