import React from 'react';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'lucide-react';
import { Link } from 'react-router';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 serif-font"
          >
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300">
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            We're here to help transform your spaces. Reach out for
            consultations, bookings, or any inquiries.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-16"
          >
            Our Contact Details
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              {
                icon: MapPin,
                title: 'Address',
                desc: '123 Decoration Avenue, Style City, BD 12345',
              },
              { icon: Phone, title: 'Phone', desc: '+880 1234-567890' },
              { icon: Mail, title: 'Email', desc: 'support@styledecor.com' },
              {
                icon: Clock,
                title: 'Working Hours',
                desc: 'Mon - Fri: 9 AM - 6 PM\nSat: 10 AM - 4 PM',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 text-center"
              >
                <item.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-indigo-50 p-12 rounded-3xl shadow-2xl"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-800 mb-10 text-center"
            >
              Send Us a Message
            </motion.h2>

            <form className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-2 gap-6"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:outline-none transition"
                />
              </motion.div>

              <motion.input
                variants={itemVariants}
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:outline-none transition"
              />

              <motion.textarea
                variants={itemVariants}
                placeholder="Your Message"
                rows={6}
                className="w-full p-4 rounded-xl border border-gray-300 focus:border-purple-600 focus:outline-none transition"
              />

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Find Us on the Map
          </motion.h2>

          <motion.div
            variants={floatVariants}
            animate="float"
            className="h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-2xl"
          >
            <MapContainer
              center={[23.9905, 90.3877]}
              zoom={8}
              scrollWheelZoom={false}
              className="w-full h-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[24.022405, 90.426586]}>
                <Popup>
                  Gazipur sadar <br /> Office
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-10"
          >
            Connect With Us
          </motion.h2>

          <motion.div
            className="flex justify-center gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link className="bg-black p-2 rounded-full">
              <Facebook></Facebook>
            </Link>
            <Link className="bg-black p-2 rounded-full">
              <Twitter></Twitter>
            </Link>
            <Link className="bg-black p-2 rounded-full">
              <Instagram></Instagram>
            </Link>
            <Link className="bg-black p-2 rounded-full">
              <Linkedin></Linkedin>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
