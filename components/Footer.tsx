import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="w-full border-t border-slate-200/50 py-12 text-center text-slate-500 text-sm relative z-10 bg-white/80 backdrop-blur-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img 
            src="/logo.jpeg" 
            alt="OCULON Logo" 
            width={32} 
            height={32} 
            className="flex-shrink-0 object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-black uppercase">OCULON</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          &copy; 2025 OCULON AI Inc. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;

