export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-[#080808] py-32 px-6 md:px-16"
        >
            <div className="max-w-6xl mx-auto mb-16 h-px bg-white/[0.06]" />

            <div className="max-w-6xl mx-auto">
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
                    {/* Left — CTA */}
                    <div>
                        <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mb-5 font-light">
                            Contact
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                            Let&apos;s work together.
                        </h2>
                        <a
                            href="mailto:kamble04aditi@gmail.com"
                            className="text-[15px] text-white/40 hover:text-white/70 transition-colors duration-300"
                        >
                            kamble04aditi@gmail.com
                        </a>
                    </div>

                    {/* Right — links */}
                    <div className="flex flex-col items-start md:items-end gap-3">
                        <div className="flex items-center gap-6">
                            <a
                                href="https://github.com/aditikamble123"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[12px] tracking-widest uppercase text-white/30 hover:text-white transition-colors duration-300"
                            >
                                GitHub ↗
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aditi-kamble-0a1646266/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[12px] tracking-widest uppercase text-white/30 hover:text-white transition-colors duration-300"
                            >
                                LinkedIn ↗
                            </a>
                            <a
                                href="/resume.pdf"
                                download="Aditi_Kamble_Resume.pdf"
                                className="text-[12px] tracking-widest uppercase text-white/30 hover:text-white transition-colors duration-300"
                            >
                                Resume ↓
                            </a>
                        </div>
                        <p className="text-[12px] text-white/20">+91 9322162363 · Nagpur, India</p>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="h-px bg-white/[0.04] mb-8" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-white/15">
                        © {new Date().getFullYear()} Aditi Kamble
                    </p>
                    <p className="text-[11px] text-white/15">
                        Built with Next.js & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
