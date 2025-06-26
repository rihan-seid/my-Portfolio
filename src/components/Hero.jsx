"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiPlay } from "react-icons/fi";

const Hero = () => {
  const scrollToApplications = () => {
    const applicationsSection = document.getElementById("applications");
    applicationsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-100 text-gray-900 py-28 px-6 sm:px-12 lg:px-16">
      {/* Background Elements */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-amber-200 rounded-full blur-[120px] opacity-40 z-0" />
      <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-amber-100 rounded-full blur-[120px] opacity-30 z-0" />
      
      {/* Door Pattern Decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-l-4 border-amber-200/50 h-20"
            style={{
              left: `${(i * 10) % 100}%`,
              top: `${Math.random() * 100}%`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-amber-100/80 border border-amber-200 px-4 py-2 rounded-full"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <span className="text-sm font-medium text-amber-800">
              New: Smart Door Configurator
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-gray-900"
          >
            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              Victor Doors
            </span>{" "}
            <br />
            <span className="underline decoration-amber-400 decoration-wavy">Opening Possibilities</span> Worldwide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed"
          >
            Precision-crafted doors for every space. Explore our complete suite of door solutions, 
            from design to installation management, all in one platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <button
              onClick={scrollToApplications}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black px-6 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Explore Door Solutions
              <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button className="flex items-center justify-center gap-2 bg-white/90 hover:bg-white border border-gray-200 text-gray-800 px-6 py-4 rounded-xl text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 group">
              <FiPlay className="text-amber-500" />
              See Installation Demo
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
              <p className="font-medium">Trusted by architects worldwide</p>
              <p className="text-amber-600">4.8/5 average satisfaction</p>
            </div>
          </motion.div>
        </div>

        {/* Right Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-300 rounded-full blur-[80px] opacity-30 z-0" />
          <div className="relative z-10 bg-white/50 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-100 shadow-2xl p-2">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Victor Door Solutions"
              className="w-full h-auto rounded-2xl object-cover aspect-video"
            />
            
            {/* Floating door type indicators */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-gray-100"
            >
              {['Entry', 'Sliding', 'French', 'Smart'].map((type, i) => (
                <div key={i} className="bg-amber-100 p-3 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-md flex items-center justify-center text-white font-bold text-xs">
                    {type[0]}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;