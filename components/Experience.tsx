'use client';

import { motion } from 'framer-motion';

const bullets = [
    'Processed and engineered 200K+ records using Python and SQL to support ML and AI model training workflows across multiple business use cases.',
    'Built data preprocessing and feature engineering pipelines for ML and NLP model development, ensuring high-quality, analysis-ready datasets.',
    'Developed and fine-tuned classification models, improving prediction accuracy by ~15% through iterative model evaluation and hyperparameter tuning.',
    'Performed model evaluation using accuracy metrics, confusion matrix, and performance analysis to validate model reliability before deployment.',
    'Followed Agile development practices during iterative model and pipeline builds, contributing to sprint-based delivery, internal documentation, and UAT processes.',
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative bg-[#080808] py-32 px-6 md:px-16"
        >
            {/* Subtle top divider */}
            <div className="max-w-6xl mx-auto mb-20 h-px bg-white/[0.06]" />

            <div className="max-w-6xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-60px' }}
                    className="mb-14"
                >
                    <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mb-5 font-light">
                        Experience
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Where I&apos;ve worked
                    </h2>
                </motion.div>

                {/* Experience entry */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-16"
                >
                    {/* Left meta */}
                    <div className="shrink-0">
                        <p className="text-[13px] font-semibold text-white/70 mb-1">
                            Fireblaze Technologies
                        </p>
                        <p className="text-[13px] text-white/35 mb-4">Data Analyst Intern</p>
                        <div className="space-y-1">
                            <p className="text-[11px] text-white/25">01/2025 – 07/2025</p>
                            <p className="text-[11px] text-white/25">Nagpur, India</p>
                        </div>
                    </div>

                    {/* Right bullets */}
                    <div className="border-l border-white/[0.07] pl-8 space-y-4">
                        {bullets.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 * i }}
                                viewport={{ once: true }}
                                className="flex gap-3"
                            >
                                <span className="mt-[9px] shrink-0 w-1 h-1 rounded-full bg-violet-500/70" />
                                <p className="text-[14px] text-white/45 leading-[1.8]">{b}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
