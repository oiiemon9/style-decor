import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/FirebaseProvider';
import useAxios from '../../CustomHook/useAxios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Logo from '../../components/Logo/Logo';
import { Eye, EyeOff, Mail, SquareAsterisk } from 'lucide-react';

const Login = () => {
  const { googleLogin, loginUser, setLoginUser, login } =
    useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const axiosInstance = useAxios();
  const location = useLocation();
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
        navigate(location.state || '/');
      }
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  const handleLogin = async (data) => {
    const { email, password } = data;
    setIsLoading(true);
    try {
      const result = await login(email, password);
      const user = result.user;
      setLoginUser(user);
      toast.success('Login Successful');
      navigate(location.state || '/');
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

          <Link
            to="/"
            className=" bg-white rounded-full flex px-10
          "
          >
            <Logo></Logo>
          </Link>

          <div className="">
            <div>
              <h2 className="text-6xl font-bold mb-4 serif-font">
                Welcome Back!
              </h2>
              <p className="text-blue-100 text-base leading-relaxed">
                Sign in to access your account and manage your preferences
              </p>
            </div>
          </div>
          <Link
            to="/register"
            className="bg-white text-blue-600 font-bold py-3 px-12 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-10 z-10"
          >
            Register
          </Link>
        </div>

        <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center bg-white dark:bg-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-200 rounded-full opacity-10"></div>

          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Login to Your Account
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
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="text-gray-300 absolute top-0 bottom-0 my-auto left-3" />
                  <input
                    {...register('email', { required: true })}
                    className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg py-3 pl-12 pr-4 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <SquareAsterisk className="text-gray-300 absolute top-0 bottom-0 my-auto left-3" />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className=" absolute top-0 bottom-0 my-auto right-3 h-fit"
                  >
                    {showPass ? <EyeOff /> : <Eye />}
                  </button>
                  <input
                    {...register('password', { required: true })}
                    className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg py-3 pl-12 pr-4 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:ring-0 transition-colors duration-300"
                    placeholder="Password"
                    type={showPass ? 'text' : 'password'}
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full  gap-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  'LOGIN'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
