'use client';

import { motion } from 'framer-motion';
import { Users, Settings, Code2, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
    const reasons = [
        {
            icon: Users,
            title: 'One-to-One Communication',
            description: 'Direct collaboration with the developer ensures clear understanding and faster delivery.'
        },
        {
            icon: Settings,
            title: 'Modern Tech Stack',
            description: 'Using the latest technologies and frameworks for robust, scalable solutions.'
        },
        {
            icon: Code2,
            title: 'Clean & Secure Code',
            description: 'Well-structured, maintainable code following industry best practices and security standards.'
        },
        {
            icon: TrendingUp,
            title: 'Focus on Business Growth',
            description: 'Every project is designed with conversion optimization and business objectives in mind.'
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
                        Why Choose Us
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Reasons why businesses trust Pixelmotive for their web development needs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-shadow"
                        >
                            <reason.icon className="w-12 h-12 text-purple-600 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}