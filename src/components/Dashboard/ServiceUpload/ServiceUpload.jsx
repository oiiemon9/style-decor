import React, { use, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdPhotos } from 'react-icons/io';
import useAxiosSecure from '../../../CustomHook/useAxiosSecure';
import axios from 'axios';
import { AuthContext } from '../../../Context/FirebaseProvider';
import Swal from 'sweetalert2';

const ServiceUpload = () => {
  const axiosInstance = useAxiosSecure();
  const { loginUser } = use(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleServiceUpload = async (data) => {
    setIsLoading(true);
    const file = data.serviceImage[0];
    const imageData = new FormData();
    imageData.append('image', file);
    const imageAPIUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${
      import.meta.env.VITE_IMGBB_key
    }`;
    const imageRes = await axios.post(imageAPIUrl, imageData);
    const imageUrl = imageRes.data.data.display_url;
    console.log('Image URL:', imageUrl);
    data.serviceImage = imageUrl;

    data.createdByEmail = loginUser?.email;
    data.status = 'published';

    try {
      const res = await axiosInstance.post('/service-upload', data);
      if (res.data.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Your Service uploaded',
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 ">
      <div className="">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Service Upload
          </h1>
        </header>

        <div>
          <form
            onSubmit={handleSubmit(handleServiceUpload)}
            className="space-y-6"
          >
            {/* GRID START */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* service Title */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Service Title
                </label>
                <input
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg py-3 pl-4 pr-4 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  placeholder="Enter service title"
                  type="text"
                  {...register('serviceTitle', { required: true })}
                />
                {errors.serviceTitle && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Price ($)
                </label>
                <input
                  {...register('price', { required: true })}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg py-3 pl-4 pr-4 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  placeholder="Enter price"
                  type="number"
                  min="1"
                />
                {errors.price && (
                  <span className="text-red-500 text-sm">
                    Price is required
                  </span>
                )}
              </div>

              {/* Category */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  {...register('category', { required: true })}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-800 dark:text-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                >
                  <option value="">Select Category</option>
                  <option value="home">Home</option>
                  <option value="wedding">Wedding</option>
                  <option value="office">Office</option>
                  <option value="seminar">Seminar</option>
                </select>
                {errors.category && (
                  <span className="text-red-500 text-sm">
                    Category is required
                  </span>
                )}
              </div>
              {/* Unit */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Unit
                </label>
                <select
                  {...register('unit', { required: true })}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-800 dark:text-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                >
                  <option value="">Select Unit</option>
                  <option value="per-sqft">Per sqft</option>
                  <option value="per-floor">Per floor</option>
                  <option value="per-meter">Per meter</option>
                  <option value="per-seminar">Per seminar</option>
                  <option value="per-item">Per item</option>
                </select>
                {errors.unit && (
                  <span className="text-red-500 text-sm">Unit is required</span>
                )}
              </div>

              {/* Location Title */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <input
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg py-3 pl-4 pr-4 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  placeholder="Enter location"
                  type="text"
                  {...register('location', { required: true })}
                />
                {errors.location && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              {/* Service Image Upload (Full Width on mobile, half on md+) */}
              <div className="relative md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Service Image
                </label>

                <input
                  {...register('serviceImage', { required: true })}
                  type="file"
                  className="file-input file-input-xl"
                />
                {errors.serviceImage && (
                  <span className="text-red-500 text-sm">
                    Service image is required
                  </span>
                )}
              </div>

              {/* Service Description (Full width) */}
              <div className="relative md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Service Description
                </label>
                <textarea
                  {...register('description', { required: true })}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  placeholder="Write service description..."
                  rows="4"
                ></textarea>
                {errors.description && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-6"
            >
              {isLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                'UPLOAD PRODUCT'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceUpload;
