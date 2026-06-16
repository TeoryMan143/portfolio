import { useEffect, useState } from 'react';

interface Props {
  text: string;
  delay?: number;
  className?: string;
}

export default function Typewriter({ text, delay = 18, className }: Props) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (displayed.length >= text.length) return;
    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, delay);
    return () => clearTimeout(timeout);
  }, [displayed, text, delay]);

  return <span className={className}>{displayed}</span>;
}
