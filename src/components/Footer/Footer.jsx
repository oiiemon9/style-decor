import React, { use } from 'react';
import { AuthContext } from '../../Context/FirebaseProvider';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router';
import Logo from '../Logo/Logo';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="bg-[url('https://i.ibb.co.com/7N8ds5m9/Frame-427324212.png')] bg-no-repeat bg-cover bg-top">
      <footer className="">
        <div className="container mx-auto px-6 pt-12 lg:pt-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand & Tagline */}
            <div>
              <div className="mb-4">
                <Logo></Logo>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Bangladesh’s trusted platform for home & ceremony decoration
                services. Book expert decorators instantly — elegant, reliable,
                and hassle-free.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', to: '/' },
                  { name: 'Services', to: '/services' },
                  { name: 'About Us', to: '/about' },
                  { name: 'Contact', to: '/contact' },
                  { name: 'Gallery', to: '/gallery' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-5">
                Contact Details
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p>123 Style Avenue</p>
                    <p className="text-sm">Gulshan-2, Dhaka 1212</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span>+880 1234-567890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span>hello@styledecor.com</span>
                </div>
              </div>
            </div>

            {/* Working Hours & Social */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-5">
                Business Working Hours
              </h3>
              <div className="text-gray-600 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <div>
                    <p>Mon – Sat: 9:00 AM – 10:00 PM</p>
                    <p className="text-sm">Sunday: 10:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[Facebook, Instagram, Youtube, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 py-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>
              © 2025{' '}
              <span className="font-medium text-purple-600">StyleDecor</span>.
              All rights reserved. Made with care in Bangladesh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
