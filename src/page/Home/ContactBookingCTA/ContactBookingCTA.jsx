import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const ContactBookingCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  return (
    <section className="py-20 lg:py-32 ">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Left: Contact Info + Quick Form */}
          <motion.div
            variants={itemVariants}
            className="p-10 lg:p-16 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-pink-300" />
              <span className="text-sm font-semibold tracking-wider uppercase">
                Get Started Today
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight serif-font">
              Ready to Transform
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                {' '}
                Your Event?
              </span>
            </h2>

            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              Book a free consultation or get instant quote. Our team responds
              within 30 minutes!
            </p>

            <form className="space-y-6 mb-10">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 placeholder-purple-200 text-white focus:outline-none focus:border-pink-300 transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 placeholder-purple-200 text-white focus:outline-none focus:border-pink-300 transition"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl transition-all"
              >
                <Calendar className="w-6 h-6" />
                Get Free Quote Now
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </form>

            <div className="flex items-center gap-3 text-purple-200">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <span>No payment required • Response in 30 mins • 100% Free</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-lg p-10 lg:p-16"
          >
            <h3 className="text-3xl font-bold text-white mb-10">
              Contact Us Anytime
            </h3>

            <div className="space-y-8 text-purple-100">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Call or WhatsApp
                  </h4>
                  <p className="text-2xl font-bold text-pink-300 mt-1">
                    +880 1234-567890
                  </p>
                  <p className="text-sm mt-1">Available 9 AM – 10 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Email Us</h4>
                  <p className="text-lg text-pink-300">hello@styledecor.com</p>
                  <p className="text-sm mt-1">We reply within 1 hour</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Head Office</h4>
                  <p className="text-lg">
                    123 Style Avenue, Gulshan-2
                    <br />
                    Dhaka 1212, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Working Hours
                  </h4>
                  <p className="text-lg">
                    Mon–Sat: 9:00 AM – 10:00 PM
                    <br />
                    Sunday: 10:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Mini Map Placeholder */}
            <div className="mt-12 bg-gray-200 border-2  rounded-xl w-full h-64 flex items-center justify-center overflow-hidden">
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBookingCTA;
