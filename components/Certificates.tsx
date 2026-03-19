'use client';

import { motion } from 'framer-motion';

const certs = [
    {
        title: 'Post Graduate Program in Data Science and Analytics',
        issuer: 'NASSCOM',
    },
    {
        title: 'Data Analytics Job Simulation',
        issuer: 'Deloitte',
    },
    {
        title: 'Data Visualization Simulation',
        issuer: 'Accenture',
    },
    {
        title: 'Microsoft AI Program',
        issuer: 'Microsoft',
    },
    {
        title: 'Google Data Analytics Capstone',
        issuer: 'Google',
    },
    {
        title: 'GenAI Analytics Simulation',
        issuer: 'Tata',
    },
];

export default function Certificates() {
    return (
        <section
            id="certificates"
            className="relative bg-[#080808] py-32 px-6 md:px-16"
        >
            <div className="max-w-6xl mx-auto mb-20 h-px bg-white/[0.06]" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-60px' }}
                    className="mb-14"
                >
                    <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mb-5 font-light">
                        Credentials
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Certificates
                    </h2>
                </motion.div>

                {/* List */}
                <div className="divide-y divide-white/[0.06]">
                    {certs.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 * i }}
                            viewport={{ once: true, margin: '-30px' }}
                            className="flex items-center justify-between gap-6 py-5 group"
                        >
                            <div className="flex items-center gap-5 min-w-0">
                                <span className="text-[11px] text-white/20 font-light shrink-0 w-6">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <p className="text-[14px] text-white/55 group-hover:text-white/80 transition-colors duration-300 font-medium truncate">
                                    {cert.title}
                                </p>
                            </div>
                            <span className="text-[11px] tracking-widest uppercase text-white/25 shrink-0">
                                {cert.issuer}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
