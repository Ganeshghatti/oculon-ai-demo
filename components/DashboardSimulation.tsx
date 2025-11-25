import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  BarChart3,
  FileText,
  DollarSign,
  Calendar,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Zap
} from 'lucide-react';
import '../styles.css';

const FEATURES = [
  { id: 'planning', label: 'Financial Planning', icon: Target },
  { id: 'forecasting', label: 'Forecasting', icon: TrendingUp },
  { id: 'reporting', label: 'Reporting', icon: FileText },
];

const DashboardSimulation: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTabIndex((prev) => (prev + 1) % FEATURES.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeFeature = FEATURES[activeTabIndex];

  return (
    <div 
      className="w-full h-full bg-slate-50/80 backdrop-blur-xl flex flex-col font-geist overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Bar */}
      <div className="h-12 border-b border-slate-200/50 bg-white/80 backdrop-blur-md flex items-center px-4 justify-between shrink-0">
        <div className="flex items-center space-x-2">
            <img 
              src="/logo.jpeg" 
              alt="OCULON Logo" 
              width={28} 
              height={28} 
              className="flex-shrink-0 object-contain"
            />
        </div>
        <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center px-3 py-1.5 bg-slate-100 rounded-md border border-slate-200 w-40">
                <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300"></div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-14 md:w-56 border-r border-slate-200/50 bg-white/80 backdrop-blur-md flex flex-col py-4 space-y-1">
            {FEATURES.map((feature, index) => {
                const isActive = activeTabIndex === index;
                const Icon = feature.icon;
                return (
                    <button 
                        key={feature.id}
                        onClick={() => setActiveTabIndex(index)}
                        className={`flex items-center px-4 py-3 mx-2 rounded-lg text-sm transition-all duration-300 relative group ${isActive ? 'bg-black text-white font-medium shadow-md' : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}`}
                    >
                        {isActive && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-black rounded-r-full group-hover:bg-blue-600 group-hover:h-8 transition-all duration-300" />
                        )}
                        <Icon size={18} className="md:mr-3 shrink-0 transition-transform group-hover:scale-110" />
                        <span className="hidden md:block">{feature.label}</span>
                    </button>
                )
            })}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-hidden bg-slate-50/50 relative">
            
            {/* CONTENT: FINANCIAL PLANNING */}
            <div className={`absolute inset-0 p-6 transition-opacity duration-700 ${activeFeature.id === 'planning' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <div className="flex flex-col h-full space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-end mb-2">
                        <div className="space-y-2">
                            <h2 className="h-6 w-64 bg-slate-200 rounded animate-pulse"></h2>
                            <div className="h-4 w-40 bg-slate-100 rounded"></div>
                        </div>
                        <div className="h-9 w-32 bg-black rounded-full text-white text-xs flex items-center justify-center font-semibold tracking-wide shadow-md group/live group-hover:bg-blue-600 transition-colors">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2 group-hover/live:scale-150 transition-transform"></div>
                            LIVE SYNC
                        </div>
                    </div>
                    
                    {/* Budget Overview Cards with Interactive Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                        {[
                          { label: 'Total Budget', value: '$12.4M', trend: '+8.2%', color: 'blue', icon: DollarSign },
                          { label: 'Spent', value: '$8.1M', trend: '65%', color: 'slate', icon: Calendar },
                          { label: 'Remaining', value: '$4.3M', trend: '35%', color: 'green', icon: Target }
                        ].map((metric, i) => (
                            <div 
                              key={i} 
                              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-blue-300 hover:scale-[1.02] transition-all duration-300 group/card cursor-pointer"
                              onMouseEnter={() => setHoveredMetric(i)}
                              onMouseLeave={() => setHoveredMetric(null)}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                      metric.color === 'blue' ? 'bg-slate-100 group-hover/card:bg-blue-100' : 
                                      metric.color === 'green' ? 'bg-emerald-100 group-hover/card:bg-emerald-200' : 
                                      'bg-slate-100 group-hover/card:bg-slate-200'
                                    } transition-colors`}>
                                        <metric.icon size={18} className={
                                          metric.color === 'blue' ? 'text-slate-600 group-hover/card:text-blue-600' : 
                                          metric.color === 'green' ? 'text-emerald-600' : 
                                          'text-slate-600'
                                        } />
                                    </div>
                                    <div className={`px-2 py-1 rounded text-xs font-semibold flex items-center space-x-1 ${
                                      metric.color === 'blue' ? 'bg-slate-100 text-slate-700 group-hover/card:bg-blue-100 group-hover/card:text-blue-700' : 
                                      metric.color === 'green' ? 'bg-emerald-100 text-emerald-700' : 
                                      'bg-slate-100 text-slate-700'
                                    } group-hover/card:scale-110 transition-all`}>
                                        {metric.trend.includes('+') ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                                        <span>{metric.trend}</span>
                                    </div>
                                </div>
                                <div className="h-3 w-32 bg-slate-200 rounded mb-2 group-hover/card:bg-blue-200 transition-colors"></div>
                                <div className={`h-8 w-40 bg-slate-300 rounded mb-2 group-hover/card:bg-blue-300 transition-all duration-500 ${
                                  hoveredMetric === i ? 'animate-pulse scale-105' : ''
                                }`}></div>
                                <div className="h-2 w-24 bg-slate-100 rounded"></div>
                            </div>
                        ))}
                    </div>

                    {/* Budget Allocation Chart with Interactive Bars */}
                    <div className="flex-1 bg-white rounded-xl border border-slate-200 p-6 shadow-sm relative overflow-hidden group/chart">
                        <div className="flex items-center justify-between mb-4">
                            <div className="h-4 w-48 bg-slate-200 rounded"></div>
                            <div className="flex space-x-2">
                                <div className="h-6 w-16 bg-slate-100 rounded text-xs flex items-center justify-center text-slate-600">Q1</div>
                                <div className="h-6 w-16 bg-blue-600 rounded text-xs flex items-center justify-center text-white">Q2</div>
                            </div>
                        </div>
                        <div className="flex items-end justify-between space-x-2 h-full">
                            {[
                              { label: 'Sales', value: 65, color: 'blue' },
                              { label: 'Marketing', value: 45, color: 'blue' },
                              { label: 'Ops', value: 80, color: 'blue' },
                              { label: 'R&D', value: 55, color: 'blue' },
                              { label: 'Support', value: 70, color: 'blue' },
                              { label: 'Admin', value: 40, color: 'blue' },
                              { label: 'Legal', value: 30, color: 'blue' },
                              { label: 'IT', value: 60, color: 'blue' },
                              { label: 'HR', value: 50, color: 'blue' },
                              { label: 'Finance', value: 75, color: 'blue' }
                            ].map((bar, i) => (
                                <div 
                                  key={i} 
                                  className="flex-1 flex flex-col items-center group/bar relative"
                                  onMouseEnter={() => setHoveredBar(i)}
                                  onMouseLeave={() => setHoveredBar(null)}
                                >
                                    {/* Bar */}
                                    <div 
                                      className={`w-full bg-black rounded-t-md transition-all duration-500 group-hover/bar:bg-blue-600 group-hover/bar:shadow-lg group-hover/bar:shadow-blue-500/30 relative overflow-hidden ${
                                        hoveredBar === i ? 'scale-110 z-10 bg-blue-600' : ''
                                      }`}
                                      style={{ 
                                        height: `${bar.value}%`,
                                        transitionDelay: `${i * 30}ms`
                                      }}
                                    >
                                        {/* Animated gradient on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-600 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300"></div>
                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/bar:opacity-100 group-hover/bar:animate-[shimmer_1.5s_infinite]"></div>
                                    </div>
                                    {/* Label */}
                                    <div className="mt-2 h-2 w-full bg-slate-100 rounded group-hover/bar:bg-blue-100 transition-colors"></div>
                                    {/* Value tooltip on hover */}
                                    {hoveredBar === i && (
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-20 animate-[fadeIn_0.2s]">
                                            {bar.label}: ${(bar.value * 0.1).toFixed(1)}M
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT: FORECASTING */}
            <div className={`absolute inset-0 p-6 transition-opacity duration-700 ${activeFeature.id === 'forecasting' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <div className="flex flex-col h-full space-y-6">
                     <div className="flex justify-between items-center mb-2">
                        <div className="space-y-2">
                            <div className="h-6 w-72 bg-slate-200 rounded"></div>
                            <div className="h-3 w-48 bg-slate-100 rounded"></div>
                        </div>
                        <div className="h-8 w-8 bg-slate-100 rounded-full hover:bg-blue-100 transition-colors cursor-pointer"></div>
                    </div>
                    
                    {/* Forecast Metrics with Animated Values */}
                    <div className="grid grid-cols-2 gap-4">
                         {[
                           { label: 'Revenue Forecast', value: '$15.2M', change: '+23%', icon: TrendingUp, color: 'blue' },
                           { label: 'Expense Forecast', value: '$9.8M', change: '+5%', icon: DollarSign, color: 'slate' }
                         ].map((metric, i) => (
                            <div 
                              key={i}
                              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm h-36 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group/metric cursor-pointer"
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover/metric:scale-110 transition-transform ${
                                  metric.color === 'blue' ? 'bg-slate-100 group-hover/metric:bg-blue-100' : 'bg-slate-100 group-hover/metric:bg-slate-200'
                                }`}>
                                    <metric.icon size={20} className={metric.color === 'blue' ? 'text-slate-600 group-hover/metric:text-blue-600' : 'text-slate-600'} />
                                </div>
                                <div>
                                    <div className="h-3 w-28 bg-slate-200 rounded mb-2 group-hover/metric:bg-blue-200 transition-colors"></div>
                                    <div className={`h-7 w-36 bg-slate-300 rounded mb-2 group-hover/metric:bg-blue-300 transition-all duration-500 ${
                                      metric.color === 'blue' ? 'group-hover/metric:scale-105' : ''
                                    }`}></div>
                                    <div className="flex items-center space-x-1">
                                        <div className={`h-4 w-16 rounded flex items-center justify-center text-xs font-semibold ${
                                          metric.color === 'blue' ? 'bg-slate-100 text-slate-700 group-hover/metric:bg-blue-100 group-hover/metric:text-blue-700' : 'bg-slate-100 text-slate-700'
                                        } group-hover/metric:scale-110 transition-all`}>
                                            {metric.change}
                                        </div>
                                    </div>
                                </div>
                            </div>
                         ))}
                    </div>

                    {/* Forecast Chart with Animated Line */}
                    <div className="flex-1 bg-white rounded-xl border border-slate-200 p-6 shadow-sm relative overflow-hidden group/chart">
                        <div className="h-4 w-56 bg-slate-200 rounded mb-4"></div>
                        <div className="relative h-full">
                            {/* Forecast line with animated dot */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                                {/* Grid lines */}
                                <defs>
                                    <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" opacity="0.5"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                                
                                {/* Forecast line - Thickens and glows on hover */}
                                <path 
                                    d="M0,150 Q50,130 100,110 T200,90 T300,70 T400,50" 
                                    fill="none" 
                                    stroke="#000000" 
                                    strokeWidth="3"
                                    className="group-hover/chart:stroke-[4] group-hover/chart:stroke-blue-600 group-hover/chart:opacity-100 transition-all duration-500"
                                    style={{ filter: 'drop-shadow(0 0 0px rgba(59, 130, 246, 0))' }}
                                >
                                    <animate attributeName="d" values="M0,150 Q50,130 100,110 T200,90 T300,70 T400,50;M0,150 Q50,135 100,115 T200,95 T300,75 T400,55;M0,150 Q50,130 100,110 T200,90 T300,70 T400,50" dur="6s" repeatCount="indefinite" />
                                </path>
                                
                                {/* Gradient fill - Intensifies on hover */}
                                <path 
                                    d="M0,150 Q50,130 100,110 T200,90 T300,70 T400,50 V200 H0 Z" 
                                    fill="url(#forecastGradient)" 
                                    opacity="0.15"
                                    className="group-hover/chart:opacity-0.25 group-hover/chart:fill-blue-600/20 transition-all duration-500"
                                />
                                <defs>
                                    <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#000000" />
                                        <stop offset="100%" stopColor="#ffffff" />
                                    </linearGradient>
                                </defs>
                                
                                {/* Data points - Glow on hover */}
                                {[100, 200, 300].map((x, i) => {
                                    const y = 150 - (i * 20);
                                    return (
                                        <g key={i} className="group/point">
                                            <circle 
                                                cx={x} 
                                                cy={y} 
                                                r="5" 
                                                fill="#000000" 
                                                className="group-hover/chart:r-[7] group-hover/chart:fill-blue-600 transition-all duration-500"
                                                style={{ transitionDelay: `${i * 100}ms` }}
                                            >
                                                <animate attributeName="r" values="5;6;5" dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" />
                                            </circle>
                                            {/* Glow effect on hover */}
                                            <circle 
                                                cx={x} 
                                                cy={y} 
                                                r="10" 
                                                fill="#3b82f6" 
                                                opacity="0"
                                                className="group-hover/chart:opacity-30 group-hover/chart:r-[15] transition-all duration-500"
                                                style={{ transitionDelay: `${i * 100}ms` }}
                                            />
                                        </g>
                                    );
                                })}
                                
                                {/* Animated scanning dot - Moves faster on hover */}
                                <circle 
                                    cx="0" 
                                    cy="0" 
                                    r="6" 
                                    fill="#000000" 
                                    stroke="#ffffff" 
                                    strokeWidth="2.5"
                                    className="group-hover/chart:r-[8] group-hover/chart:fill-blue-600 group-hover/chart:stroke-[3] transition-all duration-500"
                                >
                                    <animateMotion 
                                        path="M0,150 Q50,130 100,110 T200,90 T300,70 T400,50" 
                                        dur="8s" 
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                {/* Glow trail */}
                                <circle 
                                    cx="0" 
                                    cy="0" 
                                    r="12" 
                                    fill="#3b82f6" 
                                    opacity="0"
                                    className="group-hover/chart:opacity-20 transition-opacity duration-500"
                                >
                                    <animateMotion 
                                        path="M0,150 Q50,130 100,110 T200,90 T300,70 T400,50" 
                                        dur="8s" 
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENT: REPORTING */}
            <div className={`absolute inset-0 p-6 transition-opacity duration-700 ${activeFeature.id === 'reporting' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <div className="flex flex-col h-full space-y-6">
                     <div className="flex items-center justify-between mb-2">
                        <div className="space-y-2">
                            <div className="h-6 w-64 bg-slate-200 rounded"></div>
                            <div className="h-3 w-40 bg-slate-100 rounded"></div>
                        </div>
                        <div className="h-9 w-28 bg-black rounded-md text-white text-xs flex items-center justify-center font-semibold shadow-md hover:bg-blue-600 hover:scale-105 transition-all cursor-pointer">
                            EXPORT
                        </div>
                    </div>

                    {/* Report Cards with Expand on Hover */}
                    <div className="grid grid-cols-2 gap-4 flex-1">
                        {[
                          { title: 'Monthly P&L Report', status: 'Ready', pages: 12, lastUpdated: '2h ago', icon: FileText },
                          { title: 'Budget Variance Analysis', status: 'Generating', pages: 8, lastUpdated: 'In progress', icon: BarChart3 }
                        ].map((report, i) => (
                            <div 
                              key={i}
                              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-blue-300 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group/report cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover/report:scale-110 transition-transform ${
                                      report.status === 'Ready' ? 'bg-slate-100 group-hover/report:bg-blue-100' : 'bg-slate-100 group-hover/report:bg-slate-200'
                                    }`}>
                                        <report.icon size={20} className={report.status === 'Ready' ? 'text-slate-600 group-hover/report:text-blue-600' : 'text-slate-600'} />
                                    </div>
                                    <div className={`px-3 py-1 rounded-md text-xs font-semibold ${
                                      report.status === 'Ready' ? 'bg-slate-100 text-slate-700 group-hover/report:bg-blue-100 group-hover/report:text-blue-700 group-hover/report:scale-110' : 'bg-slate-100 text-slate-600'
                                    } transition-all`}>
                                        {report.status}
                                    </div>
                                </div>
                                <div className="h-5 w-40 bg-slate-200 rounded mb-3 group-hover/report:bg-blue-200 transition-colors"></div>
                                
                                {/* Report preview lines */}
                                <div className="space-y-2 mb-4">
                                    {[1, 2, 3, 4].map((line, j) => (
                                        <div 
                                          key={j} 
                                          className={`h-2 bg-slate-100 rounded transition-all duration-300 ${
                                            j === 0 ? 'w-full' : j === 1 ? 'w-5/6' : j === 2 ? 'w-4/6' : 'w-3/6'
                                          } group-hover/report:bg-blue-100`}
                                          style={{ transitionDelay: `${j * 50}ms` }}
                                        ></div>
                                    ))}
                                </div>
                                
                                {/* Footer info */}
                                <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                                    <div className="h-2 w-20 bg-slate-200 rounded group-hover/report:bg-blue-200 transition-colors"></div>
                                    <div className="h-2 w-16 bg-slate-200 rounded group-hover/report:bg-blue-200 transition-colors"></div>
                                </div>
                                
                                {/* Progress indicator for generating reports */}
                                {report.status === 'Generating' && (
                                    <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-black rounded-full animate-[progress_3s_ease-in-out_infinite] group-hover/report:bg-blue-600 transition-colors" style={{width: '65%'}}>
                                            <div className="h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Report Preview Terminal */}
                    <div className="h-40 bg-slate-900 rounded-xl border border-slate-800 p-4 font-mono text-xs leading-relaxed text-slate-400 overflow-hidden relative shadow-inner group/terminal">
                        <div className="flex space-x-2 mb-3">
                             <div className="w-3 h-3 rounded-full bg-red-500/50 group-hover/terminal:bg-red-500 transition-colors"></div>
                             <div className="w-3 h-3 rounded-full bg-amber-500/50 group-hover/terminal:bg-amber-500 transition-colors"></div>
                             <div className="w-3 h-3 rounded-full bg-emerald-500/50 group-hover/terminal:bg-emerald-500 transition-colors"></div>
                        </div>
                        
                        <div className="space-y-1.5">
                            <p><span className="text-blue-400 group-hover/terminal:text-blue-300 transition-colors">OCULON</span> <span className="text-slate-500">Financial Report</span></p>
                            <p className="h-1"></p>
                            <p><span className="text-slate-500">Period:</span> <span className="text-white group-hover/terminal:text-blue-300 transition-colors">Q1 2025</span></p>
                            <p><span className="text-slate-500">Revenue:</span> <span className="text-emerald-400 group-hover/terminal:text-emerald-300 transition-colors">$12.4M</span> <span className="text-slate-500">(+23%)</span></p>
                            <p><span className="text-slate-500">Expenses:</span> <span className="text-red-400 group-hover/terminal:text-red-300 transition-colors">$8.1M</span> <span className="text-slate-500">(+5%)</span></p>
                            <p><span className="text-slate-500">Net Income:</span> <span className="text-blue-400 group-hover/terminal:text-blue-300 transition-colors">$4.3M</span></p>
                        </div>

                         <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    </div>
                </div>
            </div>

        </div>
      </div>
      
    </div>
  );
};

export default DashboardSimulation;
