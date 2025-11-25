import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 pt-16 pb-16 md:pt-16 md:pb-24 flex flex-col items-center text-center">
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[0.95] mb-4 md:mb-8">
        Plan at the speed of thought.
      </h1>

      <p className="text-lg sm:text-xl text-slate-600 leading-relaxed md:max-w-2xl mb-4 md:mb-10">
        The modern FP&A copilot for fast-moving teams. Turn your financial data into sharper decisions—instantly.
      </p>

      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-fit sm:w-auto">
        <button className="group bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 flex items-center justify-center w-full sm:w-auto shadow-xl shadow-blue-500/20">
          Get Started
          <ArrowRight
            size={16}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;

