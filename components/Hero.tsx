import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TextReveal } from './TextReveal';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Define R3F components as any to avoid TS errors with IntrinsicElements
const Mesh = 'mesh' as any;
const TorusKnotGeometry = 'torusKnotGeometry' as any;
const BoxGeometry = 'boxGeometry' as any;
const IcosahedronGeometry = 'icosahedronGeometry' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const DirectionalLight = 'directionalLight' as any;

interface FloatingShapeProps {
    position: [number, number, number];
    color: string;
    speed: number;
    scale: number;
    type: 'torus' | 'cube' | 'sphere';
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ position, color, speed, scale, type }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.x += delta * 0.2 * speed;
        meshRef.current.rotation.y += delta * 0.3 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[-0.2, 0.2]}>
        <Mesh ref={meshRef} position={position} scale={scale}>
            {type === 'torus' && <TorusKnotGeometry args={[0.8, 0.3, 100, 16]} />}
            {type === 'cube' && <BoxGeometry args={[1, 1, 1]} />}
            {type === 'sphere' && <IcosahedronGeometry args={[1, 1]} />}
            <MeshStandardMaterial 
                color={color} 
                roughness={0.1} 
                metalness={0.6}
                transparent
                opacity={0.8}
            />
        </Mesh>
    </Float>
  );
};

const HeroScene = () => {
    return (
        <>
            <AmbientLight intensity={0.5} />
            <DirectionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
            <PointLight position={[-10, -10, -10]} intensity={1} color="#00C9A7" />
            
            <FloatingShape type="torus" position={[4, 0, -2]} color="#00C9A7" speed={0.8} scale={1.5} />
            <FloatingShape type="sphere" position={[-4, 2, -3]} color="#2dd4bf" speed={1.2} scale={0.8} />
            <FloatingShape type="cube" position={[-3, -2, -1]} color="#0F172A" speed={0.5} scale={0.6} />
            <FloatingShape type="sphere" position={[5, -3, -4]} color="#ffffff" speed={0.9} scale={0.4} />
            
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </>
    );
};

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 px-6 min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <HeroScene />
                </Canvas>
            </div>
            
            {/* Gradient Overlays for integration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-accent/10 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
                <div className="mb-12 pointer-events-none">
                    {/* Enable pointer events only on interactive elements */}
                    <div className="pointer-events-auto">
                         <h1 className="text-5xl md:text-7xl font-extrabold dark:text-white text-slate-900 mb-6 tracking-tight leading-tight drop-shadow-lg">
                            <TextReveal text="Efficient and Integrated" className="justify-center" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent to-teal-600 block mt-2">
                                 Manufacturing Services
                            </span>
                        </h1>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <p className="text-lg md:text-xl dark:text-gray-200 text-slate-700 max-w-2xl mx-auto leading-relaxed shadow-black drop-shadow-md">
                                Simplify operations with our efficient, quality-focused services. 
                                From prototype to mass production in record time.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="mt-10 flex justify-center gap-4"
                        >
                             <button className="px-8 py-4 bg-teal-accent text-slate-900 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(0,201,167,0.4)] hover:scale-105 transition-all duration-300">
                                 Get Started Now
                             </button>
                             <button className="px-8 py-4 border border-teal-accent/30 dark:text-teal-accent text-teal-700 rounded-full font-bold text-lg hover:bg-teal-accent/10 transition-all duration-300 dark:bg-slate-900/50 bg-white/50 backdrop-blur-sm">
                                 View Demo
                             </button>
                        </motion.div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce dark:text-white/20 text-slate-900/20 z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
            </div>
        </section>
    );
};