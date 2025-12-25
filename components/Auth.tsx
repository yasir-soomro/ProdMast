import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Hexagon, Mail, Lock, User, ArrowLeft } from 'lucide-react';

export const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
             {/* Dynamic Background */}
             <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-teal-accent/10 rounded-full blur-[100px] animate-float" />
             <div className="absolute -bottom-1/2 -right-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md z-10"
            >
                <button 
                    onClick={() => navigate('/app')} 
                    className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
                </button>

                <div className="glass-card p-8 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/5 border border-white/10">
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <Hexagon className="w-12 h-12 text-teal-accent fill-teal-accent/20" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                        <p className="text-gray-400 text-sm">Enter your credentials to access the dashboard.</p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('/app'); }}>
                        {!isLogin && (
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input 
                                    type="text" 
                                    placeholder="Full Name"
                                    className="w-full bg-slate-800/50 border border-gray-700 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-teal-accent focus:bg-slate-800 transition-all"
                                />
                            </div>
                        )}
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input 
                                type="email" 
                                placeholder="Email Address"
                                className="w-full bg-slate-800/50 border border-gray-700 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-teal-accent focus:bg-slate-800 transition-all"
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input 
                                type="password" 
                                placeholder="Password"
                                className="w-full bg-slate-800/50 border border-gray-700 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-teal-accent focus:bg-slate-800 transition-all"
                            />
                        </div>

                        <button className="w-full py-3 bg-gradient-to-r from-teal-500 to-teal-accent text-slate-900 font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,201,167,0.4)] transform hover:scale-[1.02] transition-all">
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                            <button 
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-teal-accent hover:underline font-medium"
                            >
                                {isLogin ? "Sign Up" : "Sign In"}
                            </button>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};