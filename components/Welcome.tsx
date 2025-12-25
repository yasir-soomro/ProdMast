import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

export const Welcome: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center overflow-hidden relative">
            
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950"></div>
            
            {/* Floating 3D Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-teal-accent/5 rounded-lg backdrop-blur-sm border border-teal-accent/10"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -1000],
                            rotate: [0, 360],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="z-10 text-center px-6">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center mb-8"
                >
                    <Hexagon className="w-24 h-24 text-teal-accent fill-teal-accent/10 animate-spin-slow" />
                </motion.div>

                <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-4"
                >
                    PROD<span className="text-teal-accent">MAST</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-xl text-teal-200/60 tracking-[0.5em] uppercase mb-12"
                >
                    Manufacturing Intelligence
                </motion.p>

                <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/app')}
                    className="px-12 py-4 bg-transparent border border-teal-accent text-teal-accent rounded-full font-bold text-lg hover:bg-teal-accent hover:text-slate-900 transition-all duration-300 shadow-[0_0_20px_rgba(0,201,167,0.2)]"
                >
                    ENTER EXPERIENCE
                </motion.button>
            </div>

            {/* Marquee Footer */}
            <div className="absolute bottom-10 w-full overflow-hidden whitespace-nowrap border-t border-white/5 py-4 bg-black/20 backdrop-blur-md">
                <div className="animate-marquee inline-block">
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">AI-DRIVEN</span>
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">INDUSTRY 4.0</span>
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">AUTOMATION</span>
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">ROBOTICS</span>
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">SCALE</span>
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">EFFICIENCY</span>
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">AI-DRIVEN</span>
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">INDUSTRY 4.0</span>
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">AUTOMATION</span>
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">ROBOTICS</span>
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">SCALE</span>
                    <span className="text-teal-900/50 text-4xl font-bold mx-8">EFFICIENCY</span>
                </div>
            </div>
        </div>
    );
};