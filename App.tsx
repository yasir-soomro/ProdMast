import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { Integrations } from './components/Integrations';
import { Stats } from './components/Stats';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';
import { AIStudio } from './components/AIStudio';
import { FlipCards } from './components/FlipCards';
import { Welcome } from './components/Welcome';
import { Auth } from './components/Auth';

const MainLayout: React.FC = () => {
    return (
        <div className="dark:bg-slate-900 bg-slate-50 min-h-screen dark:text-white text-slate-900 selection:bg-teal-accent selection:text-slate-900 transition-colors duration-300">
            <Navbar />
            <main>
                <Hero />
                <FlipCards />
                <AIStudio />
                <Pricing />
                
                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-br from-teal-900 to-slate-900 text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">From Idea to Production in Days</h2>
                        <p className="text-xl text-teal-100 mb-10">Accelerate your production with our technology. Reduce downtime and optimize costs.</p>
                        <button className="px-10 py-4 bg-teal-accent text-slate-900 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,201,167,0.5)]">
                            Work With Us
                        </button>
                    </div>
                </section>

                <Integrations />
                <Stats />
                <Dashboard />
            </main>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/app" element={<MainLayout />} />
        </Routes>
    </Router>
  );
};

export default App;