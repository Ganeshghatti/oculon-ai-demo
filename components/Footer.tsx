import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 py-12 text-center text-slate-500 text-sm relative z-10 bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="OCULON Logo" 
            width={120} 
            height={120} 
            className="flex-shrink-0 object-contain"
          />
        </div>
        <p>&copy; 2025 OCULON AI Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

