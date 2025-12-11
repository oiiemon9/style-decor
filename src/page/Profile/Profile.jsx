import React, { use } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit3,
  Shield,
  Sparkles,
  User,
  LogOut,
} from 'lucide-react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/FirebaseProvider';
import { format } from 'date-fns';

const Profile = () => {
  const { loginUser, role, logOut } = use(AuthContext);
  console.log(loginUser);

  const defaultUser = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+880 1XXX-XXXXXX',
    location: 'Dhaka, Bangladesh',
    role: 'Client',
    joinDate: 'January 2025',
    profileImage: 'https://via.placeholder.com/300',
    bio: 'Passionate about creating beautiful spaces for special moments. Love exploring new decoration ideas for weddings and home interiors.',
  };

  const currentUser = defaultUser;
  return (
    <div>
      <section className="min-h-screen  py-12 lg:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 p-10 lg:p-16 text-white">
              <div className="grid md:grid-cols-3 gap-10 items-center">
                <div className="text-center md:text-left">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative inline-block"
                  >
                    <img
                      src={loginUser?.photoURL}
                      alt={loginUser?.displayName}
                      className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover border-8 border-white/30 shadow-2xl"
                    />
                    <div className="absolute bottom-4 right-4 bg-green-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* User Info */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-2">
                      {loginUser?.displayName}
                    </h1>
                    <div className="flex items-center gap-3 text-purple-200">
                      <Sparkles className="w-5 h-5" />
                      <span className="text-xl font-medium">{role}</span>
                    </div>
                  </div>

                  <p className="text-lg text-purple-100 max-w-3xl leading-relaxed">
                    {currentUser.bio}
                  </p>

                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-pink-300" />
                      <span>
                        Joined{' '}
                        {format(
                          new Date(loginUser?.metadata?.creationTime),
                          'dd MMMM yyyy'
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-pink-300" />
                      <span>{currentUser.location}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md hover:bg-white/30 px-8 py-4 rounded-full border border-white/30 transition-all">
                      <Edit3 className="w-5 h-5" />
                      Edit Profile
                    </button>
                    {role === 'admin' || role === 'decorator' ? (
                      <Link
                        to="/dashboard"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-xl px-8 py-4 rounded-full font-medium transition-all"
                      >
                        <User className="w-5 h-5" />
                        Go to Dashboard
                      </Link>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-5">
                <Mail className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Email Address
              </h3>
              <p className="text-gray-600">{loginUser?.email}</p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-5">
                <Phone className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Phone Number
              </h3>
              <p className="text-gray-600">{currentUser.phone}</p>
            </div>

            {/* Logout / Security */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-5">
                <LogOut className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Account Actions
              </h3>
              <button
                onClick={() => logOut()}
                className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2 cursor-pointer"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
