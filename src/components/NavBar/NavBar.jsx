import React, { use, useContext, useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import { AuthContext } from '../../Context/FirebaseProvider';
import { Link } from 'react-router';

const sections = [
  { id: 'resume', label: 'Resume' },
  { id: 'about-us', label: 'About Us' },
  { id: 'my-skills', label: 'My Skills' },
];

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { loginUser, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background-light dark:bg-background-dark font-display antialiased">
      <header className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white"
          >
            <img
              className="h-12 w-12"
              src="https://i.ibb.co/4Z5YYw8j/Chat-GPT-Image-Dec-5-2025-05-48-32-PM-removebg-preview.png"
              alt="Logo"
            />
            Emon
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                className="transition-colors duration-300 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary "
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex">
            {/* User Authentication Buttons */}
            {loginUser ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        loginUser
                          ? loginUser.photoURL
                          : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary rounded-full">
                Login
              </Link>
            )}

            {/* Mobile Dropdown Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-800 dark:text-gray-200 focus:outline-none"
                aria-label="Toggle menu"
              >
                <Hamburger
                  size={20}
                  toggled={isDropdownOpen}
                  toggle={setIsDropdownOpen}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="md:hidden bg-background-light dark:bg-background-dark px-6 pb-4">
            {sections.map(({ id, label }) => (
              <a className="block py-2 border-b border-gray-300 dark:border-gray-700 transition-colors duration-300 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                {label}
              </a>
            ))}
          </div>
        )}
      </header>
    </nav>
  );
};

export default NavBar;
