import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  HeartHandshake,
  Clock,
  MapPinHouse,
  ShieldCheck,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router';

const AboutPreview = () => {
  const stats = [
    { number: '10,000+', label: 'Events Decorated' },
    { number: '4.9/5.0', label: 'Client Rating' },
    { number: '500+', label: 'Expert Decorators' },
    { number: '24/7', label: 'Support Available' },
  ];

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
    <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white overflow-hidden relative">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-5 h-5" />
                About StyleDecor
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight serif-font"
            >
              Creating Unforgettable Moments
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                {' '}
                Since Day One
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-purple-100 mb-10 leading-relaxed max-w-2xl"
            >
              StyleDecor is Bangladesh’s most trusted decoration booking
              platform — connecting passionate clients with expert decorators
              for weddings, homes, ceremonies, and corporate events. From a
              simple idea to transforming over 10,000+ celebrations, we make
              beauty accessible, seamless, and magical.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
            >
              {[
                { icon: HeartHandshake, text: 'Personalized Service' },
                { icon: Clock, text: 'Real-Time Tracking' },
                { icon: MapPinHouse, text: 'Nationwide Coverage' },
                { icon: ShieldCheck, text: '100% Secure Payment' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <div className="flex items-center gap-3 text-purple-200">
                <Users className="w-8 h-8" />
                <span className="text-lg">
                  Trusted by thousands across Bangladesh
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Stats + Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/8gdLNXBp/download-50.png"
                alt="StyleDecor Team & Decoration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Floating Stats */}
              <div className="absolute top-0 h-full w-full flex justify-center items-center ">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white/20 backdrop-blur-md rounded-2xl text-center border border-white/30 p-2 md:p-6 lg:p-4 xl:p-6"
                    >
                      <h3 className="text-4xl font-bold text-pink-300">
                        {stat.number}
                      </h3>
                      <p className="text-sm text-purple-100 mt-2">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-pink-500 to-purple-600 text-white px-4 py-2 md:px-8 md:py-4 rounded-2xl shadow-2xl rotate-12 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8" />
              <span className="font-bold text-lg">Est. 2024</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
