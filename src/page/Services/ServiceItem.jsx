import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Sparkles } from 'lucide-react';

const ServiceItem = ({ service }) => {
  const {
    _id,
    serviceTitle,
    price,
    unit,
    location,
    serviceImage,
    category,
    description,
  } = service;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col justify-between"
    >
      <div>
        {/* Image Container with Overlay */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={serviceImage}
            alt={serviceTitle}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-purple-600 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {category?.charAt(0).toUpperCase() + category?.slice(1)}
            </span>
          </div>

          {/* Price Badge on Bottom Right */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-xl">
            <p className="text-2xl font-bold text-purple-700">
              ${price}
              <span className="text-sm font-medium text-gray-600 ml-1">
                /{unit}
              </span>
            </p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-purple-700 transition-colors">
            {serviceTitle}
          </h3>

          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-purple-600" />
            <span className="text-sm">{location}</span>
          </div>

          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
            {description?.split('\n')[0] ||
              'Premium decoration service tailored to your event needs.'}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100 p-6">
        <Link
          to={`/services/${_id}`}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <Calendar className="w-4 h-4" />
          Book Now
        </Link>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 text-purple-600 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </motion.button>
      </div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-x-96 -top-10 h-96 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

export default ServiceItem;

// {"_id":{"$oid":"6934fd554975e2cb41747c96"},"serviceTitle":"wadding plan","price":"50","category":"wedding","unit":"per-floor","serviceImage":"https://i.ibb.co/hF3Dk5M5/unnamed-24.png","description":"sdfsdfsfefsfsdf","createdAt":{"$date":{"$numberLong":"1765080405219"}}}
