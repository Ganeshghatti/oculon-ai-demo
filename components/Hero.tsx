import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="w-full max-w-4xl mx-auto px-4 pt-16 pb-16 md:pt-16 md:pb-24 flex flex-col items-center text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[0.95] mb-4 md:mb-8"
        variants={itemVariants}
      >
        Plan at the speed of thought.
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-slate-600 leading-relaxed md:max-w-2xl mb-4 md:mb-10"
        variants={itemVariants}
      >
        The modern FP&A copilot for fast-moving teams. Turn your financial data into sharper decisions—instantly.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-fit sm:w-auto"
        variants={itemVariants}
      >
        <button className="group bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 flex items-center justify-center w-full sm:w-auto shadow-xl shadow-blue-500/20">
          Get Started
          <ArrowRight
            size={16}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

