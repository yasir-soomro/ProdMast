import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const data = [
  { name: 'Mon', uv: 4000, pv: 2400 },
  { name: 'Tue', uv: 3000, pv: 1398 },
  { name: 'Wed', uv: 2000, pv: 9800 },
  { name: 'Thu', uv: 2780, pv: 3908 },
  { name: 'Fri', uv: 1890, pv: 4800 },
  { name: 'Sat', uv: 2390, pv: 3800 },
  { name: 'Sun', uv: 3490, pv: 4300 },
];

export const Dashboard: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
                
                {/* Mockup */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 bg-slate-800 rounded-3xl p-6 border border-gray-700 shadow-2xl relative"
                >
                    {/* Header of dashboard */}
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-white font-bold">Production Yield</h4>
                            <p className="text-xs text-gray-400">Real-time analysis</p>
                        </div>
                        <div className="px-3 py-1 bg-teal-accent/20 text-teal-accent rounded-full text-xs font-bold">
                            +12.5%
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00C9A7" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#00C9A7" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip 
                                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }} 
                                />
                                <Area type="monotone" dataKey="uv" stroke="#00C9A7" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Floating Element */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -right-6 top-1/2 bg-white p-4 rounded-xl shadow-xl hidden md:block"
                    >
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-bold">AI</span>
                            </div>
                            <div>
                                <p className="text-slate-900 font-bold text-sm">Optimization</p>
                                <p className="text-slate-500 text-xs">Complete</p>
                            </div>
                         </div>
                    </motion.div>
                </motion.div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-snug">
                        Key Benefits of Our <br />
                        System for Your <br />
                        Business Efficiency
                    </h2>

                    <div className="space-y-8">
                        {[
                            { title: "Boosting Quality with Tech", desc: "Automated inspections ensure zero-defect production." },
                            { title: "Optimization Production Process", desc: "Streamline workflows and reduce bottlenecks instantly." },
                            { title: "AI-Driven Production", desc: "Predictive maintenance and demand forecasting." }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex gap-4"
                            >
                                <div className="mt-1">
                                    <CheckCircle2 className="text-teal-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                    <p className="text-gray-400 mt-1">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};