import React from 'react';
import { 
  TrendingUp, 
  Zap,
  Bot,
  Database,
  Sparkles,
  Users
} from 'lucide-react';
import '../styles.css';

const BentoGrid: React.FC = () => {
  return (
    <section className="w-full max-w-[90rem] mx-auto px-4 md:px-8 py-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* CARD 1: Spot Trends */}
        <div className="group col-span-1 md:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-[300px]">
          <div className="relative z-10">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <TrendingUp size={20} />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">Spot Trends</h3>
            <p className="text-slate-600 text-sm max-w-sm">Instantly detect patterns, risks, and opportunities in your financial data.</p>
          </div>
          
          {/* Financial Trend Lines Visualization with Enhanced Hover Interactions */}
          <div className="absolute bottom-0 right-0 left-0 h-48 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 200">
                  {/* Revenue trend (upward) - Thickens and glows on hover */}
                  <path 
                    d="M0,180 Q50,150 100,120 T200,80 T300,50 T400,30" 
                    fill="none" 
                    stroke="#000000" 
                    strokeWidth="3" 
                    opacity="0.8" 
                    className="drop-shadow-sm group-hover:stroke-[4] group-hover:stroke-blue-600 group-hover:opacity-100 transition-all duration-500"
                    style={{ filter: 'drop-shadow(0 0 0px rgba(59, 130, 246, 0))' }}
                  >
                    <animate attributeName="d" values="M0,180 Q50,150 100,120 T200,80 T300,50 T400,30;M0,180 Q50,155 100,125 T200,85 T300,55 T400,35;M0,180 Q50,150 100,120 T200,80 T300,50 T400,30" dur="8s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Expense trend (moderate) - Dashed line animates on hover */}
                  <path 
                    d="M0,160 Q50,155 100,140 T200,120 T300,100 T400,90" 
                    fill="none" 
                    stroke="#000000" 
                    strokeWidth="2.5" 
                    opacity="0.4" 
                    strokeDasharray="5 5"
                    className="group-hover:stroke-[3.5] group-hover:stroke-blue-600 group-hover:opacity-90 group-hover:stroke-dasharray-[8_2] transition-all duration-500"
                  >
                    <animate attributeName="d" values="M0,160 Q50,155 100,140 T200,120 T300,100 T400,90;M0,160 Q50,157 100,142 T200,122 T300,102 T400,92;M0,160 Q50,155 100,140 T200,120 T300,100 T400,90" dur="10s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Pattern markers - Glow and pulse on hover */}
                  {[100, 200, 300].map((x, i) => (
                    <g key={i} className="group/marker">
                      <circle 
                        cx={x} 
                        cy={80 - (i * 10)} 
                        r="4" 
                        fill="#000000" 
                        opacity="0.9"
                        className="group-hover:r-[6] group-hover:opacity-100 group-hover:fill-blue-600 transition-all duration-500"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <animate attributeName="r" values="4;6;4" dur="4s" begin={`${i * 1.3}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
                      </circle>
                      {/* Glow effect on hover */}
                      <circle 
                        cx={x} 
                        cy={80 - (i * 10)} 
                        r="8" 
                        fill="#3b82f6" 
                        opacity="0"
                        className="group-hover:opacity-30 group-hover:r-[12] transition-all duration-500"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      />
                      <line 
                        x1={x} 
                        y1={80 - (i * 10) - 10} 
                        x2={x} 
                        y2={80 - (i * 10) + 10} 
                        stroke="#000000" 
                        strokeWidth="2" 
                        opacity="0.6"
                        className="group-hover:stroke-[3] group-hover:stroke-blue-600 group-hover:opacity-100 transition-all duration-500"
                      />
                      <text 
                        x={x} 
                        y={80 - (i * 10) - 15} 
                        fontSize="8" 
                        fill="#000000" 
                        opacity="0.7"
                        className="group-hover:fill-blue-600 group-hover:opacity-100 group-hover:text-[10px] group-hover:font-bold transition-all duration-500"
                      >
                        {['Q1', 'Q2', 'Q3'][i]}
                      </text>
                    </g>
                  ))}
                  
                  {/* Gradient fill - Intensifies on hover */}
                  <path 
                    d="M0,180 Q50,150 100,120 T200,80 T300,50 T400,30 V200 H0 Z" 
                    fill="url(#trendGradient)" 
                    opacity="0.15" 
                    className="group-hover:opacity-0.25 group-hover:fill-blue-600/20 transition-all duration-500"
                  />
                  <defs>
                      <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#000000" />
                          <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                  </defs>
                  
                  {/* Animated scanning dot - Moves faster on hover */}
                  <circle 
                    cx="0" 
                    cy="0" 
                    r="5" 
                    fill="#000000" 
                    stroke="#ffffff" 
                    strokeWidth="2.5"
                    className="group-hover:r-[7] group-hover:fill-blue-600 group-hover:stroke-[3] transition-all duration-500"
                  >
                      <animateMotion 
                        path="M0,180 Q50,150 100,120 T200,80 T300,50 T400,30" 
                        dur="12s" 
                        repeatCount="indefinite"
                        className="group-hover:dur-[8s]"
                      />
                  </circle>
                  {/* Glow trail on hover */}
                  <circle 
                    cx="0" 
                    cy="0" 
                    r="10" 
                    fill="#3b82f6" 
                    opacity="0"
                    className="group-hover:opacity-20 transition-opacity duration-500"
                  >
                      <animateMotion 
                        path="M0,180 Q50,150 100,120 T200,80 T300,50 T400,30" 
                        dur="12s" 
                        repeatCount="indefinite"
                      />
                  </circle>
              </svg>
          </div>
        </div>

        {/* CARD 2: Build Scenarios */}
        <div className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col h-[300px]">
             <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-600 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                <Zap size={20} />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">Build Scenarios</h3>
            <p className="text-slate-600 text-sm mb-4">Create forward-looking scenarios in seconds, not hours.</p>
            
            {/* Financial Scenario Comparison with Animated Bars */}
            <div className="flex-1 flex flex-col justify-center space-y-4">
                {[
                  { label: 'Base Case', value: 65, color: 'bg-slate-300', amount: '$2.4M' },
                  { label: 'Optimistic', value: 85, color: 'bg-black', amount: '$3.1M' },
                  { label: 'Conservative', value: 45, color: 'bg-slate-400', amount: '$1.8M' }
                ].map((scenario, i) => (
                  <div key={i} className="space-y-1.5 group/scenario">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-600 font-medium group-hover/scenario:text-blue-600 transition-colors">{scenario.label}</span>
                      <span 
                        className={`font-semibold transition-all duration-500 ${scenario.color === 'bg-black' ? 'text-black' : 'text-black'} group-hover:text-blue-600 group-hover:scale-110 group-hover:font-bold`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        {scenario.amount}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden group-hover:shadow-inner transition-shadow">
                      <div 
                        className={`${scenario.color} h-full rounded-full transition-all duration-1000 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/30 relative overflow-hidden`}
                        style={{ 
                          width: `${scenario.value}%`,
                          transitionDelay: `${i * 150}ms`
                        }}
                      >
                        {/* Animated shimmer on hover */}
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_4s_infinite] group-hover:via-white/50 transition-all"></div>
                        {/* Value indicator that appears on hover */}
                        <div 
                          className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ transitionDelay: `${i * 200}ms` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>

        {/* CARD 3: Automate Tasks */}
        <div className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
            <div>
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-600 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <Bot size={20} />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">Automate Tasks</h3>
                <p className="text-slate-600 text-sm">Offload repetitive workflows to your Oculon Agent.</p>
            </div>
            
            {/* Financial Workflow Automation with Progress Animations */}
            <div className="mt-4 space-y-2.5">
                {[
                  { label: 'Monthly Close', status: 'complete', delay: '0ms', progress: 100 },
                  { label: 'Forecast Update', status: 'active', delay: '200ms', progress: 65 },
                  { label: 'Report Generation', status: 'pending', delay: '400ms', progress: 0 }
                ].map((task, i) => (
                  <div 
                    key={i}
                    className={`flex items-center space-x-2.5 bg-slate-50 p-3 rounded-lg border transition-all duration-500 group-hover:translate-x-2 group-hover:shadow-md ${
                      task.status === 'complete' ? 'border-slate-300 bg-slate-100/50 group-hover:border-blue-500/30 group-hover:bg-blue-50/50' : 
                      task.status === 'active' ? 'border-black border-2 bg-slate-100 group-hover:border-blue-600 group-hover:bg-blue-50' : 
                      'border-slate-200'
                    }`}
                    style={{ transitionDelay: task.delay }}
                  >
                    <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      task.status === 'complete' ? 'bg-black group-hover:bg-blue-600 group-hover:scale-125' : 
                      task.status === 'active' ? 'bg-black animate-pulse group-hover:bg-blue-600 group-hover:animate-none group-hover:scale-125' : 
                      'border-2 border-slate-300 group-hover:border-blue-400'
                    }`}>
                      {task.status === 'complete' && (
                        <svg className="w-2.5 h-2.5 text-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {task.status === 'active' && (
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-slate-700 mb-1.5 group-hover:text-blue-600 transition-colors">{task.label}</div>
                      <div className="h-2.5 bg-slate-200 rounded w-full overflow-hidden relative">
                        {task.status === 'active' && (
                          <>
                            <div 
                              className="h-full bg-black rounded transition-all duration-1000 group-hover:bg-blue-600"
                              style={{ width: `${task.progress}%` }}
                            ></div>
                            {/* Animated progress indicator */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]"></div>
                          </>
                        )}
                        {task.status === 'pending' && (
                          <div className="h-full bg-slate-300 rounded w-0 group-hover:w-full group-hover:bg-blue-600 transition-all duration-1000"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>

        {/* CARD 4: Consolidate Data */}
        <div className="group bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
             <div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-500/30 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500">
                    <Database size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Consolidate Data</h3>
                <p className="text-slate-400 text-sm">Bring every financial input into one unified workspace.</p>
            </div>
            
            {/* Data Source Integration Visualization with Pulsing Connections */}
            <div className="mt-4 relative h-32">
                {/* Central hub - Glows on hover */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg z-10 group-hover:bg-blue-600 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-blue-500/70 transition-all duration-500">
                    <Database size={18} className="text-black group-hover:text-white transition-colors" />
                    {/* Pulse rings on hover */}
                    <div className="absolute inset-0 border-2 border-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                </div>
                
                {/* Data sources connecting - Scale and glow on hover */}
                {['ERP', 'CRM', 'Bank', 'Excel', 'API'].map((source, i) => {
                  const deg = (i * 72);
                  return (
                    <div 
                      key={i}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-45px) rotate(-${deg}deg)`
                      }}
                    >
                      <div className="w-9 h-9 bg-slate-700 border-2 border-slate-600 rounded-lg flex items-center justify-center group-hover:border-blue-500 group-hover:bg-slate-600 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-500"
                           style={{ transitionDelay: `${i * 100}ms` }}>
                        <div className="text-[8px] text-slate-300 font-medium group-hover:text-blue-300 transition-colors">{source}</div>
                      </div>
                      {/* Connection line - Pulses and glows on hover */}
                      <div 
                        className="absolute top-1/2 left-1/2 w-18 h-px bg-slate-600 origin-left group-hover:bg-blue-500 group-hover:h-[2px] group-hover:shadow-[0_0_4px_rgba(59,130,246,0.6)] transition-all duration-500"
                        style={{ 
                          transform: `rotate(${deg}deg) translate(18px, 0)`,
                          transitionDelay: `${i * 100}ms`
                        }}
                      >
                        {/* Data flow animation on hover */}
                        <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite]"></div>
                      </div>
                    </div>
                  );
                })}
                
                {/* Pulse effect - Intensifies on hover */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border-2 border-blue-500/30 rounded-full animate-ping group-hover:border-blue-500/60 group-hover:w-20 group-hover:h-20 transition-all duration-500"></div>
            </div>
        </div>

        {/* CARD 5: Generate Insights */}
        <div className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
             <div>
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-600 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <Sparkles size={20} />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">Generate Insights</h3>
                <p className="text-slate-600 text-sm">Get clear explanations, summaries, and recommendations.</p>
            </div>
             
             {/* Financial Insights Cards with Expand Animation */}
             <div className="mt-4 space-y-3">
                 {[
                   { insight: 'Revenue up 23% vs forecast', metric: '$2.1M', width: '85%', icon: '📈' },
                   { insight: 'Cost optimization opportunity', metric: 'Save $180K', width: '70%', icon: '💰' }
                 ].map((item, i) => (
                    <div 
                      key={i}
                      className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 group-hover:bg-blue-50/50 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-500 group/insight"
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      <div className="flex items-start space-x-2.5">
                        <div className="w-2 h-2 rounded-full bg-black mt-1.5 flex-shrink-0 group-hover:bg-blue-600 group-hover:scale-150 group-hover:animate-pulse transition-all duration-500"></div>
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="h-2.5 bg-slate-300 rounded w-3/4 group-hover:bg-blue-200 transition-colors"></div>
                            <div className="h-2.5 bg-blue-600 rounded w-16 group-hover:w-20 group-hover:font-bold transition-all duration-500"></div>
                          </div>
                          <div className="h-2 bg-slate-200 rounded overflow-hidden group-hover:bg-blue-100 transition-colors">
                            <div 
                              className="h-full bg-black rounded transition-all duration-1000 group-hover:bg-blue-600"
                              style={{ width: item.width }}
                            >
                              {/* Progress animation */}
                              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
                            </div>
                          </div>
                          {/* Additional detail that appears on hover */}
                          <div className="h-1.5 bg-slate-100 rounded opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>
                 ))}
             </div>
        </div>

        {/* CARD 6: Collaborate Faster */}
        <div className="group col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-50/50 to-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[200px]">
            <div className="relative z-10 max-w-md">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 text-white shadow-sm group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Users size={20} />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">Collaborate Faster</h3>
                <p className="text-slate-600 text-sm">Share reports and decisions effortlessly across your team.</p>
            </div>

            {/* Team Collaboration Visualization with Bouncing Avatars */}
            <div className="mt-8 md:mt-0 flex-1 h-32 w-full md:w-auto relative flex items-center justify-center">
                 {/* Central document - Rotates and scales on hover */}
                 <div className="w-18 h-22 bg-white border-2 border-black rounded-lg shadow-xl flex flex-col items-center justify-center z-10 relative group-hover:border-blue-600 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500">
                    <div className="w-10 h-10 bg-slate-100 rounded mb-1.5 group-hover:bg-blue-100 transition-colors"></div>
                    <div className="w-8 h-1 bg-slate-200 rounded group-hover:bg-blue-200 transition-colors"></div>
                 </div>

                 {/* Team members avatars - Bounce and highlight on hover */}
                 {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                    <div 
                      key={i}
                      className="absolute w-11 h-11 bg-slate-200 border-2 border-white rounded-full flex items-center justify-center shadow-lg group-hover:border-blue-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all duration-500 animate-[orbit_12s_linear_infinite]"
                      style={{ 
                        transform: `rotate(${deg}deg) translateX(75px) rotate(-${deg}deg)`,
                        animationDelay: `-${i * 2}s`,
                        transitionDelay: `${i * 50}ms`
                      }}
                    >
                      <div className="w-7 h-7 bg-black rounded-full group-hover:bg-blue-600 group-hover:ring-2 group-hover:ring-blue-300 transition-all duration-500"></div>
                      {/* Connection line - Highlights on hover */}
                      <div 
                        className="absolute top-1/2 left-1/2 w-15 h-px bg-slate-300 origin-left -z-10 group-hover:bg-blue-500 group-hover:h-[2px] group-hover:shadow-[0_0_4px_rgba(59,130,246,0.6)] transition-all duration-500"
                        style={{ 
                          transform: `rotate(${deg + 180}deg)`,
                          transitionDelay: `${i * 50}ms`
                        }}
                      >
                        {/* Data flow animation */}
                        <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite]"></div>
                      </div>
                    </div>
                 ))}
                 
                 {/* Ripple effect - Intensifies on hover */}
                 <div className="absolute w-18 h-18 border-2 border-blue-500/20 rounded-lg animate-ping opacity-30 group-hover:opacity-60 group-hover:border-blue-500/40 transition-all duration-500"></div>
            </div>
        </div>

      </div>
      
    </section>
  );
};

export default BentoGrid;
