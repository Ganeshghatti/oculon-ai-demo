import React from 'react';
import DashboardSimulation from './DashboardSimulation';

const BrowserMockup: React.FC = () => {
  return (
    <div className="relative group perspective-1000">
       {/* 3D Tilt Effect Container */}
      <div className="relative w-full mx-auto transition-transform duration-500 ease-out transform group-hover:scale-[1.005] group-hover:-translate-y-1">
        
        {/* Browser Frame */}
        <div className="relative bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-slate-200 overflow-hidden ring-1 ring-slate-900/5">
          
          {/* Window Controls Header */}
          <div className="h-9 bg-slate-50 border-b border-slate-200 flex items-center px-4 space-x-2">
            <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80 border border-red-500/30"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/30"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400/80 border border-emerald-500/30"></div>
            </div>
            
            {/* Address Bar Simulation */}
            <div className="flex-1 ml-4 flex justify-center">
                <div className="bg-white border border-slate-200 text-slate-400 text-[10px] px-3 py-1 rounded-md flex items-center space-x-1 w-full max-w-[240px] justify-center shadow-sm">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    <span className="font-medium">app.oculon.ai/dashboard</span>
                </div>
            </div>
            <div className="w-10"></div>
          </div>

          {/* Browser Content */}
          <div className="aspect-[16/10] w-full bg-slate-100 relative overflow-hidden">
             <DashboardSimulation />
          </div>
          
        </div>
        
        {/* Decorative elements behind browser */}
        <div className="absolute -z-10 -bottom-12 -right-12 w-72 h-72 bg-black/5 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -z-10 -top-12 -left-12 w-72 h-72 bg-black/5 rounded-full blur-3xl opacity-70"></div>
      </div>
    </div>
  );
};

export default BrowserMockup;