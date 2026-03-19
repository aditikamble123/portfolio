'use client';

import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Footer from '@/components/Footer';

export default function Home() {
  /**
   * We use this ref to track scroll progress.
   * The height of 500vh creates the "scroll runway" for the animation.
   */
  const scrollZoneRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[#080808] w-full min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Scrollytelling Section ─────────────────────── */}
      <section
        ref={scrollZoneRef}
        className="relative w-full overflow-visible"
        style={{ height: '500vh' }}
      >
        {/* 
           Fixed Layer: 
           Stays locked to the viewport regardless of scroll.
           The components inside handle their own visibility 
           based on the scroll progress of the parent section.
        */}
        <div className="fixed inset-0 w-full h-full z-0">
          <ScrollyCanvas containerRef={scrollZoneRef} />
        </div>

        {/* Text Overlays also fixed */}
        <div className="fixed inset-0 w-full h-full z-10 pointer-events-none">
          <Overlay containerRef={scrollZoneRef} />
        </div>
      </section>

      {/* ── Page Content (Below the fold) ──────────────── */}
      <div className="relative z-30 bg-[#080808]">
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Footer />
      </div>
    </main>
  );
}
