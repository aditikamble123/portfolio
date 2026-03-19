'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion';

const TOTAL_FRAMES = 120;

function getFrameUrl(index: number): string {
    const padded = String(index).padStart(3, '0');
    return `/sequence/frame_${padded}_delay-0.066s.png`;
}

interface ScrollyCanvasProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollyCanvas({ containerRef }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const [isReady, setIsReady] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Fade out the canvas as we reach the very end of the 500vh zone (0.95 to 1.0)
    const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    const drawFrame = useCallback((img: HTMLImageElement) => {
        const canvas = canvasRef.current;
        if (!canvas || !img.complete || img.naturalWidth === 0) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        const scale = Math.max(cw / iw, ch / ih);
        const sw = iw * scale;
        const sh = ih * scale;
        const ox = (cw - sw) / 2;
        const oy = (ch - sh) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, ox, oy, sw, sh);
    }, []);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const img = imagesRef.current[currentFrameRef.current];
        if (img?.complete) drawFrame(img);
    }, [drawFrame]);

    useEffect(() => {
        const images: HTMLImageElement[] = Array.from({ length: TOTAL_FRAMES }, () => new Image());
        imagesRef.current = images;

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let loaded = 0;
        images.forEach((img, i) => {
            img.onload = () => {
                loaded++;
                setLoadedCount(loaded);
                if (i === 0) drawFrame(img);
                if (loaded === TOTAL_FRAMES) setIsReady(true);
            };
            img.onerror = () => {
                loaded++;
                setLoadedCount(loaded);
            };
            img.src = getFrameUrl(i);
        });

        return () => window.removeEventListener('resize', resizeCanvas);
    }, [drawFrame, resizeCanvas]);

    useMotionValueEvent(frameIndex, 'change', (latest) => {
        const idx = Math.round(Math.min(Math.max(latest, 0), TOTAL_FRAMES - 1));
        if (idx === currentFrameRef.current) return;
        currentFrameRef.current = idx;

        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            const img = imagesRef.current[idx];
            if (img?.complete) drawFrame(img);
        });
    });

    const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);

    return (
        <>
            <AnimatePresence>
                {!isReady && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 text-center"
                    >
                        <h2 className="text-white text-[10px] tracking-[0.5em] uppercase mb-10 font-light opacity-50">
                            Initializing Experience
                        </h2>
                        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden rounded-full mb-4">
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-white/60"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase tabular-nums">
                            {progress}%
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div style={{ opacity }} className="w-full h-full bg-black">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full"
                />
            </motion.div>
        </>
    );
}
