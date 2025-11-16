import React from "react";
import HeroSlider from "./HeroSlider";
import OurServices from "./OurServices";
import HowItWorks from "./HowItWorks";
// import OurClients from './OurClients';
import DeviceSupport from "./DeviceSupport";
import CustomerReview from "./CustomerReview";
import OurClients from "./OurClients";

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
        <OurServices />
      </section>
      <section>
        <OurClients />
      </section>
      <section>
        <DeviceSupport />
      </section>

      <section>
        <CustomerReview />
      </section>
    </>
  );
};

export default Home;
