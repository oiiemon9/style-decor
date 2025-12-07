import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/FirebaseProvider';
import { useParams } from 'react-router';
import useAxiosSecure from '../../CustomHook/useAxiosSecure';

const BookNow = () => {
  const { loginUser } = use(AuthContext);
  const axiosInstance = useAxiosSecure();
  const [bookService, setBookService] = useState(null);

  const [quantity, setQuantity] = useState(1);

  const { serviceId } = useParams();
  useEffect(() => {
    const bookService = async () => {
      try {
        const res = await axiosInstance.get(`/services/${serviceId}`);
        setBookService(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    bookService();
  }, []);

  return (
    <div>
      <section className="bg-background-light dark:bg-background-dark  p-4 sm:p-6 md:p-8 flex items-center justify-center font-display">
        <div className="w-full container mx-auto rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-300">
          <form className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                <a
                  className="hover:text-primary dark:hover:text-white"
                  href="#"
                >
                  Services
                </a>
                <span className="mx-2">/</span>
                <span className="text-gray-700 dark:text-gray-200">
                  {serviceId}
                </span>
                <span className="mx-2">/</span>
                <span className="text-gray-700 dark:text-gray-200">Book</span>
              </nav>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Booking
              </h1>
              <section>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                  Booking info
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      className="w-full bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg p-3 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                      type="text"
                      placeholder="Your Name"
                      defaultValue={loginUser?.displayName}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      className="w-full bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg p-3 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                      type="text"
                      placeholder="Your Email"
                      defaultValue={loginUser?.email}
                      readOnly
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Location
                    </label>
                    <input
                      className="w-full bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg p-3 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                      id="city-state"
                      type="text"
                      placeholder="Address..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Phone number
                    </label>
                    <input
                      className="w-full bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg p-3 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                      type="number"
                      placeholder="+880 1*** *** ***"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Note
                    </label>
                    <textarea
                      className="w-full bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg p-3 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                      type="text"
                    />
                  </div>
                </div>
              </section>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                  Book summary
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        alt={bookService?.serviceTitle}
                        className="w-full h-full object-cover"
                        src={bookService?.serviceImage}
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {bookService?.serviceTitle}
                      </h3>

                      <p className="font-bold text-gray-900 dark:text-white mt-1">
                        ${bookService?.price}
                      </p>
                    </div>
                    <div className="">
                      <p className="text-center text-gray-600">
                        {bookService?.unit.split('-')[1]}
                      </p>
                      <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                        <button
                          type="button"
                          onClick={() => {
                            if (quantity > 1) {
                              setQuantity(quantity - 1);
                            }
                          }}
                          className="btn btn-sm"
                        >
                          -
                        </button>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(quantity + 1)}
                          className="btn btn-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    Order total
                  </span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    $110.80
                  </span>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <div className="flex gap-2 flex-col text-sm">
                    <label className="flex items-center gap-2 cursor-pointer  rounded-lg ">
                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        defaultChecked
                        className="accent-blue-600 w-4 h-4"
                      />
                      <span className="font-medium">Online Payment</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer   rounded-lg">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        className="accent-blue-600 w-4 h-4"
                      />
                      <span className="font-medium">Cash on Delivery</span>
                    </label>
                  </div>
                  <button type="submit" className="btn">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookNow;
