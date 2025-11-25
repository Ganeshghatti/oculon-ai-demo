import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  DollarSign,
  TrendingUp,
  Users,
  Package
} from 'lucide-react';

const DEPARTMENTS = [
  { 
    id: 'finance', 
    label: 'Finance', 
    icon: DollarSign,
    description: 'Streamline budgeting, forecasting, and financial planning with AI-powered insights.',
    skeleton: [
      { type: 'chart', height: 60 },
      { type: 'metric', value: '$2.4M', label: 'Revenue' },
      { type: 'metric', value: '23%', label: 'Growth' }
    ]
  },
  { 
    id: 'sales', 
    label: 'Sales', 
    icon: TrendingUp,
    description: 'Track performance, forecast revenue, and optimize your sales pipeline.',
    skeleton: [
      { type: 'pipeline', stages: ['Lead', 'Qualified', 'Proposal', 'Closed'] },
      { type: 'metric', value: '156', label: 'Deals' }
    ]
  },
  { 
    id: 'hr', 
    label: 'HR', 
    icon: Users,
    description: 'Manage workforce planning, compensation, and organizational analytics.',
    skeleton: [
      { type: 'list', items: ['Headcount', 'Attrition', 'Compensation'] },
      { type: 'metric', value: '245', label: 'Employees' }
    ]
  },
  { 
    id: 'supply', 
    label: 'Supply', 
    icon: Package,
    description: 'Optimize inventory, track logistics, and manage supply chain operations.',
    skeleton: [
      { type: 'inventory', items: ['Stock', 'Orders', 'Deliveries'] },
      { type: 'metric', value: '89%', label: 'Fill Rate' }
    ]
  }
];

const DepartmentCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section className="w-full py-20 relative overflow-hidden" ref={containerRef}>
      <div className="w-full max-w-[90rem] mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Made for
          </h2>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative overflow-x-hidden">
          <motion.div
            className="flex gap-6"
            style={{ x }}
          >
            {DEPARTMENTS.map((dept, index) => {
              const Icon = dept.icon;
              
              return (
                <motion.div
                  key={dept.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                >
                  <div className="w-full h-[500px] md:h-[600px] bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl p-8 md:p-12 flex flex-col gap-8 group/card hover:bg-white/90 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-white group-hover/card:bg-blue-600 transition-all duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-black group-hover/card:text-blue-600 transition-colors duration-300">
                        {dept.label}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-slate-600">
                      {dept.description}
                    </p>

                    {/* Skeleton Content */}
                    <div className="flex-1 space-y-6 overflow-hidden">
                      {dept.skeleton.map((item, i) => (
                        <div key={i}>
                          {item.type === 'chart' && (
                            <div className="h-32 bg-slate-100 rounded-xl p-4 group-hover/card:bg-blue-50 transition-colors">
                              <div className="h-4 w-32 bg-slate-200 rounded mb-4 group-hover/card:bg-blue-200 transition-colors"></div>
                              <div className="flex items-end justify-between h-20 space-x-2">
                                {[45, 65, 55, 80, 70, 60].map((h, j) => (
                                  <div 
                                    key={j}
                                    className="flex-1 bg-slate-300 rounded-t group-hover/card:bg-blue-300 transition-colors"
                                    style={{ height: `${h}%` }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.type === 'pipeline' && (
                            <div className="space-y-3">
                              <div className="h-4 w-40 bg-slate-200 rounded mb-4 group-hover/card:bg-blue-200 transition-colors"></div>
                              <div className="flex space-x-2">
                                {item.stages?.map((stage, j) => (
                                  <div 
                                    key={j}
                                    className="flex-1 bg-slate-100 rounded-lg p-4 group-hover/card:bg-blue-50 transition-colors"
                                  >
                                    <div className="h-3 w-16 bg-slate-300 rounded mb-2 group-hover/card:bg-blue-300 transition-colors"></div>
                                    <div className="h-8 w-12 bg-slate-200 rounded group-hover/card:bg-blue-200 transition-colors"></div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.type === 'list' && (
                            <div className="space-y-2">
                              <div className="h-4 w-32 bg-slate-200 rounded mb-3 group-hover/card:bg-blue-200 transition-colors"></div>
                              {item.items?.map((listItem, j) => (
                                <div 
                                  key={j}
                                  className="flex items-center space-x-3 bg-slate-50 p-3 rounded-lg group-hover/card:bg-blue-50/50 transition-colors"
                                >
                                  <div className="w-2 h-2 rounded-full bg-slate-400 group-hover/card:bg-blue-600 transition-colors"></div>
                                  <div className="h-3 w-24 bg-slate-300 rounded group-hover/card:bg-blue-300 transition-colors"></div>
                                </div>
                              ))}
                            </div>
                          )}

                          {item.type === 'inventory' && (
                            <div className="grid grid-cols-3 gap-4">
                              {item.items?.map((invItem, j) => (
                                <div 
                                  key={j}
                                  className="bg-slate-100 rounded-lg p-4 group-hover/card:bg-blue-50 transition-colors"
                                >
                                  <div className="h-3 w-16 bg-slate-300 rounded mb-3 group-hover/card:bg-blue-300 transition-colors"></div>
                                  <div className="h-6 w-20 bg-slate-200 rounded group-hover/card:bg-blue-200 transition-colors"></div>
                                </div>
                              ))}
                            </div>
                          )}

                          {item.type === 'metric' && (
                            <div className="flex items-center space-x-6">
                              <div className="bg-slate-100 rounded-xl p-6 group-hover/card:bg-blue-50 transition-colors">
                                <div className="h-4 w-20 bg-slate-300 rounded mb-2 group-hover/card:bg-blue-300 transition-colors"></div>
                                <div className="h-10 w-32 bg-slate-400 rounded group-hover/card:bg-blue-400 transition-colors"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentCards;
