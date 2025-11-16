import React, { useState } from "react";
import coverImg from "../../assets/images/hero/hero-1.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaSearchPlus } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../shared/Spinner";
import img1 from "../../assets/images/gallery/1.jpg";
import img2 from "../../assets/images/gallery/2.jpg";
import img3 from "../../assets/images/gallery/3.jpg";
import img4 from "../../assets/images/gallery/4.jpg";
import img5 from "../../assets/images/gallery/5.jpg";
import img6 from "../../assets/images/gallery/6.jpg";
import img7 from "../../assets/images/gallery/7.jpg";
import img8 from "../../assets/images/gallery/8.jpg";
import img9 from "../../assets/images/gallery/9.jpg";
import img10 from "../../assets/images/gallery/10.jpg";
import img11 from "../../assets/images/gallery/11.jpg";
import img12 from "../../assets/images/gallery/12.jpg";
import img13 from "../../assets/images/gallery/13.jpg";
import img14 from "../../assets/images/gallery/14.jpg";
import img15 from "../../assets/images/gallery/15.jpg";
import img16 from "../../assets/images/gallery/16.jpg";
import img17 from "../../assets/images/gallery/17.jpg";
import img18 from "../../assets/images/gallery/18.jpg";
import img19 from "../../assets/images/gallery/19.jpg";
import img20 from "../../assets/images/gallery/20.jpg";
import img21 from "../../assets/images/gallery/21.jpg";
import img22 from "../../assets/images/gallery/22.jpg";
import img23 from "../../assets/images/gallery/23.jpg";
import hero1 from "../../assets/images/hero/hero-1.jpg";
import hero2 from "../../assets/images/hero/hero-2.jpg";
import hero3 from "../../assets/images/hero/hero-3.jpg";
import hero4 from "../../assets/images/hero/hero-4.avif";
import hero5 from "../../assets/images/hero/hero-5.avif";
import hero7 from "../../assets/images/hero/hero-7.jpg";
import hero8 from "../../assets/images/hero/hero-8.jpg";
import hero9 from "../../assets/images/hero/hero-9.jpg";

const Gallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero7,
    hero8,
    hero9,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    hero3,
     img17,
    img18,
  ];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(12);

  const fetchMoreImages = () => {
    setVisibleCount((prev) => Math.min(prev + 8, images.length));
  };

  return (
    <div className="mt-16 mb-10 md:mb-16 lg:mb-20">
      <header
        className="w-full h-80 bg-cover bg-center py-16 flex items-center justify-center shadow-md mb-10 relative"
        style={{ backgroundImage: `url('${coverImg}')` }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/60 via-secondary/20 to-black/50"></div>
        <div className="w-full flex items-center justify-center py-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary text-center tracking-wide border-b-3 border-secondary drop-shadow">
            FOOD GALLERY
          </h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8">
        <InfiniteScroll
          dataLength={visibleCount}
          next={fetchMoreImages}
          hasMore={visibleCount < images.length}
          loader={<Spinner />}
          scrollThreshold={0.95}
          scrollableTarget={null}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {images.slice(0, visibleCount).map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl shadow group relative cursor-pointer"
                onClick={() => {
                  setOpen(true);
                  setIndex(idx);
                }}
              >
                <img
                  src={img}
                  alt={`Food Gallery ${idx + 1}`}
                  className="w-full h-40 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <FaSearchPlus className="text-white text-3xl drop-shadow-lg" />
                </span>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </div>
  );
};

export default Gallery;
