/** biome-ignore-all lint/style/noNonNullAssertion: canvas is never null */
import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const fontSize = 14;
    const chars =
      // Japanese
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン' +
      // Korean (Hangul)
      'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㄲㄸㅃㅆㅉ' +
      // Cyrillic
      'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгджзикл' +
      // Greek
      'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω' +
      // Arabic
      'ابتثجحخدذرزسشصضطظعغفقكلمنهوي' +
      // Hebrew
      'אבגדהוזחטיכלמנסעפצקרשת' +
      // Armenian
      'ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ' +
      // Georgian
      'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ' +
      // Ethiopic
      'ሀሁሂሃሄህሆለሉሊላሌልሎሐሑሒሓሔሕሖመሙሚማሜምሞ' +
      // Thai
      'กขคงจฉชซญดตถทนบปผฝพฟภมยรลวศษสหอฮ' +
      // Numbers & symbols
      'abcdefghijklmnñopqrstuvwxyz' +
      '0123456789#@$%&*+=-~<>[]{}|^';

    let cols = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(cols).fill(1);

    const draw = () => {
      // Dark blue translucent fade — trails the characters
      ctx.fillStyle = 'rgba(10, 15, 40, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      cols = Math.floor(canvas.width / fontSize);
      if (drops.length !== cols) {
        drops = Array(cols).fill(1);
      }

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const progress = drops[i] / (canvas.height / fontSize);

        // Head of the stream: bright cyan-white
        // Tail fades into blue
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#e0f7ff'; // bright head flash
        } else {
          // Interpolate from cyan to deep blue based on position
          const g = Math.floor(150 + (1 - progress) * 80);
          const b = Math.floor(200 + (1 - progress) * 55);
          ctx.fillStyle = `rgba(30, ${g}, ${b}, 0.85)`;
        }

        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='absolute inset-0 w-full h-full z-0'
      style={{ opacity: 0.35 }}
    />
  );
}
