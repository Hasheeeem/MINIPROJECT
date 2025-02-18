import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Preloader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? 'auto' : 'none' }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.98, 1, 0.98],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex items-center gap-4"
        >
          <Briefcase className="w-16 h-16 text-white" />
          <span className="text-4xl font-bold text-white">E&S</span>
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
              "linear-gradient(45deg, transparent 100%, rgba(255,255,255,0.2) 150%, transparent 200%)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            maskImage: "linear-gradient(45deg, transparent, white, transparent)",
            WebkitMaskImage: "linear-gradient(45deg, transparent, white, transparent)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;