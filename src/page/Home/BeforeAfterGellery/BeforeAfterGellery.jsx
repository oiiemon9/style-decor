import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router';

const BeforeAfterGellery = () => {
  const showcases = [
    {
      id: 1,
      title: 'Royal Wedding Gate & Entrance',
      image: 'https://i.ibb.co/8gdLNXBp/download-50.png',
      category: 'Wedding',
      location: 'Dhaka, Bangladesh',
      date: 'December 2025',
    },
    {
      id: 2,
      title: 'Luxury Holud Stage Setup',
      image: 'https://i.ibb.co.com/Qv6Ky1NQ/download-51.png',
      category: 'Ceremony',
      location: 'Chattogram',
      date: 'November 2025',
    },
    {
      id: 3,
      title: 'Modern Home Interior Decor',
      image: 'https://i.ibb.co.com/B56D2W7N/download-52.png',
      category: 'Home',
      location: 'Sylhet',
      date: 'October 2025',
    },
    {
      id: 4,
      title: 'Floral Birthday Arch',
      image: 'https://i.ibb.co.com/84Gzx5tw/download-53.png',
      category: 'Birthday',
      location: 'Khulna',
      date: 'September 2025',
    },
    {
      id: 5,
      title: 'Corporate Event Backdrop',
      image: 'https://i.ibb.co.com/990skQ0r/download-55.png',
      category: 'Corporate',
      location: 'Rajshahi',
      date: 'August 2025',
    },
    {
      id: 6,
      title: 'Reception Pathway Lighting',
      image: 'https://i.ibb.co.com/LhqC6B2N/download-54.png',
      category: 'Reception',
      location: 'Barisal',
      date: 'July 2025',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-6">
            <Sparkles className="w-5 h-5" />
            Our Recent Masterpieces
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 serif-font ">
            Real Events,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {' '}
              Real Transformations
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From ordinary venues to breathtaking celebrations — every detail
            crafted with passion and precision.
          </p>
        </motion.div>

        {/* Gallery Grid - One Image Per Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {showcases.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h4 className="text-lg font-bold text-white line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-sm text-purple-200 mt-1">
                  {item.category} • {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Full Gallery
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterGellery;
