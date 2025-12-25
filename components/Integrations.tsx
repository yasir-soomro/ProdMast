import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
];

export const Integrations: React.FC = () => {
    return (
        <section className="py-24 bg-[#0f242a] overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-teal-accent/5"></div>
            
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">Empowering Top Companies <br/> with Seamless Integrations</h2>
                <p className="text-teal-100/70 mb-16 max-w-2xl mx-auto">
                    Our platform connects effortlessly with the tools you already use, creating a unified ecosystem for your production line.
                </p>

                <div className="relative h-[400px] flex items-center justify-center">
                    {/* Central Hub */}
                    <div className="absolute w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center z-20">
                        <div className="w-16 h-16 bg-teal-accent rounded-full animate-pulse"></div>
                    </div>

                    {/* Orbiting Logos */}
                    {logos.map((logo, index) => {
                        const angle = (index / logos.length) * 2 * Math.PI;
                        const radius = 160; // Distance from center
                        
                        return (
                            <motion.div
                                key={index}
                                className="absolute w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center p-3"
                                animate={{
                                    x: [Math.cos(angle) * radius, Math.cos(angle + Math.PI * 2) * radius],
                                    y: [Math.sin(angle) * radius, Math.sin(angle + Math.PI * 2) * radius],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: -index * (20 / logos.length) // Stagger start positions
                                }}
                            >
                                <img src={logo} alt="Partner" className="w-full h-full object-contain opacity-80" />
                            </motion.div>
                        );
                    })}

                    {/* Orbit Rings */}
                    <div className="absolute w-[320px] h-[320px] border border-teal-500/20 rounded-full" />
                    <div className="absolute w-[450px] h-[450px] border border-teal-500/10 rounded-full" />
                </div>

                <button className="mt-12 px-8 py-4 bg-teal-accent text-slate-900 rounded-full font-bold text-lg hover:bg-white hover:text-teal-900 transition-colors shadow-lg shadow-teal-accent/20">
                    Work With Us
                </button>
            </div>
        </section>
    );
};