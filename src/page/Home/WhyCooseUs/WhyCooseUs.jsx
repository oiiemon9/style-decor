import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Clock,
  Shield,
  Users,
  Sparkles,
  Zap,
  Award,
  HeartHandshake,
  MapPinHouse,
  CalendarCheck,
} from 'lucide-react';

const WhyCooseUs = () => {
  const features = [
    {
      icon: CalendarCheck,
      title: 'Instant Online Booking',
      desc: 'No more waiting in queues. Book your decoration service 24/7 from anywhere in Bangladesh.',
    },
    {
      icon: Users,
      title: 'Expert Verified Decorators',
      desc: 'All decorators are background-checked, highly rated, and specialize in wedding & home themes.',
    },
    {
      icon: Zap,
      title: 'Real-Time Project Tracking',
      desc: 'Live status updates: Assigned → Planning → Materials Ready → On the Way → Completed',
    },
    {
      icon: Shield,
      title: 'Secure Payment & Refund',
      desc: 'Pay safely via Stripe. Full refund if service is cancelled before decorator assignment.',
    },
    {
      icon: Sparkles,
      title: '100% Customizable Themes',
      desc: 'From traditional Bangladeshi weddings to modern minimalist setups — we create your vision.',
    },
    {
      icon: MapPinHouse,
      title: 'On-Site Service Nationwide',
      desc: 'We come to your venue — Dhaka, Chattogram, Sylhet, Khulna & everywhere in between.',
    },
    {
      icon: Award,
      title: 'Premium Quality Materials',
      desc: 'Fresh flowers, LED lights, imported fabrics, durable structures — only the best for your event.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Support Team',
      desc: 'Personal coordinator assigned to every booking for seamless communication.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-6">
            Trusted by Thousands of Happy Clients
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              StyleDecor
            </span>
            ?
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            We don’t just decorate — we create unforgettable moments with
            precision, creativity, and care.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-purple-100 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Badges Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-12 text-purple-200">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-pink-400" />
              <span className="text-lg font-medium">
                10,000+ Events Decorated
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-pink-400" />
              <span className="text-lg font-medium">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-pink-400" />
              <span className="text-lg font-medium">24/7 Customer Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCooseUs;
