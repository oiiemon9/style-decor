import React, { useEffect, useRef, useState } from 'react';
import useAxios from '../../CustomHook/useAxios';
import ServiceItem from './ServiceItem';
import { MoveLeft, MoveRight, Ribbon } from 'lucide-react';

const Services = () => {
  const axiosInstance = useAxios();
  const [services, setServices] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [page, setPage] = useState(0);
  const [skips, setSkips] = useState(0);
  const [totalService, setTotalService] = useState(0);

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(
          `/services?search=${searchText}&category=${category}&min=${minPrice}&max=${maxPrice}&limit=8&skip=${skips}`
        );
        setTotalService(res.data.total);
        setServices(res.data.services);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, [searchText, category, minPrice, maxPrice, skips]);

  const handelPagination = (index) => {
    setSkips(index * 8);
    setPage(index);
    scrollTop();
  };

  const handelPaginationBack = () => {
    setSkips(skips - 8);
    setPage(page - 1);
  };
  const handelPaginationNext = () => {
    setSkips(skips + 8);
    setPage(page + 1);
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-5">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Decoration Services ({totalService})
          </h2>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Search by Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Title
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
        {totalService > 8 && (
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={handelPaginationBack}
                className="btn"
                disabled={page === 0}
              >
                <MoveLeft></MoveLeft>
              </button>
              {[...Array(Math.ceil(totalService / 8)).keys()].map(
                (p, index) => (
                  <button
                    key={index}
                    onClick={() => handelPagination(index)}
                    className={`btn ${
                      index === page && 'bg-purple-600 text-white'
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              )}
              <button
                onClick={handelPaginationNext}
                disabled={page === Math.ceil(totalService / 8) - 1}
                className="btn"
              >
                {' '}
                <MoveRight></MoveRight>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
