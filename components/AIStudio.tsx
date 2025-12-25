import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, Wand2, Image as ImageIcon, Loader2 } from 'lucide-react';
import { generateEditedImage } from '../services/geminiService';

export const AIStudio: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [prompt, setPrompt] = useState('');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
                setGeneratedImage(null);
                setError(null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleGenerate = async () => {
        if (!selectedImage || !prompt) return;

        setLoading(true);
        setError(null);
        setGeneratedImage(null);

        try {
            const result = await generateEditedImage(selectedImage, prompt);
            setGeneratedImage(result);
        } catch (err: any) {
            setError(err.message || "Failed to generate image. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="ai-studio" className="py-24 px-6 relative bg-slate-950 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-teal-accent text-sm font-bold uppercase tracking-wider">Powered by Gemini 2.5 Flash</span>
                    <h2 className="text-4xl font-bold text-white mt-2 mb-4">AI Design Studio</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Rapidly prototype and iterate. Upload your product sketch or photo and use text prompts to visualize variations instantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Controls */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-8 rounded-3xl"
                    >
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-300 mb-4">1. Upload Source Image</label>
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className="border-2 border-dashed border-gray-700 rounded-2xl h-48 flex flex-col items-center justify-center cursor-pointer hover:border-teal-accent hover:bg-white/5 transition-all group"
                            >
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    onChange={handleFileChange} 
                                    accept="image/*" 
                                    className="hidden" 
                                />
                                {selectedImage ? (
                                    <img src={selectedImage} alt="Source" className="h-full w-full object-contain rounded-xl p-2" />
                                ) : (
                                    <>
                                        <Upload className="w-10 h-10 text-gray-500 group-hover:text-teal-accent mb-3 transition-colors" />
                                        <span className="text-gray-500 group-hover:text-gray-300 text-sm">Click to upload prototype</span>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-300 mb-4">2. Describe Changes</label>
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="E.g., Change the casing color to matte black, add a digital display, make it look futuristic..."
                                className="w-full bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-teal-accent h-32 resize-none"
                            />
                        </div>

                        <button
                            onClick={handleGenerate}
                            disabled={loading || !selectedImage || !prompt}
                            className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg transition-all ${
                                loading || !selectedImage || !prompt 
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-teal-500 to-teal-accent text-slate-900 hover:shadow-[0_0_30px_rgba(0,201,167,0.4)] hover:scale-[1.02]'
                            }`}
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <Wand2 />}
                            {loading ? 'Generating...' : 'Generate Variation'}
                        </button>

                        {error && (
                            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                {error}
                            </div>
                        )}
                    </motion.div>

                    {/* Result Preview */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative h-full min-h-[500px] bg-slate-900 rounded-3xl border border-gray-800 flex items-center justify-center overflow-hidden"
                    >
                        {generatedImage ? (
                            <div className="relative w-full h-full p-4 group">
                                <img src={generatedImage} alt="Generated" className="w-full h-full object-contain rounded-xl shadow-2xl" />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <a href={generatedImage} download="prodmast_design.png" className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold">Download</a>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center p-8">
                                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Sparkles className="w-10 h-10 text-gray-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-300 mb-2">AI Output Area</h3>
                                <p className="text-gray-500">Your generated designs will appear here.</p>
                            </div>
                        )}

                        {/* Decoration */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-accent/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};