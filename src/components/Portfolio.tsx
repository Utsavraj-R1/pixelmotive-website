'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Portfolio() {
    const projects = [
        {
            title: 'Housing.com - Real Estate Platform',
            description: 'Comprehensive real estate platform connecting property buyers, sellers, and renters across India. Features advanced search, property listings, and user-friendly interface.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
            image: '/housing-demo.mp4',
            link: 'https://housing.com/'
        },
        {
            title: 'PlayCanvas - Game Development Platform',
            description: 'Web-based game development platform enabling creators to build and publish 3D games directly in the browser. Features real-time collaboration and powerful 3D engine.',
            tech: ['JavaScript', 'WebGL', 'Three.js', 'Node.js', 'WebRTC'],
            image: '/playcanvas-demo.mp4',
            link: 'https://playcanvas.com/'
        },
        {
            title: 'Athenahealth - Medical Practice Management',
            description: 'Cloud-based healthcare platform streamlining medical practice operations, patient management, and billing for healthcare providers nationwide.',
            tech: ['React', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
            image: '/athenahealth-demo.mp4',
            link: 'https://www.athenahealth.com/'
        },
        {
            title: 'Cult.fit - Fitness & Wellness Platform',
            description: 'Comprehensive fitness platform offering online workouts, nutrition guidance, and wellness programs. Features personalized training plans and community engagement.',
            tech: ['React Native', 'Node.js', 'MongoDB', 'Stripe', 'Firebase'],
            image: '/cultfit-demo.mp4',
            link: 'https://www.cult.fit/'
        },
        {
            title: 'Metapic - Marketing Analytics Platform',
            description: 'Advanced marketing analytics platform providing deep insights into campaign performance, audience behavior, and ROI optimization for digital marketers.',
            tech: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'Google Analytics API'],
            image: '/metapic-demo.mp4',
            link: 'https://metapic.com/'
        },
        {
            title: 'the palm - very popular restaurant',
            description: 'Advanced marketing analytics platform providing deep insights into campaign performance, audience behavior, and ROI optimization for digital marketers.',
            tech: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'Google Analytics API'],
            image: '/thepalm-demo.mp4',
            link: 'https://www.thepalm.com/'
        }
    ];

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
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Some Cool Websites I&apos;ve Built
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Showcasing recent projects that demonstrate my expertise in web development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                            onClick={() => window.open(project.link, '_blank')}
                        >
                            <div className="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                {project.image.endsWith('.mp4') ? (
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            // Fallback to placeholder if video fails to load
                                            const target = e.target as HTMLVideoElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.innerHTML = '<div class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">Project Video</div>';
                                            }
                                        }}
                                    >
                                        <source src={project.image} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        width={400}
                                        height={225}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            // Fallback to placeholder if image/GIF fails to load
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent) {
                                                parent.innerHTML = '<div class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">Project Preview</div>';
                                            }
                                        }}
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                                    View Live Site →
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}