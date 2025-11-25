import React from "react";
import DotShader from "./components/DotShader";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import DashboardSection from "./components/DashboardSection";
import BentoGridSection from "./components/BentoGridSection";
import Footer from "./components/Footer";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-white text-black font-geist overflow-x-hidden selection:bg-black selection:text-white flex flex-col">
      {/* Background Layer */}
      <DotShader />

      {/* Navigation */}
      <Navigation />

      {/* Main Content Wrapper */}
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <DashboardSection />
        <BentoGridSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
