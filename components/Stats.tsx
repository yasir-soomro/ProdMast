import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Calendar, TrendingUp } from 'lucide-react';

const stats = [
    { value: "100+", label: "Partners", icon: Users },
    { value: "1951+", label: "Projects", icon: Briefcase },
    { value: "6+", label: "Years", icon: Calendar },
    { value: "125%", label: "Efficiency Boost", icon: TrendingUp },
];

export const Stats: React.FC = () => {
    return (
        <section className="py-24 dark:bg-slate-50 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                            The Future of <br/>
                            Manufacturing with <br/>
                            Latest Technology
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            We leverage cutting-edge AI and robotics to ensure your production line is not just running, but evolving.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-teal-accent hover:text-slate-900 transition-colors font-semibold">
                                Get Started
                            </button>
                            <button className="px-6 py-3 border border-slate-300 rounded-lg hover:border-slate-900 transition-colors font-semibold">
                                Try Demo
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`p-6 rounded-2xl ${index === 1 || index === 2 ? 'bg-teal-50' : 'bg-white shadow-xl border border-gray-100'}`}
                            >
                                <div className="w-10 h-10 rounded-full bg-teal-accent/10 flex items-center justify-center mb-4">
                                    <stat.icon className="w-5 h-5 text-teal-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};