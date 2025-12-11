import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hamburger from 'hamburger-react';
import { AuthContext } from '../../Context/FirebaseProvider';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { loginUser, logOut } = useContext(AuthContext);

  const sections = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Framer Motion variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
        ease: 'easeOut',
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 font-display antialiased shadow-md">
      <header className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
          >
            <img
              className="h-12 w-12 rounded-lg"
              src="https://i.ibb.co/4Z5YYw8j/Chat-GPT-Image-Dec-5-2025-05-48-32-PM-removebg-preview.png"
              alt="Logo"
            />
            Emon
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">
              {sections.map((section) => (
                <li key={section.path}>
                  <NavLink
                    to={section.path}
                    className={({ isActive }) =>
                      `font-medium transition-colors duration-300 ${
                        isActive
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
                          : 'text-gray-700 dark:text-gray-300 hover:text-purple-600'
                      }`
                    }
                  >
                    {section.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* User Authentication */}
            {loginUser ? (
              <div className="dropdown dropdown-end">
                <button
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-10 rounded-full border-2 border-blue-500">
                    <img
                      alt="User Avatar"
                      src={
                        loginUser?.photoURL ||
                        'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                      }
                    />
                  </div>
                </button>
                <motion.ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-lg z-40 mt-3 w-52 p-2 shadow-xl border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge badge-primary">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <Link to="/my-bookings">My Bookings</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </motion.ul>
              </div>
            ) : (
              <Link
                to="/login"
                className=" btn btn-primary rounded-full hover:shadow-lg transition-all"
              >
                Login
              </Link>
            )}

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden">
              <Hamburger
                size={20}
                toggled={isDropdownOpen}
                toggle={setIsDropdownOpen}
                color={
                  typeof window !== 'undefined' &&
                  document.documentElement.classList.contains('dark')
                    ? '#ffffff'
                    : '#1f2937'
                }
              />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div
                className="px-6 py-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <ul className="space-y-2">
                  {sections.map((section, i) => (
                    <motion.li
                      key={section.path}
                      custom={i}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <NavLink
                        to={section.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                            isActive
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`
                        }
                      >
                        {section.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </nav>
  );
};

export default NavBar;
