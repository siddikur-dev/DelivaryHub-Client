import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import useToys from "../../hook/useToys";

const Slider = () => {
  const { toys } = useToys();

  return (
    <div className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-14">
      <h2 className=" text-3xl  md:text-4xl lg:text-5xl text-center font-bold mb-10">
        🧩 Our Top Toys
      </h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={toys.length > 3} // ✅ Only enable loop when slides > 3
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          slidesPerView={window.innerWidth < 768 ? 1.3 : 3}
          spaceBetween={30}
          speed={900}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          {toys.map((toy) => (
            <SwiperSlide
              key={toy.toyId}
              className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition  duration-500"
            >
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-64 md:h-80 object-contain p-4"
              />
              <div className="p-4 text-center space-y-2.5">
                <h3 className="text-xl font-bold text-gray-800 ">
                  {toy.toyName}
                </h3>
                <p className="text-sm text-gray-500">{toy.category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
