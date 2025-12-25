import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: "39",
        desc: "Essential tools for small workshops.",
        features: ["Up to 10,000 units/mo", "Basic Analytics", "Email Support", "1 User Seat"],
        highlight: false
    },
    {
        name: "Professional",
        price: "79",
        desc: "Advanced features for growing plants.",
        features: ["Up to 100,000 units/mo", "AI Quality Control", "Priority 24/7 Support", "5 User Seats", "Custom Reports"],
        highlight: true
    },
    {
        name: "Enterprise",
        price: "99",
        desc: "Full scale solutions for corporations.",
        features: ["Unlimited units", "Dedicated Account Manager", "API Access", "Unlimited Seats", "On-premise Deployment"],
        highlight: false
    }
];

export const Pricing: React.FC = () => {
    const [annual, setAnnual] = useState(false);

    return (
        <section id="pricing" className="py-24 px-6 dark:bg-slate-900 bg-white relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold dark:text-white text-slate-900 mb-4">Tailored Plans for Your Scale</h2>
                    <p className="dark:text-gray-400 text-gray-600 mb-8">Flexible pricing designed to grow with your manufacturing needs.</p>
                    
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!annual ? 'dark:text-white text-slate-900' : 'text-gray-500'}`}>Monthly</span>
                        <button 
                            onClick={() => setAnnual(!annual)}
                            className="w-14 h-8 bg-slate-300 dark:bg-slate-700 rounded-full p-1 relative transition-colors duration-300 focus:outline-none"
                        >
                            <div className={`w-6 h-6 bg-teal-accent rounded-full shadow-md transform transition-transform duration-300 ${annual ? 'translate-x-6' : ''}`} />
                        </button>
                        <span className={`text-sm font-medium ${annual ? 'dark:text-white text-slate-900' : 'text-gray-500'}`}>Annual <span className="text-teal-accent text-xs ml-1">(Save 20%)</span></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                                plan.highlight 
                                ? 'dark:bg-slate-800/50 bg-white border-teal-accent/50 shadow-[0_0_30px_rgba(0,201,167,0.1)] scale-105 z-10' 
                                : 'dark:bg-slate-900 bg-slate-50 border-gray-200 dark:border-gray-800 hover:border-teal-500/30'
                            }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-accent text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">{plan.name}</h3>
                            <p className="dark:text-gray-400 text-gray-600 text-sm mb-6 h-10">{plan.desc}</p>
                            <div className="flex items-baseline mb-8">
                                <span className="text-4xl font-bold dark:text-white text-slate-900">${annual ? (parseInt(plan.price) * 0.8).toFixed(0) : plan.price}</span>
                                <span className="text-gray-500 ml-2">/month</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center dark:text-gray-300 text-gray-700 text-sm">
                                        <div className="bg-teal-accent/20 rounded-full p-1 mr-3">
                                            <Check className="w-3 h-3 text-teal-accent" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                                plan.highlight 
                                ? 'bg-teal-accent text-slate-900 hover:shadow-lg hover:shadow-teal-accent/20' 
                                : 'dark:bg-slate-800 bg-slate-200 dark:text-white text-slate-900 hover:bg-slate-300 dark:hover:bg-slate-700'
                            }`}>
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};