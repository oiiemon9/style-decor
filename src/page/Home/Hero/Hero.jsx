import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="max-h-[40rem] w-full">
          <img
            className="h-full w-full object-cover"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="max-h-[40rem] w-full">
          <img
            className="h-full w-full object-cover"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="max-h-[40rem] w-full">
          <img
            className="h-full w-full object-cover"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className="max-h-[40rem] w-full">
          <img
            className="h-full w-full object-cover"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
      </Swiper>

      <div class="absolute top-0 bottom-0 left-[10%] h-fit my-auto z-10  max-w-xl bg-white rounded-2xl px-4 md:px-6">
        <div class="bg-white/80 dark:bg-gray-900/80 p-4 md:p-8 lg:p-10 rounded-lg backdrop-blur-md">
          <div class="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <span class="inline-block bg-yellow-400 text-gray-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-4">
              New Release
            </span>
            <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 leading-tight serif-font ">
              Best Quality Wallpapers For Your Home
            </h1>
            <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a
              class="inline-block bg-primary text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors duration-300"
              href="#"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
