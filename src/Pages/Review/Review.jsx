import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sadia Hossain",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    review:
      "Toy Universe is an absolute delight! The vibrant design and easy navigation make browsing toys a joy. My kids are thrilled!",
    rating: 5,
  },
  {
    id: 2,
    name: "Arif Mahmud",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
    review:
      "A great selection of toys with smooth performance. Adding and managing toys was super easy. Love the clean interface!",
    rating: 4,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    review:
      "Impressive UI! It feels polished and professional. The responsiveness and animations make it stand out from others.",
    rating: 5,
  },
  {
    id: 4,
    name: "Tanvir Alam",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
    review:
      "The platform runs smoothly, and the browsing experience is top-notch. Highly recommended for toy enthusiasts!",
    rating: 4,
  },
  {
    id: 5,
    name: "Mahi Rahman",
    photo: "https://randomuser.me/api/portraits/women/60.jpg",
    review:
      "From login to exploring toys, everything feels modern and premium. One of the best toy platforms in Bangladesh!",
    rating: 5,
  },
];

const Review = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-base-200 to-base-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-3">
          What Our <span className="text-secondary">Users</span> Say
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-12">
          Hear from parents and collectors who love Toy Universe BD!
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-20"
        >
          {reviews.map((rev) => (
            <SwiperSlide key={rev.id}>
              <div className="p-6 border-t-4 border-secondary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70 min-h-[370px] flex flex-col justify-between items-center">
                <FaQuoteLeft className="text-4xl text-secondary mb-3" />

                <p className="text-base-content/80 italic leading-relaxed mb-4 px-2">
                  “{rev.review}”
                </p>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <FaStar key={i} className="text-secondary" />
                  ))}
                </div>

                <img
                  src={rev.photo}
                  alt={rev.name}
                  className="w-16 h-16 rounded-full border-4 border-primary object-cover mb-2"
                />

                <h4 className="font-semibold text-primary text-lg">
                  {rev.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
