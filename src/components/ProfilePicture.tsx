// components/ProfilePicture.tsx
import { useEffect, useRef } from 'react';

export default function ProfilePicture({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Trigger after mount so the animation plays on load
    requestAnimationFrame(() => {
      el.classList.add('revealed');
    });
  }, []);

  return (
    <>
      <style>{`
        @property --reveal-angle {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }

        .profile-mask {
          --reveal-angle: 0deg;
          mask-image: conic-gradient(
            black var(--reveal-angle),
            transparent var(--reveal-angle)
          );
          -webkit-mask-image: conic-gradient(
            black var(--reveal-angle),
            transparent var(--reveal-angle)
          );
          transition: --reveal-angle 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-mask.revealed {
          --reveal-angle: 360deg;
        }
      `}</style>

      <div className='shrink-0'>
        <div
          ref={ref}
          className='profile-mask rounded-full border-2 border-blue-600 size-80 overflow-hidden'
        >
          <img className='size-full object-cover' src={src} alt='me' />
        </div>
      </div>
    </>
  );
}
