'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -15, rotateX: 10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.1,
                            type: "spring",
                            stiffness: 120,
                            damping: 20
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.05,
                            rotateY: 5,
                            rotateX: -3,
                            transition: { duration: 0.3, type: "spring", stiffness: 200 }
                        }}
                        className="flex justify-center mb-8"
                        style={{
                            transformStyle: 'preserve-3d',
                            perspective: '1000px'
                        }}
                    >
                        <div className="relative">
                            {/* 3D Shadow Effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-lg transform translate-x-2 translate-y-2 -z-10 blur-sm"></div>
                            <div className="absolute inset-0 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-lg transform -translate-x-1 -translate-y-1 z-10"></div>

                            <Image
                                src="/pixelmotive-logo.png"
                                alt="Pixelmotive Logo"
                                width={240}
                                height={60}
                                className="h-16 w-auto relative z-20 drop-shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))'
                                }}
                            />
                        </div>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Contact Us
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Ready to start your project? Get in touch and let&apos;s create something amazing together.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
                >
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="relative">
                            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone (optional)"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <p className="mt-4 text-green-600 dark:text-green-400 text-center">
                            Message sent successfully! We&apos;ll get back to you soon.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="mt-4 text-red-600 dark:text-red-400 text-center">
                            Failed to send message. Please try again or contact us directly.
                        </p>
                    )}
                </motion.form>
            </div>
        </section>
    );
}