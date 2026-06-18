export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
};

export type Locale = keyof typeof languages;

export const defaultLang = 'en';

export const ui = {
  en: {
    'hero.title': 'I am',
    'hero.sub': 'Full Stack Developer',
    'hero.desc':
      'I create beautiful, performant web applications that solve real-world problems. With expertise in modern frameworks and design principles, I bring ideas to life.',
  },
  es: {
    'hero.title': 'Soy',
    'hero.sub': 'Desarrollador Full Stack',
    'hero.desc':
      'Creo aplicaciones web con gran redimiento que resuelven problemas reales. Con experiencia en frameworks modernos y principios de diseño, hago tus ideas realidad.',
  },
  pt: {
    'hero.title': 'Soy',
    'hero.sub': 'Desarrollador Full Stack',
    'hero.desc':
      'Creo aplicaciones web con gran redimiento que resuelven problemas reales. Con experiencia en frameworks modernos y principios de diseño, hago tus ideas realidad.',
  },
} as const;
