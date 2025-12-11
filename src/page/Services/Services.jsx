import React, { useEffect, useState } from 'react';
import useAxios from '../../CustomHook/useAxios';
import ServiceItem from './ServiceItem';

const Services = () => {
  const axiosInstance = useAxios();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axiosInstance.get('/services');
        setServices(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  console.log(services);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto p-5">
        {/* Simple Search Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Search Decoration Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Search by Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Name
              </label>
              <input
                type="text"
                placeholder="e.g. Gate Decoration, Stage Setup..."
                className="input input-bordered w-full"
              />
            </div>

            {/* Search by Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Added On (Date)
              </label>
              <input type="date" className="input input-bordered w-full" />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-gray-500">
                No services found matching your search.
              </p>
            </div>
          ) : (
            services.map((service) => (
              <ServiceItem key={service._id} service={service} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
