import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, Heart, Calendar } from 'lucide-react';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ayesha Rahman',
      event: 'Wedding Reception • Dhaka',
      rating: 5,
      date: '10 December 2025',
      text: 'StyleDecor turned our dream wedding into reality! The entrance gate and stage decoration were absolutely breathtaking. Everyone kept asking who did it. Highly recommended!',
      avatar:
        'https://images.unsplash.com/photo-1708443683276-8a3eb30faef2?q=80&w=160&h=160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      verified: true,
    },
    {
      id: 2,
      name: 'Md. Kamal Hossain',
      event: 'Holud Night • Chattogram',
      rating: 5,
      date: '28 November 2025',
      text: 'From booking to final setup — everything was so smooth. The team arrived on time, used premium materials, and the lighting was magical. Best decision we made!',
      avatar:
        'https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80',
      verified: true,
    },
    {
      id: 3,
      name: 'Fatema Akter',
      event: 'Home Interior Makeover',
      rating: 5,
      date: '15 October 2025',
      text: 'Completely transformed our living room and bedroom. The attention to detail and color coordination was perfect. Now our home feels like a 5-star hotel!',
      avatar:
        'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80',
      verified: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  return (
    <section className="my-28 ">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-6 ">
            <Heart className="w-5 h-5" />
            Loved by Our Clients
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 serif-font ">
            What Our Happy Clients
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {' '}
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 10,000+ events decorated with love, trust, and perfection.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 overflow-hidden"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-0 right-0 opacity-10">
                <Quote className="w-32 h-32 text-purple-600" />
              </div>

              <div className="p-8 relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-700">
                    5.0
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-5">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex  items-center gap-4 mt-6 pt-6 border-t border-purple-100">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-4 ring-purple-100"
                    />
                    {testimonial.verified && (
                      <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-purple-600 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl p-10 text-white text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-5xl font-bold">10,000+</h3>
              <p className="text-purple-100 mt-2 text-lg">Events Decorated</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">4.9/5.0</h3>
              <p className="text-purple-100 mt-2 text-lg">Average Rating</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">100%</h3>
              <p className="text-purple-100 mt-2 text-lg">
                Client Satisfaction
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
