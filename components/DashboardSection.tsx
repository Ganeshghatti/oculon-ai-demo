import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import BrowserMockup from "./BrowserMockup";

const DashboardSection: React.FC = () => {
  return (
    <section className="w-full max-w-[80rem] mx-auto px-4 md:px-8 mb-20">
      <motion.div
        className="w-full transform transition-transform hover:scale-[1.01] duration-700"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <BrowserMockup />
      </motion.div>

      {/* Divider / Connector */}
      <motion.div
        className="flex justify-center mt-12 mb-4 opacity-30"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.3, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="animate-bounce">
          <ChevronDown size={32} className="text-slate-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default DashboardSection;

