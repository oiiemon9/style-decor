import React from 'react';
import { Home, ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-10">
          <img
            src="https://i.ibb.co.com/mF2wV44z/2742582.png"
            alt="404 - Page Not Found"
            className="w-full max-w-md mx-auto "
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Oops! Page Not Found
            </h2>
          </div>

          <div className="mt-10">
            <Link
              to="/"
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Home className="w-6 h-6" />
              Go Back Home
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
