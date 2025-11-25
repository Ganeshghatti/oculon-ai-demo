import React from "react";
import { ChevronDown } from "lucide-react";

const Navigation: React.FC = () => {
  return (
    <div className="relative z-10 w-full">
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
        <div className="hidden md:flex items-center space-x-1 text-sm font-medium text-black bg-white px-4 py-2 rounded-full border border-slate-200/50">
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
    </div>
  );
};

export default Navigation;

