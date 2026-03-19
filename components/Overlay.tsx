'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

interface TextSectionProps {
    scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
    visibleStart: number;
    visibleEnd: number;
    align: 'center' | 'left' | 'right';
    children: React.ReactNode;
}

function TextSection({
    scrollYProgress,
    visibleStart,
    visibleEnd,
    align,
    children,
}: TextSectionProps) {
    const a = Math.max(0, visibleStart - 0.05);
    const b = visibleStart;
    const c = visibleEnd;
    const d = Math.min(1, visibleEnd + 0.05);

    const opacity = useTransform(scrollYProgress, [a, b, c, d], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [a, b, c, d], [40, 0, 0, -40]);

    const alignClass =
        align === 'center'
            ? 'items-center text-center'
            : align === 'left'
                ? 'items-start text-left px-12 md:px-24'
                : 'items-end text-right px-12 md:px-24';

    return (
        <motion.div
            style={{ opacity, y }}
            className={`absolute inset-0 flex flex-col justify-center ${alignClass} pointer-events-none`}
        >
            {children}
        </motion.div>
    );
}

export default function Overlay({
    containerRef,
}: {
    containerRef: React.RefObject<HTMLDivElement | null>;
}) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <div className="w-full h-full relative">
            {/* Hero Section */}
            <TextSection scrollYProgress={scrollYProgress} visibleStart={0.06} visibleEnd={0.28} align="center">
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold leading-tight text-white drop-shadow-2xl">
                    Aditi Kamble.
                </h1>
                <p className="mt-8 text-lg md:text-3xl font-light text-white/50 tracking-[0.3em] uppercase">
                    Data Analyst | ML Engineer | AI Engineer
                </p>
            </TextSection>

            {/* Experience Section */}
            <TextSection scrollYProgress={scrollYProgress} visibleStart={0.35} visibleEnd={0.58} align="left">
                <div className="max-w-xl">
                    <span className="inline-block mb-4 h-[1px] w-24 bg-gradient-to-r from-violet-500 to-transparent" />
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none text-white drop-shadow-2xl">
                        I reveal<br />
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                            hidden
                        </span>{' '}
                        insights.
                    </h2>
                    <p className="mt-8 text-lg md:text-xl text-white/40 font-light leading-relaxed">
                        Transforming raw noise into high-fidelity patterns through analysis and code.
                    </p>
                </div>
            </TextSection>

            {/* Philosophy Section */}
            <TextSection scrollYProgress={scrollYProgress} visibleStart={0.65} visibleEnd={0.90} align="right">
                <div className="max-w-xl text-right">
                    <span className="inline-block mb-4 h-[1px] w-24 ml-auto bg-gradient-to-l from-cyan-500 to-transparent" />
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none text-white drop-shadow-2xl">
                        Bridging{' '}
                        <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                            data
                        </span>
                        <br />
                        and intelligence.
                    </h2>
                    <p className="mt-8 text-lg md:text-xl text-white/40 font-light leading-relaxed">
                        Engineering predictive clarity, one model at a time.
                    </p>
                </div>
            </TextSection>
        </div>
    );
}
