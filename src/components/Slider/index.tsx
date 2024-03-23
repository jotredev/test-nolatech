import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Title from "../Title";

const Slider = () => {
  return (
    <section id="slider" className="w-full bg-primaryDark py-10 lg:py-20">
      <Title
        title="Lorem ipsum dolor sit amet"
        className="text-white text-center pb-20"
      />
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full h-full max-w-[1200px] mx-auto flex items-center"
      >
        <SwiperSlide>
          <img
            src="/imgs/pic7.webp"
            className="w-full h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/imgs/pic8.webp"
            className="w-full h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/imgs/pic9.webp"
            className="w-full h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/imgs/pic10.webp"
            className="w-full h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/imgs/pic2.webp"
            className="w-full h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/imgs/pic3.webp"
            className="w-full h-[450px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <div className="mt-10 lg:mt-20 flex justify-center">
        <button className="bg-white uppercase py-2 px-4 rounded border border-white hover:bg-transparent hover:text-white transition-colors duration-300 w-40">
          View all
        </button>
      </div>
    </section>
  );
};

export default Slider;
