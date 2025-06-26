"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiPlay } from "react-icons/fi";

const Hero = () => {
  const scrollToApplications = () => {
    const applicationsSection = document.getElementById("applications");
    applicationsSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Floating door elements
  const floatingDoors = [
    { type: "Entry", size: "w-20 h-40", color: "bg-amber-700", x: "10%", y: "15%", opacity: [0.6, 0.9, 0.6] },
    { type: "Patio", size: "w-28 h-20", color: "bg-amber-600", x: "85%", y: "25%", opacity: [0.5, 0.8, 0.5] },
    { type: "French", size: "w-24 h-32", color: "bg-amber-800", x: "20%", y: "65%", opacity: [0.4, 0.7, 0.4] },
    { type: "Sliding", size: "w-32 h-24", color: "bg-amber-500", x: "75%", y: "55%", opacity: [0.7, 0.9, 0.7] },
  ];

  // Decorative elements
  const decorativeElements = [
    { size: "w-6 h-6", x: "12%", y: "12%", type: "circle" },
    { size: "w-5 h-5", x: "88%", y: "18%", type: "square" },
    { size: "w-7 h-7", x: "22%", y: "82%", type: "circle" },
    { size: "w-4 h-4", x: "82%", y: "88%", type: "square" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-100 text-gray-900 py-20 px-6 sm:px-12 lg:px-16 min-h-[90vh]">
      {/* Background Elements */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-amber-200 rounded-full blur-[120px] opacity-40 z-0" />
      <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-amber-100 rounded-full blur-[120px] opacity-30 z-0" />
      
      {/* Floating Door Elements */}
      {floatingDoors.map((door, i) => (
        <motion.div
          key={`door-${i}`}
          className={`absolute ${door.color} ${door.size} rounded-lg shadow-xl border-2 border-amber-900/20 z-10 flex items-center justify-center`}
          style={{
            left: door.x,
            top: door.y,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: door.opacity,
            y: [0, Math.random() * 20 - 10],
            rotate: [0, Math.random() * 5 - 2.5]
          }}
          transition={{
            duration: Math.random() * 12 + 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <span className="text-white font-medium text-sm opacity-80">{door.type}</span>
        </motion.div>
      ))}

      {/* Decorative Elements */}
      {decorativeElements.map((el, i) => (
        <motion.div
          key={`dec-${i}`}
          className={`absolute bg-amber-400/40 ${el.size} z-10 ${el.type === "circle" ? "rounded-full" : "rounded-sm"}`}
          style={{
            left: el.x,
            top: el.y,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 h-full">
        {/* Left Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-amber-100/80 border border-amber-200 px-4 py-2 rounded-full w-fit"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <span className="text-sm font-medium text-amber-800">
              Victor Signature Collection 2024
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900"
          >
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Crafting Excellence
            </span>{" "}
            <br />
            <span className="text-amber-700">In Every Entrance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed"
          >
            Victor Door Company brings 25 years of craftsmanship to your threshold. 
            Premium materials, precision engineering, and timeless designs that elevate any space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <button
              onClick={scrollToApplications}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white px-6 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Explore Our Doors
              <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button className="flex items-center justify-center gap-2 bg-white/90 hover:bg-white border border-gray-200 text-gray-800 px-6 py-4 rounded-xl text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 group">
              <FiPlay className="text-amber-600" />
              Design Consultation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-4 mt-8"
          >
            <div className="flex -space-x-4">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 50)}.jpg`}
                  alt="User"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-medium">Trusted by architects & builders</p>
              <p className="text-amber-600">1,000+ successful installations</p>
            </div>
          </motion.div>
        </div>

        {/* Right Hero Illustration - Door Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-[500px] order-1 lg:order-2"
        >
          {/* Main Door Image */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-100 shadow-xl z-10 transition-all duration-500 hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Victor Premium Door"
              className="w-full h-full object-cover"
              loading="eager"
            />
            
            {/* Victor Logo Badge */}
            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xs">V</div>
              <span className="text-sm font-medium text-amber-800">Victor Doors™</span>
            </div>

            {/* Door Style Indicators */}
            <motion.div 
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {['Contemporary', 'Traditional', 'Rustic', 'Modern'].map((style, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white p-1.5 rounded-lg shadow-md border border-amber-100 cursor-pointer"
                >
                  <div className="w-10 h-12 bg-gradient-to-b from-amber-100 to-amber-300 rounded-md flex items-center justify-center text-amber-800 font-bold text-xs relative overflow-hidden">
                    {style[0]}
                    <div className="absolute right-1 bottom-1 w-1.5 h-1.5 rounded-full bg-amber-600/80"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;