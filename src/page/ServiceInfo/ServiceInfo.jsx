import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

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

const ServiceInfo = () => {
  const { serviceId } = useParams();
  const axiosInstance = useAxios();
  const [serviceInfo, setServiceInfo] = useState(null);

  useEffect(() => {
    const fetchServiceInfo = async () => {
      try {
        const res = await axiosInstance.get(`/services/${serviceId}`);
        setServiceInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServiceInfo();
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-xl border">
            <img
              src={serviceInfo?.serviceImage}
              alt="Resort Image"
              className="w-full h-full object-cover"
            />
          </div>

          <button className="absolute bottom-4 left-4 bg-white/70 dark:bg-slate-800/70 text-slate-800 dark:text-white p-3 rounded-full backdrop-blur-md hover:bg-white dark:hover:bg-slate-700 transition">
            <FaHeart size={18} />
          </button>
        </div>

        {/* ---------- RIGHT: INFO DETAILS ---------- */}
        <div className="lg:col-span-1 flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              {serviceInfo?.serviceTitle}
            </h1>

            <div className="flex items-center gap-3 mt-3 text-slate-600 dark:text-slate-400">
              <Rating style={{ maxWidth: 120 }} value={3} readOnly />
              <span className="text-sm font-medium">3.9 / 5.0</span>
            </div>

            <div className="flex items-start gap-2 mt-2 text-slate-600 dark:text-slate-400">
              <FaMapMarkerAlt />
              <p>{serviceInfo?.location}</p>
            </div>
          </div>

          {/* Rating Box */}
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-primary font-medium flex items-center gap-1 hover:underline"
            >
              See all reviews →
            </a>
          </div>

          {/* Nearby */}
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
              What's Nearby
            </h3>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <FaMapMarkerAlt />
              <p>36.00 km from {serviceInfo?.location}</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold">
            ${serviceInfo?.price}{' '}
            <span className="text-xs font-normal">{serviceInfo?.unit}</span>
          </h2>

          {/* Tags */}
          <div>
            <Link
              to={`/services/${serviceInfo?._id}/book-now`}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 border border-pink-300 dark:border-pink-700 rounded-full cursor-pointer"
            >
              <span className="font-medium">Book Now</span>
            </Link>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />

          {/* Facilities */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Facilities
            </h2>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <FaTree className="text-lg" /> Garden
              </div>
              <div className="flex items-center gap-2">
                <FaCouch className="text-lg" /> Sofa Bed
              </div>
              <div className="flex items-center gap-2">
                <FaSmokingBan className="text-lg" /> Smoke Detector
              </div>
              <div className="flex items-center gap-2">
                <FaLock className="text-lg" /> Lockers
              </div>
              <div className="flex items-center gap-2">
                <FaUniversalAccess className="text-lg" /> Accessibility
              </div>
              <div className="flex items-center gap-2">
                <FaIdBadge className="text-lg" /> ID Required
              </div>
            </div>
          </div>
        </div>
      </div>
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
