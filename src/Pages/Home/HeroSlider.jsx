import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "../../App.css";

// Import your images
import hero1 from "../../assets/images/hero/hero-1.jpg";
import hero2 from "../../assets/images/hero/hero-2.jpg";
import hero3 from "../../assets/images/hero/hero-3.jpg";
import hero4 from "../../assets/images/hero/hero-4.avif";
import hero5 from "../../assets/images/hero/hero-5.avif";
import hero7 from "../../assets/images/hero/hero-7.jpg";
import hero8 from "../../assets/images/hero/hero-8.jpg";
import hero9 from "../../assets/images/hero/hero-9.jpg";
import { Link } from "react-router";

const HeroSlider = () => {
  const images = [
    { src: hero1, title: "Beautiful Pas", subtitle: "Experience the harmony of nature and taste in every bite." },
    { src: hero2, title: "More Cream", subtitle: "Indulge in creamy delights and discover new dessert adventures." },
    { src: hero3, title: "Natures Platter", subtitle: "A celebration of organic flavors, fresh from the earth to your plate." },
    { src: hero4, title: "Ocean Breeze", subtitle: "Savor the freshness of the sea with every flavorful wave." },
    { src: hero5, title: "Desert Sunset", subtitle: "Golden horizons and sweet treats inspired by the desert sun." },
    { src: hero7, title: "Mix Salad", subtitle: "A vibrant medley of greens and veggies for a healthy lifestyle." },
    { src: hero8, title: "Autumn", subtitle: "Seasonal harvests and cozy flavors to warm your soul." },
    { src: hero9, title: "Chicken Leg", subtitle: "Juicy, spicy, and perfectly cooked for true food lovers." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 bg-base-100 mt-16 pt-8 md:pt-16 lg:pt-20">
      <Swiper
        modules={[Autoplay, Pagination, Parallax]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop={true}
        speed={800}
        parallax={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        }}
        className="hero-swiper rounded-2xl shadow-xl"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div className="group relative rounded-2xl overflow-hidden h-[240px] md:h-[300px] lg:h-[400px] bg-base-200">
              <img
                src={image.src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover brightness-85 group-hover:brightness-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg">
                  {image.title}
                </h2>
                <p className="text-lg md:text-xl text-white/90 drop-shadow-lg">
                  {image.subtitle}
                </p>
                <Link
                  to="/all-foods"
                  className="inline-block mt-4 px-5 py-2 rounded-3xl btn btn-outline text-white font-semibold shadow hover:bg-secondary/90 transition-all duration-200 text-sm md:text-base"
                >
                  See More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;