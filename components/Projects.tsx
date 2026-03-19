'use client';

import { motion } from 'framer-motion';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tech: string[];
    year: string;
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Business & Sales Dashboard',
        category: 'Data Analytics',
        description:
            'End-to-end Power BI dashboard tracking 5+ KPIs — revenue trends, CAC, and product performance across sales segments. Reduced ad hoc reporting by 30%.',
        tech: ['Power BI', 'DAX', 'Excel', 'Data Modeling'],
        year: '2025',
        link: '#',
    },
    {
        id: 2,
        title: 'HR & Workforce Analytics',
        category: 'Data Analytics',
        description:
            'Workforce dashboard covering 10+ KPIs including attrition, headcount, salary bands, and diversity. Enabled proactive, data-backed HR decisions.',
        tech: ['Power BI', 'DAX', 'HR Analytics', 'Excel'],
        year: '2025',
        link: '#',
    },
    {
        id: 3,
        title: 'Incremental ETL Pipeline',
        category: 'Data Engineering',
        description:
            'Modular 3-stage pipeline using Python and SQL that processes only delta records per run, with schema validation, error handling, and timestamp-based tracking.',
        tech: ['Python', 'SQL', 'ETL', 'Automation'],
        year: '2025',
        link: '#',
    },
    {
        id: 4,
        title: 'Instagram Insights EDA',
        category: 'Data Science',
        description:
            'End-to-end EDA on 1,000+ posts using MySQL — uncovering top-performing content types, peak engagement periods, and audience reach patterns.',
        tech: ['MySQL', 'EDA', 'SQL Optimization'],
        year: '2024',
        link: '#',
    },
    {
        id: 5,
        title: 'QueryMind AI',
        category: 'AI / Full-Stack',
        description:
            'Text-to-SQL assistant powered by GPT-4o. Natural language queries → live results from a MySQL database, with a chat-style interface.',
        tech: ['Next.js', 'FastAPI', 'OpenAI', 'MySQL'],
        year: '2025',
        link: '#',
    },
    {
        id: 6,
        title: 'Scrollytelling Engine',
        category: 'Creative Frontend',
        description:
            'The engine powering this portfolio. High-performance canvas scrubbing for cinematic scroll-based storytelling with Framer Motion.',
        tech: ['Next.js', 'Framer Motion', 'Canvas API'],
        year: '2025',
        link: '#',
    },
];

const accentColors: Record<string, string> = {
    'Data Analytics': 'text-violet-400',
    'Data Engineering': 'text-emerald-400',
    'Data Science': 'text-pink-400',
    'AI / Full-Stack': 'text-amber-400',
    'Creative Frontend': 'text-cyan-400',
};

export default function Projects() {
    return (
        <section
            id="projects"
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
                        Selected Work
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Projects
                    </h2>
                </motion.div>

                {/* Project list */}
                <div className="divide-y divide-white/[0.06]">
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 * i }}
                            viewport={{ once: true, margin: '-40px' }}
                            className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-8 cursor-pointer no-underline hover:bg-white/[0.015] -mx-6 px-6 md:-mx-8 md:px-8 transition-colors duration-300 rounded-xl"
                        >
                            {/* Index */}
                            <span className="text-[11px] text-white/20 font-light mt-1 shrink-0 w-6">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* Title + description */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <h3 className="text-[16px] font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <span className={`text-[11px] font-medium ${accentColors[project.category] ?? 'text-white/40'} opacity-70`}>
                                        {project.category}
                                    </span>
                                </div>
                                <p className="text-[13px] text-white/35 leading-[1.75] max-w-xl">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech + year + arrow */}
                            <div className="flex md:flex-col items-start md:items-end gap-3 md:gap-2 shrink-0">
                                <div className="flex flex-wrap gap-1.5 md:justify-end">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-md bg-white/[0.05] text-white/30 border border-white/[0.06]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] text-white/20">{project.year}</span>
                                    <span className="text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-300 inline-block">
                                        →
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
