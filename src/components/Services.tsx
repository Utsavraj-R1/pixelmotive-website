'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Globe, BarChart, Shield } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Code,
            title: 'Custom Website Development',
            description: 'Full-stack web applications built with modern frameworks, optimized for performance and scalability.',
            features: ['React/Next.js', 'Node.js/Express', 'Database Design', 'API Integration']
        },
        {
            icon: Palette,
            title: 'UI/UX Design Excellence',
            description: 'Intuitive, beautiful interfaces that enhance user experience and drive conversions.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
        },
        {
            icon: Zap,
            title: 'High-Conversion Landing Pages',
            description: 'Optimized landing pages designed specifically to turn visitors into customers.',
            features: ['A/B Testing', 'Conversion Optimization', 'Mobile-First', 'Fast Loading']
        },
        {
            icon: Globe,
            title: 'E-Commerce Solutions',
            description: 'Complete online stores with payment integration, inventory management, and analytics.',
            features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics']
        },
        {
            icon: BarChart,
            title: 'SEO & Performance Optimization',
            description: 'Technical SEO, performance improvements, and analytics setup for maximum visibility.',
            features: ['Technical SEO', 'Core Web Vitals', 'Google Analytics', 'Speed Optimization']
        },
        {
            icon: Shield,
            title: 'Maintenance & Security',
            description: 'Ongoing support, security updates, and performance monitoring for your website.',
            features: ['Security Audits', 'Regular Updates', 'Backup Systems', '24/7 Monitoring']
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Services
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Comprehensive web development solutions to bring your digital vision to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}