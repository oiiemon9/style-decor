import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Hero = () => {
  // Premium nature images from Unsplash (replace with your own high-quality wallpaper images later)
  const heroImages = [
    'https://i.ibb.co.com/5b1PzB4/download-56.png',
    'https://i.ibb.co.com/B56D2W7N/download-52.png',
    'https://i.ibb.co.com/YB0xzMQ1/Wedding.png',
    'https://i.ibb.co.com/Qv6Ky1NQ/download-51.png',
  ];
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Swiper Slider */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1200}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="absolute inset-0"
      >
        {heroImages.map((src, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative h-screen w-full">
              {/* Image */}
              <img
                src={src}
                alt={`Premium wallpaper collection ${index + 1}`}
                className="h-full w-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3">
              <span className="inline-block  bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-xl animate-pulse">
                Every Corner Deserves Luxury
              </span>
              <span className="h-px w-20 bg-white/30"></span>
            </div>

            <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-black text-white tracking-tight drop-shadow-2xl serif-font">
              Transform Your Space
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Decor That Inspires
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-sm text-gray-100 font-light max-w-2xl leading-relaxed opacity-95">
              Professional decoration solutions for homes, weddings, offices,
              seminars & events. Quality, creativity, and perfection in every
              detail.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Decoration Services</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✔</span>
                <span>10,000+ Events Decorated</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✔</span>
                <span>4.9/5.0 Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✔</span>
                <span>100% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
