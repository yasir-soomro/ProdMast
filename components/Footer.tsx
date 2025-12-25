import React from 'react';
import { Hexagon, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="dark:bg-slate-950 bg-slate-900 pt-20 pb-10 border-t dark:border-gray-800 border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Hexagon className="w-8 h-8 text-teal-accent fill-teal-accent/20" />
                            <span className="text-xl font-bold text-white">ProdMast</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Our solutions make production faster, cheaper, and higher quality. 
                            Contact us for a personalized demo of the future.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-teal-accent transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-teal-accent transition-colors">Customers</a></li>
                            <li><a href="#" className="hover:text-teal-accent transition-colors">Newsroom</a></li>
                            <li><a href="#" className="hover:text-teal-accent transition-colors">Events</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Industries</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-teal-accent transition-colors">Precision Metalforming</a></li>
                            <li><a href="#" className="hover:text-teal-accent transition-colors">Industrial Manufacturing</a></li>
                            <li><a href="#" className="hover:text-teal-accent transition-colors">High Tech & Electronics</a></li>
                            <li><a href="#" className="hover:text-teal-accent transition-colors">Aerospace</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Get In Touch</h4>
                        <p className="text-gray-400 text-sm mb-4">hello@prodmast.com</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white hover:bg-teal-accent hover:text-slate-900 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white hover:bg-teal-accent hover:text-slate-900 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white hover:bg-teal-accent hover:text-slate-900 transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2025 ProdMast. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};