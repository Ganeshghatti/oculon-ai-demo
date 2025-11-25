import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Navigation: React.FC = () => {
  return (
    <motion.div
      className="relative z-10 w-full border-b border-slate-200/50 backdrop-blur-xl bg-white/80"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="w-full max-w-[90rem] mx-auto px-4 md:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <img 
            src="/logo.png" 
            alt="OCULON Logo" 
            width={120} 
            height={120} 
            className="flex-shrink-0 object-contain"
          />
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-1 text-sm font-medium text-black bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg shadow-black/5">
          <a href="#" className="px-4 py-1.5 hover:text-black transition-colors rounded-full hover:bg-slate-50">
            Product
          </a>
          <a href="#" className="px-4 py-1.5 hover:text-black transition-colors rounded-full hover:bg-slate-50">
            Pricing
          </a>
          <a href="#" className="px-4 py-1.5 hover:text-black transition-colors rounded-full hover:bg-slate-50">
            Resources
          </a>
        </div>

        {/* Right Side - Get Started Button */}
        <div className="flex items-center">
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
            Get Started
          </button>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navigation;

