import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useColumnsAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const columns = container.querySelectorAll<HTMLElement>('[data-column]');

    // Order: center first, then left, then right
    // indices: 0=left, 1=center, 2=right → stagger order: [1, 0, 2]
    const ordered = [columns[1], columns[0], columns[2]].filter(Boolean);

    const ctx = gsap.context(() => {
      // Set initial state on all columns
      gsap.set(columns, { opacity: 0, y: 40, scale: 0.95 });

      ordered.forEach((col, i) => {
        gsap.to(col, {
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: i * 0.25,
          ease: 'power3.out',
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
