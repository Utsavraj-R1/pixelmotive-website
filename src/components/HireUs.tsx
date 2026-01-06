'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HireUs() {
    return (
        <section className="py-20 bg-purple-600">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss your project and create a website that drives results for your business.
                    </p>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
                    >
                        Get Started <ArrowRight size={24} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}