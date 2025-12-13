import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Calendar, ArrowRight } from 'lucide-react';
import ServiceItem from '../../Services/ServiceItem';
import { Link } from 'react-router';
import Loading from '../../../components/Loading/Loading';

const FeaturedServicesSection = ({ services = [], loading }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
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
    <section className="py-20 lg:py-28 ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-100 rounded-full text-purple-700 font-semibold text-sm mb-6">
            <Sparkles className="w-5 h-5" />
            Featured Decoration Plans
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 serif-font">
            Transform Your Event with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {' '}
              Style & Elegance
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our most popular decoration packages for weddings, homes,
            ceremonies & corporate events. Handcrafted with love by expert
            decorators.
          </p>
        </motion.div>

        {loading ? (
          <Loading></Loading>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            {services.slice(0, 8).map((service) => (
              <ServiceItem key={service._id} service={service} />
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span>View All Decoration Services</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-purple-600" />
              <span className="font-medium">Instant Booking</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-purple-600" />
              <span className="font-medium">
                On-Site Service Across Bangladesh
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <span className="font-medium">100% Customizable Themes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServicesSection;
