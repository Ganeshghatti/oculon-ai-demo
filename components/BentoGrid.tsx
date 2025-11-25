import React from "react";
import {
  Brain,
  ShieldCheck,
  Bot,
  Zap,
  Command,
  Layers,
  Rocket,
} from "lucide-react";
import "../styles.css";

const BentoGrid: React.FC = () => {
  return (
    <section className="w-full max-w-[90rem] mx-auto px-4 md:px-8 py-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* CARD 1: Agent Memory */}
        <div className="group col-span-1 md:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-[300px]">
          <div className="relative z-10">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <Brain size={20} />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
              Agent Memory
            </h3>
            <p className="text-slate-600 text-sm max-w-sm">
              Learns your CoA, drivers, naming, and policies; reuses context
              everywhere.
            </p>
          </div>

          {/* Chat Bubbles Visualization */}
          <div className="mt-4 space-y-3 flex-1 flex flex-col justify-end">
            {/* First chat bubble */}
            <div className="bg-slate-100 rounded-lg rounded-bl-none p-3 max-w-[80%] group-hover:bg-blue-50 group-hover:border group-hover:border-blue-200 transition-all duration-300">
              <div className="h-3 w-32 bg-slate-300 rounded mb-1 group-hover:bg-blue-200 transition-colors"></div>
              <div className="h-3 w-24 bg-slate-200 rounded group-hover:bg-blue-100 transition-colors"></div>
            </div>

            {/* Second chat bubble (response) */}
            <div className="bg-slate-900 rounded-lg rounded-br-none p-3 max-w-[85%] ml-auto group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-1">
                  <div className="h-2.5 w-20 bg-slate-700 rounded group-hover:bg-blue-300 transition-colors"></div>
                  <div className="h-2.5 w-16 bg-slate-700 rounded font-semibold group-hover:bg-blue-400 group-hover:font-bold transition-all"></div>
                </div>
                <div className="h-2.5 w-28 bg-slate-700 rounded group-hover:bg-blue-300 transition-colors"></div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex space-x-2 mt-2">
              <div className="px-2 py-1 bg-slate-200 rounded text-xs text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-all duration-300">
                #coa_mapping
              </div>
              <div className="px-2 py-1 bg-slate-200 rounded text-xs text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-all duration-300">
                #drivers
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: Model Lint */}
        <div className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col h-[300px]">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-600 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
            <ShieldCheck size={20} />
          </div>
          <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
            Model Lint
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            Detects broken links, circular refs, dimensional drift; one-click
            fixes.
          </p>

          {/* Status Indicators */}
          <div className="flex-1 flex flex-col justify-center space-y-3">
            {/* Error row */}
            <div className="flex items-center justify-between bg-red-50 border border-red-200 rounded-lg p-3 group-hover:border-red-300 group-hover:shadow-md transition-all duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <div className="h-3 w-40 bg-red-200 rounded group-hover:bg-red-300 transition-colors"></div>
              </div>
              <button className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 group-hover:bg-blue-600 group-hover:shadow-md transition-all duration-300">
                Fix
              </button>
            </div>

            {/* Success row */}
            <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg p-3 group-hover:border-emerald-300 group-hover:shadow-md transition-all duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="h-3 w-36 bg-emerald-200 rounded group-hover:bg-emerald-300 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: Oculon MCP */}
        <div className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-600 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
              <Bot size={20} />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
              Oculon MCP
            </h3>
            <p className="text-slate-600 text-sm">
              Typed, auditable actions to ERP/CRM/HR/Data sources.
            </p>
          </div>

          {/* Connected Tools List */}
          <div className="mt-4 space-y-2.5">
            <div className="h-3 w-24 bg-slate-200 rounded mb-3 group-hover:bg-blue-200 transition-colors"></div>
            {[
              { name: "Stripe", status: "active", color: "emerald" },
              { name: "Salesforce", status: "active", color: "emerald" },
              { name: "NetSuite", status: "active", color: "emerald" },
              { name: "Snowflake", status: "active", color: "amber" },
            ].map((tool, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center space-x-2.5">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      tool.color === "emerald"
                        ? "bg-emerald-500"
                        : "bg-amber-500"
                    } group-hover:scale-150 group-hover:ring-2 group-hover:ring-blue-400 transition-all`}
                  ></div>
                  <div className="h-3 w-20 bg-slate-300 rounded group-hover:bg-blue-200 transition-colors"></div>
                </div>
                <div className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded group-hover:bg-blue-100 group-hover:text-blue-700 transition-all">
                  Active
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CARD 4: Watchtower */}
        <div className="group bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-500/30 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500">
              <Zap size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
              Watchtower
            </h3>
            <p className="text-slate-400 text-sm">
              Continuous scans for GM, DSO, churn, burn.
            </p>
          </div>

          {/* Lightning Bolt Visualization */}
          <div className="mt-4 flex-1 flex items-center justify-center relative">
            <svg
              className="w-24 h-24 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                stroke="white"
                strokeWidth="2"
                fill="none"
                className="group-hover:stroke-blue-400 group-hover:fill-blue-400/20 transition-all duration-500"
              />
            </svg>
            {/* Pulse effect on hover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:border-blue-500/50 group-hover:animate-ping transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* CARD 5: Command Palette */}
        <div className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-600 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <Command size={20} />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
              Command Palette
            </h3>
            <p className="text-slate-600 text-sm">
              /forecast, /explain, /scenario with preview.
            </p>
          </div>

          {/* Command Input Field */}
          <div className="mt-4">
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm relative group-hover:bg-slate-800 group-hover:ring-2 group-hover:ring-blue-500/50 transition-all duration-300">
              <div className="flex items-center space-x-2 text-slate-400">
                <span className="text-slate-500">⌘</span>
                <span className="text-slate-500">/</span>
                <span className="text-white group-hover:text-blue-400 transition-colors">
                  reconcile
                </span>
                <span className="text-white group-hover:text-blue-400 transition-colors">
                  Q3
                </span>
                {/* Blinking cursor */}
                <div className="w-0.5 h-4 bg-white animate-pulse group-hover:bg-blue-400 transition-colors"></div>
              </div>
              {/* Command preview on hover */}
              <div className="mt-3 pt-3 border-t border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-2 w-32 bg-slate-700 rounded mb-2 group-hover:bg-blue-600/30 transition-colors"></div>
                <div className="h-2 w-24 bg-slate-700 rounded group-hover:bg-blue-600/30 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 6: Scenario Sandbox */}
        <div className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col justify-between min-h-[220px] col-span-1">
          <div>
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 text-white group-hover:bg-blue-600 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <Layers size={20} />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
              Scenario Sandbox
            </h3>
            <p className="text-slate-600 text-sm">Compare and apply deltas.</p>
          </div>

          {/* Comparison Cards */}
          <div className="mt-4 flex items-center justify-center space-x-4">
            {/* Left card */}
            <div className="flex-1 bg-amber-50 rounded-lg p-4 border border-amber-200 group-hover:border-blue-300 group-hover:shadow-md transition-all duration-300">
              <div className="h-2 w-16 bg-amber-200 rounded mb-3 group-hover:bg-blue-200 transition-colors"></div>
              <div className="h-16 bg-amber-100 rounded mb-2 group-hover:bg-blue-100 transition-colors"></div>
              <div className="h-2 w-12 bg-amber-200 rounded group-hover:bg-blue-200 transition-colors"></div>
            </div>

            {/* Connection with dot */}
            <div className="relative">
              <div className="w-12 h-px bg-slate-300 group-hover:bg-blue-500 group-hover:h-[2px] transition-all duration-300"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-slate-400 rounded-full group-hover:bg-blue-600 group-hover:scale-150 transition-all duration-300"></div>
            </div>

            {/* Right card */}
            <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200 group-hover:border-blue-300 group-hover:shadow-md transition-all duration-300">
              <div className="h-2 w-16 bg-slate-200 rounded mb-3 group-hover:bg-blue-200 transition-colors"></div>
              <div className="h-16 bg-slate-100 rounded mb-2 group-hover:bg-blue-100 transition-colors"></div>
              <div className="h-2 w-12 bg-slate-200 rounded group-hover:bg-blue-200 transition-colors"></div>
            </div>
          </div>
        </div>

        {/* CARD 7: Turbo Apply */}
        <div className="group col-span-1 md:col-span-2 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[200px]">
          <div className="relative z-10 max-w-md">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 text-white shadow-sm group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Rocket size={20} />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
              Turbo Apply
            </h3>
            <p className="text-slate-600 text-sm">
              Auto-execute low-risk steps.
            </p>
          </div>

          {/* Progress Bar Visualization */}
          <div className="mt-8 md:mt-0 flex-1 w-full md:w-auto max-w-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                Draft
              </span>
              <div className="flex-1 mx-4 relative">
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden group-hover:bg-slate-300 transition-colors">
                  <div
                    className="h-full bg-black rounded-full transition-all duration-1000 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/30 relative"
                    style={{ width: "75%" }}
                  >
                    {/* Animated shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
                {/* Progress indicator dot */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full border-2 border-white shadow-md group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-500"
                  style={{ left: "75%", transform: "translate(-50%, -50%)" }}
                >
                  <div className="absolute inset-0 border-2 border-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                </div>
              </div>
              <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                Live
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="h-3 w-24 bg-slate-200 rounded group-hover:bg-blue-200 transition-colors"></div>
              <div className="h-4 w-12 bg-slate-300 rounded font-semibold text-xs flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
