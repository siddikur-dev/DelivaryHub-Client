import React from "react";
import CountUp from "react-countup";
import {
  FaCheckCircle,
  FaRocket,
  FaHandsHelping,
  FaCogs,
  FaGift,
} from "react-icons/fa";
import { Link } from "react-router";

const About = () => {
  return (
    <main className="min-h-[80vh] bg-base-100 text-base-content transition-colors duration-300">
      {/* HERO */}
      <section className="py-16 px-6 lg:px-12">
        <div className="container mx-auto flex  flex-col-reverse px-6 lg:px-12 lg:flex-row gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary text-center lg:text-left">
              About Us
            </h1>
            <p className="mt-4 lg:text-lg ">
              We build a friendly, secure marketplace that connects families
              with local toy sellers. Every toy on our platform is chosen to
              spark imagination, encourage learning, and ensure safety.
            </p>

            <div className="mt-6 flex gap-3 flex-col sm:flex-row">
              <Link
                to="/"
                className="btn btn-primary text-white"
                aria-label="Visit site"
              >
                Visit Toy Universe
              </Link>
              <Link
                to="/feature"
                className="btn btn-primary btn-outline border border-primary "
                aria-label="See features"
              >
                Feature
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-start">
                <span className="text-3xl font-bold text-primary">
                  <CountUp end={500} delay={1} />+
                </span>
                <span className="text-sm text-base-content/70">
                  Toys curated
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-3xl font-bold text-primary">
                  <CountUp end={200} delay={1} />+
                </span>
                <span className="text-sm text-base-content/70">
                  Local sellers
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-3xl font-bold text-primary">
                  <CountUp end={99} delay={1} />%
                </span>
                <span className="text-sm text-base-content/70">
                  Safety checked
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-3xl font-bold text-primary">
                  <CountUp end={24} delay={2} />
                  /
                  <CountUp end={7} delay={1} />
                </span>
                <span className="text-sm text-base-content/70">Support</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden  p-6">
            <img
              src="https://i.postimg.cc/Qdvz01QD/about.jpg"
              alt="About Img"
              className="w-full  object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-12 px-6 lg:px-12 border-t border-base-200">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-primary">Our Story</h2>
          <p className="mt-4 text-base-content/80 max-w-3xl mx-auto">
            Toy Universe BD started as a small idea — to make quality toys
            accessible and to empower local sellers. We focused on safety,
            education, and joy. Over time we grew into a platform that balances
            playful design with practical features: user accounts, protected
            routes, profile editing, and easy toy management.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-12 ">
        <div className="container mx-auto flex flex-col md:flex-row gap-6 px-6 lg:px-12">
          {/* Card1 */}
          <div className="p-6 border-t-4 border-primary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70 ">
            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-5xl text-primary  transition-colors duration-300" />
            </div>
            <h3
              className="text-xl font-semibold mb-2 
             transition-colors duration-300"
            >
              Safety First
            </h3>
            <p className="text-sm md:text-base transition-colors duration-300">
              Every product listing follows strict safety guidelines — non-toxic
              materials and age-appropriate labeling.
            </p>
          </div>
          {/*Card2  */}
          <div className="p-6 border-t-4 border-secondary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70 ">
            <div className="flex justify-center mb-4">
              <FaRocket className="text-5xl text-secondary  transition-colors duration-300" />
            </div>
            <h3
              className="text-xl font-semibold mb-2 
             transition-colors duration-300"
            >
              Learn Through Play
            </h3>
            <p className="text-sm md:text-base transition-colors duration-300">
              Toys that inspire curiosity, creativity and problem solving —
              curated with developmental value in mind.
            </p>
          </div>
          {/* Card3 */}
          <div className="p-6 border-t-4 border-primary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70 ">
            <div className="flex justify-center mb-4">
              <FaHandsHelping className="text-5xl text-primary  transition-colors duration-300" />
            </div>
            <h3
              className="text-xl font-semibold mb-2 
             transition-colors duration-300"
            >
              Support Local
            </h3>
            <p className="text-sm md:text-base transition-colors duration-300">
              We help local toy businesses reach families across Bangladesh with
              simple listing and seller tools.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM (simple placeholders) */}
      <section className="py-12 ">
        <div className="container  mx-auto ">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            Meet the Team
          </h3>
          <div className="flex flex-col md:flex-row mx-auto justify-center gap-6 px-6 lg:px-12 ">
            {[
              {
                name: "Siddikur Rahman",
                role: "FrontEnd  Developer",
                img: "https://i.ibb.co.com/TDp6G39f/profile-pic.png",
              },
              {
                name: "Shihab Uddin",
                role: "MernStack Developer ",
                img: "https://shihab-dev.web.app/assets/shihab-CsqGrpwH.jpg",
              },
              {
                name: "Omar Faruk",
                role: "Backend Developer & Ui/Ux Expert",
                img: "https://omarfaruk-dev.web.app/omar-photo.png",
              },
            ].map((m) => (
              <>
                <div
                  key={m.name}
                  className="p-6  hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70 "
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-base-100"
                  />
                  <h4 className="mt-4 font-semibold">{m.name}</h4>
                  <p className="text-sm text-base-content/70">{m.role}</p>
                </div>
                {/*  */}
                {/* <div
                  key={m.name}
                  className="text-center bg-base-200 rounded-lg p-6 w-72 shadow-md hover:shadow-lg transform transition-all duration-300 "
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-base-100"
                  />
                  <h4 className="mt-4 font-semibold">{m.name}</h4>
                  <p className="text-sm text-base-content/70">{m.role}</p>
                </div> */}
              </>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
