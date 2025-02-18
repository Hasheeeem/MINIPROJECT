import React from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from './ui/aurora-background';
import { FlipWords } from './ui/flip-words';

const HeroSection = () => {
  const words = [
    "Elevating Events",
    "Creating Memories",
    "Crafting Experiences",
    "Inspiring Moments"
  ];

  return (
    <AuroraBackground className="min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl font-bold mb-8 text-white"
        >
          E&S Website
        </motion.h1>
        <div className="flex items-center justify-center text-2xl mb-12 text-white gap-1">
          <div className="min-w-[270px] text-center flex-shrink-0">
          <FlipWords 
            words={words} 
            duration={2000}
            className="text-white font-light"
          />
            </div>
          <span>with Creativity</span>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default HeroSection;