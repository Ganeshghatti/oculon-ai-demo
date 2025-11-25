import React from "react";
import BentoGrid from "./BentoGrid";
import { motion } from "framer-motion";

const BentoGridSection: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-transparent to-slate-50/50">
      <motion.div
        className="text-center pt-20 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl md:text-6xl font-medium text-black">
          One Agent.<br />
          Unlimited superpowers.
        </h2>
      </motion.div>
      <BentoGrid />
    </div>
  );
};

export default BentoGridSection;

