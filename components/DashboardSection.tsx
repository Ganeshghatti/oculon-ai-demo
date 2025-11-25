import React from "react";
import { ChevronDown } from "lucide-react";
import BrowserMockup from "./BrowserMockup";

const DashboardSection: React.FC = () => {
  return (
    <section className="w-full max-w-[80rem] mx-auto px-4 md:px-8 mb-20">
      <div className="w-full transform transition-transform hover:scale-[1.01] duration-700">
        <BrowserMockup />
      </div>

      {/* Divider / Connector */}
      <div className="flex justify-center mt-12 mb-4 opacity-30">
        <div className="animate-bounce">
          <ChevronDown size={32} className="text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;

