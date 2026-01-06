'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-6"
                    >
                        <Image
                            src="/pixelmotive-logo.png"
                            alt="Pixelmotive Logo"
                            width={160}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        About Pixelmotive
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        As a co-founded web development agency, we specialize in creating high-performance, conversion-focused websites that drive business growth through the perfect blend of technical expertise and creative vision.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            title: 'Custom Websites',
                            description: 'Tailored solutions built from scratch to meet your unique business needs.'
                        },
                        {
                            title: 'Performance Focused',
                            description: 'Optimized for speed, SEO, and user experience to maximize conversions.'
                        },
                        {
                            title: 'Clean Design',
                            description: 'Modern, professional designs that reflect your brand and engage your audience.'
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Founders Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16">
                        Meet Our Founders
                    </h3>

                    {/* Utsav Sharma - Primary Founder */}
                    <div className="max-w-7xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: -20, rotateX: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.2,
                                type: "spring",
                                stiffness: 120,
                                damping: 20
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.08,
                                rotateY: 8,
                                rotateX: -5,
                                transition: { duration: 0.4, type: "spring", stiffness: 200 }
                            }}
                            className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 p-12 md:p-16 rounded-3xl shadow-2xl transform-gpu border border-blue-200/50 dark:border-blue-800/50"
                            style={{
                                transformStyle: 'preserve-3d',
                                perspective: '1200px',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            {/* Enhanced 3D Shadow Effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-indigo-500/20 to-cyan-400/30 rounded-3xl transform translate-x-3 translate-y-3 -z-10 blur-sm"></div>
                            <div className="absolute inset-0 bg-gradient-to-tl from-blue-300/20 to-transparent rounded-3xl transform -translate-x-1 -translate-y-1 z-10"></div>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.3, rotateY: -45, rotateX: 15 }}
                                    whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 0.5,
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 25
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.15,
                                        rotateY: -15,
                                        rotateX: -10,
                                        transition: { duration: 0.4, type: "spring", stiffness: 250 }
                                    }}
                                    className="relative"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        filter: 'drop-shadow(0 20px 25px rgba(0, 0, 0, 0.15))'
                                    }}
                                >
                                    <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl transform-gpu"
                                        style={{
                                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                                        }}>
                                        <Image
                                            src="/founder-utsav.jpg"
                                            alt="Utsav Sharma - Founder"
                                            fill
                                            className="object-cover"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    parent.innerHTML = '<div class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 text-2xl font-bold">Utsav Sharma</div>';
                                                }
                                            }}
                                        />
                                        {/* Enhanced 3D Glow Effects */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/40 via-indigo-500/30 to-cyan-400/40 opacity-0 hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-white/20 to-transparent opacity-0 hover:opacity-60 transition-all duration-500"></div>
                                    </div>
                                    {/* Supreme Founder Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30, scale: 0.5 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{
                                            duration: 1,
                                            delay: 1,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            scale: 1.1,
                                            rotateZ: 5,
                                            transition: { duration: 0.3 }
                                        }}
                                        className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-cyan-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-2xl transform-gpu border-4 border-white dark:border-gray-800"
                                        style={{
                                            transform: 'translateZ(30px)',
                                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                                        }}
                                    >
                                        Founder
                                    </motion.div>
                                </motion.div>

                                <div className="text-center md:text-left max-w-3xl">
                                    <motion.h4
                                        initial={{ opacity: 0, x: -50, y: 20 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
                                        viewport={{ once: true }}
                                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4"
                                        style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                                    >
                                        Utsav Sharma
                                    </motion.h4>
                                    <motion.p
                                        initial={{ opacity: 0, x: -50, y: 20 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
                                        viewport={{ once: true }}
                                        className="text-2xl text-blue-600 dark:text-blue-400 font-bold mb-8"
                                        style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}
                                    >
                                        Founder & Lead Developer
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0, x: -50, y: 20 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.8, delay: 1.1, type: "spring", stiffness: 100 }}
                                        viewport={{ once: true }}
                                        className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium"
                                    >
                                        Visionary leader with over 5 years of experience in crafting digital solutions that transform businesses. Passionate about clean code, innovative design, and delivering exceptional user experiences that drive measurable results.
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0, x: -50, y: 20 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.8, delay: 1.3, type: "spring", stiffness: 100 }}
                                        viewport={{ once: true }}
                                        className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                                    >
                                        When not architecting the next breakthrough project, you'll find Utsav exploring cutting-edge technologies, mentoring aspiring developers, or pushing the boundaries of what's possible in web development.
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Shahbaj Ekhlakh - Co-Founder */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.85 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                            type: "spring",
                            stiffness: 70
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.02,
                            y: -3,
                            transition: { duration: 0.3 }
                        }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform-gpu"
                            style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)' }}>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className="relative w-40 h-40 rounded-full overflow-hidden border-6 border-gray-300 dark:border-gray-600 shadow-md transform-gpu"
                                    style={{ boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.1)' }}
                                >
                                    <Image
                                        src="/founder-shahbaj.jpg"
                                        alt="Shahbaj Ekhlakh - Co-Founder"
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.innerHTML = '<div class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 text-sm font-semibold">Shahbaj</div>';
                                            }
                                        }}
                                    />
                                </motion.div>

                                <div className="text-center md:text-left flex-1">
                                    <motion.h4
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 1 }}
                                        viewport={{ once: true }}
                                        className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                                    >
                                        Shahbaj Ekhlakh
                                    </motion.h4>
                                    <motion.p
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 1.2 }}
                                        viewport={{ once: true }}
                                        className="text-2xl text-purple-600 dark:text-purple-400 font-semibold mb-3"
                                    >
                                        Co-Founder & Creative Director
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 1.4 }}
                                        viewport={{ once: true }}
                                        className="text-gray-600 dark:text-gray-300 leading-relaxed"
                                    >
                                        Creative visionary specializing in user experience design and brand strategy, bringing artistic excellence to every project.
                                    </motion.p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}