'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (y) => {
        setScrolled(y > 60);
    });

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-8 md:px-16 py-5
        transition-all duration-500
        ${scrolled ? 'bg-black/60 backdrop-blur-lg border-b border-white/[0.06]' : 'bg-transparent'}
      `}
        >
            {/* Logo */}
            <a href="#" className="text-white font-extrabold text-xl tracking-tight group">
                AK
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-400 ml-0.5 align-super group-hover:scale-150 transition-transform" />
            </a>

            {/* Links */}
            <ul className="hidden md:flex items-center gap-10 list-none">
                {[
                    { label: 'Work', href: '#projects' },
                    { label: 'Experience', href: '#experience' },
                    { label: 'About', href: '#about' },
                    { label: 'Contact', href: '#contact' },
                ].map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors duration-300 font-medium"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <a
                href="mailto:kamble04aditi@gmail.com"
                className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 hover:bg-white/5"
            >
                Hire me
                <span className="text-base leading-none">↗</span>
            </a>
        </motion.nav>
    );
}
