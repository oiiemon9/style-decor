import React, { useContext, useState } from 'react';
import { IoMdPhotos } from 'react-icons/io';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/FirebaseProvider';
import useAxios from '../../CustomHook/useAxios';
import { set, useForm } from 'react-hook-form';
import axios from 'axios';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import Logo from '../../components/Logo/Logo';

const Register = () => {
  const { googleLogin, loginUser, setLoginUser, registerUser } =
    useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;
      setLoginUser(user);
      if (user) {
        const res = await axiosInstance.post('/users', {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        console.log('User data saved:', res.data);
        navigate('/');
      }
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  const [imagePreview, setImagePreview] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setProfileImage(file);

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  const handelRegister = async (data) => {
    const formData = new FormData();
    formData.append('image', profileImage);
    setIsLoading(true);

    try {
      const result = await registerUser(data.email, data.password);
      const user = result.user;
      if (user) {
        const imageAPIUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_IMGBB_key
        }`;
        const imageRes = await axios.post(imageAPIUrl, formData);
        const photoURL = imageRes.data.data.display_url;
        const update = async () => {
          try {
            const update = await updateProfile(user, {
              displayName: data.name,
              photoURL: photoURL,
            });
          } catch (error) {
            console.log(error);
          }
          setLoginUser(user);
          const res = await axiosInstance.post('/users', {
            name: data.name,
            email: data.email,
            photoURL: photoURL,
          });
          toast.success('Registration Successful');
          navigate('/');
        };
        await update();
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className=" dark:from-gray-900 dark:to-gray-800 font-display flex items-center justify-center min-h-[80vh] p-4">
      <div className="relative w-full max-w-5xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="left-panel w-full md:w-2/5 p-8 md:p-12 flex flex-col items-center justify-center text-center text-white relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 -left-16 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-16 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
          </div>

          <div className="z-10 space-y-6">
            <Link
              to="/"
              className="flex items-center justify-center space-x-3 bg-white rounded-full"
            >
              <Logo></Logo>
            </Link>

            <div>
              <h2 className="text-6xl font-bold mb-4 serif-font">
                Welcome Our Website
              </h2>
              <p className="text-blue-100 text-base leading-relaxed">
                Sign up to create your account and manage your preferences.
              </p>
            </div>

            <Link
              to="/login"
              className="bg-white text-blue-600 font-bold py-3 px-12 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center bg-white dark:bg-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-200 rounded-full opacity-10"></div>

          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Create Account
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of users managing their workspace
            </p>

            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5] w-full"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <div className="flex items-center mb-8">
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
              <span className="px-4 text-gray-500 dark:text-gray-400 text-sm">
                OR
              </span>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(handelRegister)} className="space-y-5">
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg py-3 pl-4 pr-4 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  placeholder="Enter your name"
                  type="text"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  {...register('email', { required: true })}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg py-3 pl-4 pr-4 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  placeholder="Enter your email"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Profile Image
                </label>
                <div className="w-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 transition-colors">
                  <div className="relative flex flex-col items-center justify-center w-full">
                    {imagePreview ? (
                      <div className="relative w-full h-full flex flex-col items-center justify-center">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-h-24 max-w-full object-contain rounded-lg"
                        />
                        <p className="text-sm text-blue-600 dark:text-blue-400 mt-3 font-medium">
                          Click to change image
                        </p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <IoMdPhotos className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-3 text-lg font-medium text-slate-700 dark:text-slate-300">
                          Drop your image here, or{' '}
                          <span className="font-bold text-blue-600 hover:underline cursor-pointer">
                            browse
                          </span>
                        </p>
                        <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">
                          JPG, JPEG, PNG up to 5MB
                        </p>
                      </div>
                    )}
                    <input
                      onChange={handleImageChange}
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      type="file"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  {...register('password', { required: true })}
                  className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg py-3 pl-4 pr-4 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                  placeholder="Password"
                  type="password"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <input
                  {...register('terms', { required: true })}
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded"
                />

                <label
                  htmlFor="terms"
                  className="text-gray-600 dark:text-gray-400"
                >
                  I agree to the{' '}
                  <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
                    Terms of Service
                  </span>
                </label>
              </div>
              {errors.terms && (
                <span className="text-red-500 text-sm">
                  You must agree to the terms
                </span>
              )}

              <button
                type="submit"
                className="w-full  gap-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  'CREATE ACCOUNT'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
