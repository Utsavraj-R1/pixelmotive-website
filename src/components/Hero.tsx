'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* BACKGROUND OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90 z-0 pointer-events-none" />

            {/* SOFT COLOR BLOBS */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-blue-500/25 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-2000" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* LOGO BADGE */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-10"
                ><div className="relative z-30 w-24 h-24 flex items-center justify-center">
                        <Image
                            src="/pixelmotive-logo.png"
                            alt="Pixelmotive Logo"
                            width={80}
                            height={80}
                            priority
                            className="object-contain drop-shadow-[0_0_14px_rgba(168,85,247,0.45)]"
                        />
                    </div>

                </motion.div>


                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-br from-white to-indigo-200 bg-clip-text text-transparent"
                >
                    Pixelmotive
                </motion.h1>

                {/* SUBTITLE */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-lg md:text-2xl text-gray-200 mb-14 max-w-3xl mx-auto leading-relaxed"
                >
                    Crafting exceptional digital experiences that transform businesses into
                    industry leaders through innovative web solutions and cutting-edge technology.
                </motion.p>

                {/* CTA BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <motion.button
                        onClick={() =>
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-10 py-5 rounded-xl font-semibold flex items-center gap-3 shadow-xl"
                    >
                        Start Your Project
                        <ArrowRight size={22} />
                    </motion.button>

                    <motion.button
                        onClick={() =>
                            document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-white/40 text-white px-10 py-5 rounded-xl font-semibold flex items-center gap-3 backdrop-blur-sm"
                    >
                        View Our Work
                        <Mail size={22} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
