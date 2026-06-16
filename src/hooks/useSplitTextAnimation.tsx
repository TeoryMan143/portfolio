import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useSplitTextAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find all elements marked for animation
    const targets = container.querySelectorAll<HTMLElement>('[data-split]');

    const allChars: HTMLElement[] = [];

    targets.forEach((el) => {
      const text = el.innerText;
      const isGradient = el.dataset.split === 'gradient';

      // Wrap each character in a span
      el.innerHTML = text
        .split('')
        .map((char) => {
          const classes = isGradient
            ? 'inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300'
            : 'inline-block';
          // Preserve spaces
          return char === ' '
            ? `<span class="inline-block">&nbsp;</span>`
            : `<span class="${classes}">${char}</span>`;
        })
        .join('');

      allChars.push(...Array.from(el.querySelectorAll<HTMLElement>('span')));
    });

    const ctx = gsap.context(() => {
      gsap.from(allChars, {
        scrollTrigger: {
          trigger: container,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        x: -60,
        opacity: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: 'power3.out',
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
