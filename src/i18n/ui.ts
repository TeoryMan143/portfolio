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
    'studies.title': 'Education',
    'studies.subtitle': 'My learning journey and achievements',
    'studies.inProgress': 'In Progress',
    'studies.sena-dev.institution': 'Servicio Nacional de Aprendizaje (Sena)',
    'studies.sena-dev.degree': 'Bachelor of Programming and Software Development',
    'studies.sena-dev.field': 'Computer Science',
    'studies.sena-dev.description':
      'Completed a comprehensive program in computer science with a focus on full-stack web development and software engineering.',
    'studies.icesi-se.institution': 'Universidad Icesi',
    'studies.icesi-se.degree': 'Systems Engineering',
    'studies.icesi-se.field': 'Software Engineering',
    'studies.icesi-se.description':
      'Pursuing a degree in Systems Engineering with a focus on software engineering, combining theoretical knowledge with practical development skills.',
    'studies.downloadCert': 'Download Certificate',
  },
  es: {
    'hero.title': 'Soy',
    'hero.sub': 'Desarrollador Full Stack',
    'hero.desc':
      'Creo aplicaciones web con gran redimiento que resuelven problemas reales. Con experiencia en frameworks modernos y principios de diseño, hago tus ideas realidad.',
    'studies.title': 'Educación',
    'studies.subtitle': 'Mi camino de aprendizaje y logros',
    'studies.inProgress': 'En Progreso',
    'studies.sena-dev.institution': 'Servicio Nacional de Aprendizaje (Sena)',
    'studies.sena-dev.degree': 'Licenciatura en Ciencias',
    'studies.sena-dev.field': 'Ciencias de la Computación',
    'studies.sena-dev.description':
      'Completé un programa integral en ciencias de la computación con enfoque en desarrollo web full-stack e ingeniería de software.',
    'studies.icesi-se.institution': 'Universidad Icesi',
    'studies.icesi-se.degree': 'Ingeniería de Sistemas',
    'studies.icesi-se.field': 'Ingeniería de Software',
    'studies.icesi-se.description':
      'Cursando una licenciatura en Ingeniería de Sistemas con enfoque en ingeniería de software, combinando conocimiento teórico con habilidades prácticas de desarrollo.',
    'studies.downloadCert': 'Descargar Certificado',
  },
  pt: {
    'hero.title': 'Soy',
    'hero.sub': 'Desarrollador Full Stack',
    'hero.desc':
      'Creo aplicaciones web con gran redimiento que resuelven problemas reales. Con experiencia en frameworks modernos y principios de diseño, hago tus ideas realidad.',
    'studies.title': 'Educação',
    'studies.subtitle': 'Minha jornada de aprendizado e conquistas',
    'studies.inProgress': 'Em Progresso',
    'studies.sena-dev.institution': 'Serviço Nacional de Aprendizagem (Sena)',
    'studies.sena-dev.degree': 'Bacharelado em Ciências',
    'studies.sena-dev.field': 'Ciência da Computação',
    'studies.sena-dev.description':
      'Completei um programa abrangente em ciência da computação com foco em desenvolvimento web full-stack e engenharia de software.',
    'studies.icesi-se.institution': 'Universidad Icesi',
    'studies.icesi-se.degree': 'Engenharia de Sistemas',
    'studies.icesi-se.field': 'Engenharia de Software',
    'studies.icesi-se.description':
      'Cursando um diploma em Engenharia de Sistemas com foco em engenharia de software, combinando conhecimento teórico com habilidades práticas de desenvolvimento.',
    'studies.downloadCert': 'Baixar Certificado',
  },
} as const;
