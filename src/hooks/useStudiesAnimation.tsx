import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useStudiesAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>('.study-item');

    const ctx = gsap.context(() => {
      // Set initial state for all items
      gsap.set(items, { opacity: 0, y: 40 });

      // Animate each item with stagger and scroll trigger
      items.forEach((item, index) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 15%',
            toggleActions: 'play none none reverse',
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
