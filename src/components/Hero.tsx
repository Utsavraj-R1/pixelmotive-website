'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
            {/* Enhanced 3D Background Animation */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-blue-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>

                {/* Floating particles */}
                <div className="absolute top-20 left-20 w-2 h-2 bg-white/60 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300/80 rounded-full animate-bounce delay-700"></div>
                <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-300/70 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute bottom-20 right-20 w-1 h-1 bg-blue-300/80 rounded-full animate-bounce delay-500"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-8"
                >
                    <Image
                        src="/pixelmotive-logo.png"
                        alt="Pixelmotive Logo"
                        width={240}
                        height={60}
                        className="h-16 w-auto drop-shadow-2xl"
                    />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
                    style={{
                        textShadow: '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.1)',
                        background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #c7d2fe 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    Pixelmotive
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                    Crafting exceptional digital experiences that transform businesses into industry leaders through innovative web solutions and cutting-edge technology.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <motion.button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl transform transition-all duration-300 flex items-center gap-3 group"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 20px 40px rgba(147, 51, 234, 0.4)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Project
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <motion.button
                        onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border-2 border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-3 group"
                        whileHover={{
                            scale: 1.05,
                            borderColor: 'rgba(255, 255, 255, 0.6)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Our Work
                        <Mail size={24} className="group-hover:scale-110 transition-transform" />
                    </motion.button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-white/60 rounded-full mt-2"
                        ></motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}