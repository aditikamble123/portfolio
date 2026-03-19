'use client';

import { motion } from 'framer-motion';

const skills = [
    { label: 'SQL & Python', category: 'Analytics' },
    { label: 'Power BI & Tableau', category: 'Visualization' },
    { label: 'Machine Learning', category: 'Applied ML' },
    { label: 'ETL Pipelines', category: 'Data Engineering' },
    { label: 'Computer Vision', category: 'AI' },
    { label: 'Excel (Advanced)', category: 'BI Tools' },
    { label: 'Statistical Analysis', category: 'Analytics' },
    { label: 'NLP & LLM Workflows', category: 'AI' },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative bg-[#080808] py-40 px-6 md:px-16"
        >
            <div className="max-w-6xl mx-auto">
                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-24 items-start">

                    {/* Left column */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mb-5 font-light">
                            About
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                            Hello, I&apos;m{' '}
                            <span className="text-violet-400">Aditi</span>.
                        </h2>

                        <div className="space-y-5 text-[15px] text-white/45 leading-[1.85] font-light max-w-md">
                            <p>
                                I&apos;m a Data Analyst and ML Engineer specializing in
                                turning complex datasets into clear, actionable business
                                insights — through rigorous analysis, sharp visualization,
                                and predictive modeling.
                            </p>
                            <p>
                                Currently interning at Fireblaze Technologies and pursuing
                                a B.Tech in Industrial IoT at St. Vincent Pallotti College,
                                Nagpur.
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-6">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 text-[13px] font-medium text-white bg-white/10 hover:bg-white/[0.14] border border-white/10 hover:border-white/20 px-6 py-3 rounded-full transition-all duration-300"
                            >
                                View Projects
                                <span className="text-white/50">→</span>
                            </a>
                            <a
                                href="mailto:kamble04aditi@gmail.com"
                                className="text-[13px] text-white/35 hover:text-white/70 transition-colors duration-300"
                            >
                                Get in touch
                            </a>
                        </div>
                    </motion.div>

                    {/* Right column — skills grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mb-6 font-light">
                            Skills
                        </p>
                        <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
                            {skills.map((skill) => (
                                <div
                                    key={skill.label}
                                    className="bg-[#080808] px-5 py-4 hover:bg-white/[0.03] transition-colors duration-200 group"
                                >
                                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/20 mb-1 font-light">
                                        {skill.category}
                                    </p>
                                    <p className="text-[14px] text-white/60 group-hover:text-white/80 transition-colors duration-200 font-medium">
                                        {skill.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Education row */}
                        <div className="mt-6 border border-white/[0.06] rounded-2xl px-5 py-4 bg-[#080808]">
                            <p className="text-[10px] tracking-[0.25em] uppercase text-white/20 mb-1 font-light">
                                Education
                            </p>
                            <p className="text-[14px] text-white/60 font-medium">
                                B.Tech in Industrial IoT
                            </p>
                            <p className="text-[12px] text-white/30 mt-0.5">
                                St. Vincent Pallotti College · 2022–2026 · CGPA 7.14
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
