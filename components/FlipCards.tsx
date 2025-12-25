import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, PenTool, ShieldCheck, Layers, Box, BarChart3, ArrowRight } from 'lucide-react';

const services = [
    { icon: <Activity className="w-8 h-8" />, title: "Production & Assembly", desc: "High-capacity automated assembly lines ensuring rapid throughput.", detail: "Our assembly lines use AI-driven robotics to handle up to 50,000 units per day with 99.9% precision." },
    { icon: <PenTool className="w-8 h-8" />, title: "Custom Manufacturing", desc: "Tailored product creation and design for unique requirements.", detail: "Work with our expert engineers to prototype and refine your custom parts within 48 hours." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Quality Control", desc: "AI-driven defect detection systems for zero errors.", detail: "Computer vision systems inspect every angle of every product in real-time." },
    { icon: <Layers className="w-8 h-8" />, title: "Tech & Innovation", desc: "Latest manufacturing technologies and IoT integration.", detail: "Stay ahead with our constantly upgraded tech stack including 3D printing and IoT sensors." },
    { icon: <Box className="w-8 h-8" />, title: "Packaging & Logistics", desc: "Integrated global shipping solutions.", detail: "End-to-end fulfillment services that get your product to customers faster and cheaper." },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Market Research", desc: "Data-driven strategic consulting.", detail: "Leverage our market insights to optimize your product roadmap before production begins." },
];

export const FlipCards: React.FC = () => {
    return (
        <section id="services" className="py-24 px-6 dark:bg-slate-900 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold dark:text-white text-slate-900 mb-4">Our Capabilities</h2>
                    <p className="dark:text-gray-400 text-slate-600">Click on a card to discover more details.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <FlipCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FlipCard = ({ service, index }: { service: any; index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="perspective-1000 h-[320px] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                className="relative w-full h-full transition-all duration-500 transform-style-3d"
            >
                {/* Front Side */}
                <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl p-8 flex flex-col justify-between glass-card shadow-xl dark:bg-slate-800/50 bg-white ${isHovered && !isFlipped ? 'border-teal-accent' : 'border-transparent dark:border-white/10'}`}>
                    <div>
                        <div className="w-14 h-14 rounded-xl bg-teal-accent/10 flex items-center justify-center text-teal-accent mb-6">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-3">{service.title}</h3>
                        <p className="dark:text-gray-400 text-slate-600 leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="flex justify-end">
                        <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-teal-accent">
                             <ArrowRight size={20} />
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-8 glass-card rotate-y-180 bg-teal-accent dark:bg-teal-900 border border-teal-500 flex flex-col items-center justify-center text-center shadow-xl">
                    <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4">{service.title}</h3>
                    <p className="dark:text-teal-100 text-slate-800 leading-relaxed mb-6">
                        {service.detail}
                    </p>
                    <button className="px-6 py-2 bg-white dark:bg-slate-900 text-teal-accent font-bold rounded-full text-sm">
                        Learn More
                    </button>
                </div>
            </motion.div>
        </div>
    );
};