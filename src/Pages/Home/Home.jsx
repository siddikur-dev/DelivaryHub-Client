import React from "react";
import HeroSlider from "./HeroSlider";
import OurServices from "./OurServices";
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
        <OurServices />
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
