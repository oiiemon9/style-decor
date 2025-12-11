import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  CalendarCheck,
  Users,
  MapPin,
  Clock,
  ShieldCheck,
  Palette,
  HeartHandshake,
} from 'lucide-react';
import { Link } from 'react-router';

const About = () => {
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
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-24"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              StyleDecor
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            Transforming homes and ceremonies with elegance, creativity, and
            seamless booking experience.
          </motion.p>
        </div>
      </motion.section>

      {/* About StyleDecor */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                What is <span className="text-purple-600">StyleDecor</span>?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                StyleDecor is a modern appointment management system designed
                exclusively for local decoration companies offering both
                in-studio consultations and on-site services for homes,
                weddings, offices, and special ceremonies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We empower users to explore stunning decoration packages, check
                real-time decorator availability, book instantly, pay securely
                via Stripe, and track every step of their dream setup — from
                planning to perfection.
              </p>
            </motion.div>

            <motion.div
              variants={floatVariants}
              animate="float"
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-10 shadow-2xl">
                <img
                  src="https://www.greenvelope.com/blog/wp-content/uploads/outdoor-wedding-aisle.jpeg"
                  alt="Elegant decoration setup"
                  className="rounded-2xl shadow-xl w-full object-cover h-96"
                />
                <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-2xl shadow-xl">
                  <Sparkles className="w-10 h-10" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-16"
          >
            Solving Real Problems for Real People
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {[
              {
                icon: CalendarCheck,
                title: 'End of Long Waiting',
                desc: 'No more walk-ins & endless queues',
              },
              {
                icon: Users,
                title: 'Smart Decorator Matching',
                desc: 'Find experts by specialty instantly',
              },
              {
                icon: MapPin,
                title: 'On-Site Coordination',
                desc: 'Real-time status from assignment to completion',
              },
              {
                icon: ShieldCheck,
                title: 'Secure Payments',
                desc: 'Pay only after choosing your perfect package',
              },
              {
                icon: Clock,
                title: '24/7 Booking',
                desc: 'Book anytime from anywhere',
              },
              {
                icon: Palette,
                title: 'Creative Freedom',
                desc: 'Choose themes, add-ons & customizations',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl hover:shadow-2xl transition-shadow border border-purple-100"
              >
                <item.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HeartHandshake className="w-20 h-20 mx-auto mb-8 text-pink-300" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Promise</h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              To bring beauty, joy, and seamless experience to every home and
              celebration. We connect passionate decorators with clients who
              dream big — making every moment beautifully unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-10"
          >
            Book your dream decoration today — elegant, effortless,
            extraordinary.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 rounded-full text-xl font-semibold hover:shadow-2xl transition-shadow"
            >
              Explore Services Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
