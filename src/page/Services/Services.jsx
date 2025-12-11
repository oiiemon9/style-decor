import React, { useEffect, useRef, useState } from 'react';
import useAxios from '../../CustomHook/useAxios';
import ServiceItem from './ServiceItem';

const Services = () => {
  const axiosInstance = useAxios();
  const [services, setServices] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(
          `/services?search=${searchText}&category=${category}&min=${minPrice}&max=${maxPrice}`
        );
        setServices(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, [searchText, category, minPrice, maxPrice]);

  console.log(services);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-5">
        {/* Simple Search Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Search Decoration Services
          </h2>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Search by Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Name
                </label>
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  type="search"
                  placeholder="Search"
                  defaultValue={searchText}
                  className="input"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="select"
                >
                  <option value="">Pick a Category</option>
                  <option value="home">Home</option>
                  <option value="wedding">Wedding</option>
                  <option value="office">Office</option>
                  <option value="seminar">Seminar</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    className="input w-24"
                    placeholder="Min:"
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <p>To</p>
                  <input
                    type="number"
                    className="input w-24"
                    placeholder="Max:"
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading && (
          <div className=" flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-gray-500">No services found .</p>
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
