import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { motion } from 'framer-motion';

// Icons
import {
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaMapMarkerAlt,
  FaUserFriends,
  FaTree,
  FaCouch,
  FaSmokingBan,
  FaLock,
  FaUniversalAccess,
  FaIdBadge,
} from 'react-icons/fa';
import { Link, useParams } from 'react-router';
import useAxios from '../../CustomHook/useAxios';
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  MapPin,
  Share2,
  Sparkles,
  User,
} from 'lucide-react';

const ServiceInfo = () => {
  const { serviceId } = useParams();
  const axiosInstance = useAxios();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axiosInstance.get(`/services/${serviceId}`);
        setService(res.data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    fetchService();
  }, [serviceId]);

  if (isLoading) {
    return (
      <div className=" flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
      </div>
    );
  }

  if (!service) return <div>Service not found</div>;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" "
      >
        {/* Hero Image Section */}
        <div className="relative h-screen max-h-[600px] overflow-hidden">
          <img
            src={service.serviceImage}
            alt={service.serviceTitle}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-2xl" />

          <div className="absolute top-8 right-8 flex gap-3">
            <button className="p-4 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition">
              <Heart className="w-6 h-6 text-white" />
            </button>
            <button className="p-4 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition">
              <Share2 className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="container mx-auto px-6 -mt-32 relative z-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-5 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      {service.category?.toUpperCase()}
                    </span>
                    <span className="text-gray-500">• Premium Service</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    {service.serviceTitle}
                  </h1>

                  <div className="flex items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">{service.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span>Available Now</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                  {service.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Features Grid */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Custom gate/arch design',
                      'Fresh/artificial floral arrangements',
                      'LED & fairy light decoration',
                      'Fabric drapery & backdrop',
                      'Welcome signage with names',
                      'Pathway lighting',
                      'Thematic props & styling',
                      'Full on-site setup & teardown',
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Booking Card - Sticky */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-3xl shadow-2xl p-8 sticky top-20 border border-purple-100"
              >
                <div className="text-center mb-8">
                  <p className="text-5xl font-bold text-purple-700">
                    ${service.price}
                  </p>
                  <p className="text-gray-600 mt-2">
                    per {service.unit.replace('-', ' ')}
                  </p>
                </div>

                <Link
                  to={`/services/${service?._id}/book-now`}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Calendar className="w-6 h-6" />
                  Book This Service Now
                  <ArrowRight className="w-6 h-6" />
                </Link>

                <div className="mt-6 space-y-4 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-purple-600" />
                    <span>Expert decorators assigned</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span>Real-time status updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>100% satisfaction guarantee</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceInfo;

// {
//     "_id": "69350532ffee92245bfbcf2c",
//     "serviceTitle": "sdfds",
//     "price": "50",
//     "category": "wedding",
//     "unit": "per-floor",
//     "location": "sdfsdfs",
//     "serviceImage": "https://i.ibb.co/vxDkVj6C/download-14.png",
//     "description": "sdfdsfefsdfef",
//     "createdByEmail": "emon@gmail.com",
//     "status": "published",
//     "createdAt": "2025-12-07T04:40:18.432Z"
// }
