import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, Sun, Moon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        
        // Init theme
        if (document.documentElement.classList.contains('dark')) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    };

    const navLinks = [
        { name: 'Home', action: () => { navigate('/app'); setTimeout(() => window.scrollTo(0,0), 100); } },
        { name: 'Services', action: () => { navigate('/app'); setTimeout(() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'}), 100); } },
        { name: 'AI Studio', action: () => { navigate('/app'); setTimeout(() => document.getElementById('ai-studio')?.scrollIntoView({behavior:'smooth'}), 100); } },
        { name: 'Pricing', action: () => { navigate('/app'); setTimeout(() => document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'}), 100); } },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                
                {/* Left Side: Logo & Links */}
                <div className="flex items-center gap-12">
                    <div onClick={() => navigate('/app')} className="flex items-center gap-2 group cursor-pointer">
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <Hexagon className="w-8 h-8 text-teal-accent fill-teal-accent/20 transition-transform group-hover:rotate-90 duration-500" />
                            <div className="absolute w-2 h-2 dark:bg-white bg-slate-900 rounded-full animate-pulse" />
                        </div>
                        <span className="text-xl font-bold tracking-tight dark:text-white text-slate-900">ProdMast</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button 
                                key={link.name} 
                                onClick={link.action}
                                className="text-sm font-medium dark:text-gray-300 text-slate-600 hover:text-teal-accent dark:hover:text-teal-accent transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-accent transition-all group-hover:w-full" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side: CTA & Theme */}
                <div className="hidden md:flex items-center gap-4">
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-full dark:bg-slate-800 bg-slate-200 text-slate-600 dark:text-gray-300 hover:bg-teal-accent hover:text-white transition-colors"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button 
                        onClick={() => navigate('/login')}
                        className="px-6 py-2.5 rounded-full bg-teal-accent text-slate-900 font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,201,167,0.4)] hover:scale-105 transition-all duration-300"
                    >
                        Sign In
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden dark:text-white text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full dark:bg-slate-900/95 bg-white/95 backdrop-blur-xl border-b dark:border-white/10 border-slate-200 p-6 flex flex-col gap-6 md:hidden animate-fade-in">
                    {navLinks.map((link) => (
                        <button 
                            key={link.name} 
                            onClick={() => { link.action(); setMobileMenuOpen(false); }}
                            className="text-lg font-medium dark:text-gray-200 text-slate-800 hover:text-teal-accent text-left"
                        >
                            {link.name}
                        </button>
                    ))}
                     <div className="flex justify-between items-center mt-4">
                        <span className="dark:text-gray-300 text-slate-600">Theme</span>
                        <button 
                            onClick={toggleTheme}
                            className="p-2 rounded-full dark:bg-slate-800 bg-slate-200"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                    <button 
                        onClick={() => { navigate('/login'); setMobileMenuOpen(false); }}
                        className="w-full py-3 rounded-full bg-teal-accent text-slate-900 font-bold"
                    >
                        Sign In
                    </button>
                </div>
            )}
        </nav>
    );
};