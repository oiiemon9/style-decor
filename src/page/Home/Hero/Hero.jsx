import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Hero = () => {
  // Premium nature images from Unsplash (replace with your own high-quality wallpaper images later)
  const heroImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    'https://images.unsplash.com/photo-1567016432779-5d9766d4f2cb?q=80&w=2070',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2070',
    'https://images.unsplash.com/photo-1618220048045-10a6dbdfc8d1?q=80&w=2070',
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
              <span className="inline-block bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-xl animate-pulse">
                New Collection 2025
              </span>
              <span className="h-px w-20 bg-white/30"></span>
            </div>

            <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-black text-white tracking-tight drop-shadow-2xl serif-font">
              Transform Your Walls
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
                Into Masterpieces
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-sm text-gray-100 font-light max-w-2xl leading-relaxed opacity-95">
              Elevate your space with our exclusive collection of luxury
              wallpapers. Handcrafted designs. Unmatched quality. Timeless
              elegance.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#collections"
                className="group inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-wider px-8 py-3 rounded-full text-sm transition-colors duration-300"
              >
                Book Decoration Service
                <svg
                  className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✔</span>
                <span>10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✔</span>
                <span>Eco-Friendly Free Samples</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✔</span>
                <span>Eco-Friendly Materials</span>
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
