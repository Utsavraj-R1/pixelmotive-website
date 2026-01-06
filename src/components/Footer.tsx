'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/pixelmotive-logo.png"
                                alt="Pixelmotive Logo"
                                width={180}
                                height={45}
                                className="h-12 w-auto"
                            />
                        </div>
                        <p className="text-gray-400 mb-4">
                            Crafting exceptional digital experiences for modern businesses.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/pixlemotive"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="mailto:pixlemotive@gmail.com"
                                className="text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Website Development</li>
                            <li>UI/UX Design</li>
                            <li>Landing Pages</li>
                            <li>Business Websites</li>
                            <li>Website Optimization</li>
                            <li>Maintenance & Support</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <p className="text-gray-400 mb-2">Email: pixlemotive@gmail.com</p>
                        <p className="text-gray-400">
                            Instagram:
                            <a
                                href="https://www.instagram.com/pixlemotive"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline transition-colors"
                            >
                                @pixlemotive
                            </a>
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
                >
                    <p>&copy; 2024 Pixelmotive. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}