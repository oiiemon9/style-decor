import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/FirebaseProvider';
import { useParams } from 'react-router';
import useAxiosSecure from '../../CustomHook/useAxiosSecure';
import { useForm } from 'react-hook-form';
import ErrorPage from '../../components/Dashboard/Error/ErrorPage';

const BookNow = () => {
  const { loginUser } = use(AuthContext);
  const axiosInstance = useAxiosSecure();
  const [bookService, setBookService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [quantity, setQuantity] = useState(1);

  const { serviceId } = useParams();
  useEffect(() => {
    const bookService = async () => {
      setIsLoading(true);
      try {
        const res = await axiosInstance.get(`/services/${serviceId}`);
        setBookService(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    bookService();
  }, []);

  const handelConfirmBooking = async (data) => {
    console.log(data);
    data.serviceId = bookService?._id;
    data.serviceTitle = bookService?.serviceTitle;
    data.serviceImage = bookService?.serviceImage;
    data.quantity = quantity;
    data.totalPrice = bookService?.price * quantity;
    data.paymentStatus = 'pending';
    if (data.payment === 'online') {
      const res = await axiosInstance.post('/create-checkout-session', data);
      console.log(res.data);
      window.location.href = res.data.url;
    }
  };

  if (isLoading) {
    return (
      <div className=" flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
      </div>
    );
  }

  if (!bookService) return <ErrorPage></ErrorPage>;

  return (
    <div>
      <section className="bg-background-light dark:bg-background-dark  p-4 sm:p-6 md:p-8 flex items-center justify-center font-display">
        <div className="w-full container mx-auto rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-300 overflow-hidden">
          <form
            onSubmit={handleSubmit(handelConfirmBooking)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7">
              <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex flex-wrap">
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
                      {...register('name', { required: true })}
                      className="w-full bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg p-3 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                      type="text"
                      placeholder="Your Name"
                      defaultValue={loginUser?.displayName}
                      readOnly
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      {...register('email', { required: true })}
                      className="w-full bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg p-3 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                      type="text"
                      placeholder="Your Email"
                      defaultValue={loginUser?.email}
                      readOnly
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Location
                    </label>
                    <input
                      {...register('location', { required: true })}
                      className="w-full bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg p-3 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                      id="city-state"
                      type="text"
                      placeholder="Address..."
                    />
                    {errors.location && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Phone Number
                    </label>

                    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 focus-within:ring-2 focus-within:ring-black">
                      <span className="px-3 py-3 text-gray-600 dark:text-gray-300 text-sm font-medium bg-gray-200 dark:bg-gray-700 border-r border-gray-300 dark:border-gray-600 select-none">
                        +880
                      </span>

                      <input
                        {...register('phone', { required: true })}
                        type="tel"
                        maxLength={11}
                        placeholder="1XXXXXXXXX"
                        className="w-full p-3 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none"
                      />
                    </div>

                    {errors.phone && (
                      <span className="text-red-500 text-sm mt-1">
                        Phone number is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Event Date
                    </label>

                    <input
                      {...register('eventDate', { required: true })}
                      type="date"
                      className="w-full bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg p-3 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                    />

                    {errors.eventDate && (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Note
                    </label>
                    <textarea
                      {...register('note')}
                      className="w-full bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-black focus:border-transparent rounded-lg p-3 text-gray-900 dark:text-gray-100 placeholder-gray-500"
                      type="text"
                    />
                  </div>
                </div>
              </section>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                  Service summary
                </h2>
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center space-x-4">
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
                    Service total
                  </span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${bookService?.price * quantity}
                  </span>
                </div>
                <div className="mt-8 flex justify-between items-center flex-wrap">
                  <div className="flex gap-2 flex-col text-sm">
                    <label className="flex items-center gap-2 cursor-pointer  rounded-lg ">
                      <input
                        {...register('payment')}
                        type="radio"
                        value="online"
                        defaultChecked
                        className="accent-blue-600 w-4 h-4"
                      />
                      <span className="font-medium">Online Payment</span>
                    </label>

                    {/* <label className="flex items-center gap-2 cursor-pointer   rounded-lg">
                      <input
                        {...register('payment')}
                        type="radio"
                        value="cash"
                        className="accent-blue-600 w-4 h-4"
                      />
                      <span className="font-medium">Cash on Delivery</span>
                    </label> */}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-full mt-2 md: mt-0"
                  >
                    Confirm booking
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
