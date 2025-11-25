import React from "react";
import BentoGrid from "./BentoGrid";

const BentoGridSection: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-transparent to-slate-50/50">
      <div className="text-center pt-20 px-4">
        <h2 className="text-3xl md:text-6xl font-medium text-black">
        One Agent.<br />
        Unlimited superpowers.
        </h2>
      </div>
      <BentoGrid />
    </div>
  );
};

export default BentoGridSection;

