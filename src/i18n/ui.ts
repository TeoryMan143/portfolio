export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
};

export type Locale = keyof typeof languages;

export const defaultLang = 'en';

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.technologies': 'Technologies',
    'nav.about': 'About',
    'nav.social': 'Social',

    // Hero
    'hero.title': 'I am',
    'hero.sub': 'Full Stack Developer',
    'hero.location': 'Based in Colombia',
    'hero.availability': 'Open to Work',
    'hero.desc':
      'I create beautiful, performant web applications that solve real-world problems. With expertise in modern frameworks and design principles, I bring ideas to life.',
    'hero.mywork': 'View My Work',
    'hero.cv': 'Download CV',

    // About
    'about.title': 'About',
    'about.subtitle': 'Me',
    'about.description1':
      "I'm a passionate developer with a love for creating beautiful and functional web experiences. With 4 years of experience in web development, I've worked on diverse projects ranging from small tools to larger apps.",
    'about.description2':
      "When I'm not coding, you can find me exploring new technologies, or sharing knowledge with the community.",
    'about.learnMore': 'Learn More',
    'about.projects': 'Projects Completed',
    'about.projectsCount': '50+',
    'about.experience': 'Years Experience',
    'about.experienceCount': '5+',
    'about.clients': 'Happy Clients',
    'about.clientsCount': '30+',
    'about.dedication': 'Dedication',
    'about.dedicationCount': '100%',

    // Studies
    'studies.title': 'Education',
    'studies.studies': 'Studies',
    'studies.subtitle': 'My learning journey and achievements',
    'studies.inProgress': 'In Progress',
    'studies.sena-dev.institution': 'Servicio Nacional de Aprendizaje (Sena)',
    'studies.sena-dev.degree':
      'Bachelor of Programming and Software Development',
    'studies.sena-dev.field': 'Computer Science',
    'studies.sena-dev.description':
      'Completed a comprehensive program in computer science with a focus on full-stack web development and software engineering.',
    'studies.icesi-se.institution': 'Universidad Icesi',
    'studies.icesi-se.degree': 'Systems Engineering',
    'studies.icesi-se.field': 'Software Engineering',
    'studies.icesi-se.description':
      'Pursuing a degree in Systems Engineering with a focus on software engineering, combining theoretical knowledge with practical development skills.',
    'studies.downloadCert': 'Download Certificate',
    'studies.in': 'in',

    // Technologies
    'technologies.title': 'Technologies',
    'technologies.sub': 'Skills',
    'technologies.dec': "Here's what I work with to create amazing experiences",
    'technologies.plangs': 'Programming Languages',
    'technologies.tools': 'Tools',

    // What I Do
    'whatIDo.title': 'What I Do',
    'whatIDo.item1': 'Build responsive and accessible web applications',
    'whatIDo.item2': 'Design modern user interfaces with great UX principles',
    'whatIDo.item3': 'Develop full-stack solutions from concept to deployment',
    'whatIDo.item4': 'Collaborate with teams to deliver high-quality products',

    // Languages
    'languages.title': 'Languages',
    'languages.subtitle': 'Languages I speak fluently',
    'languages.proficiency': 'Proficiency',
    'languages.spanish.description':
      'Native speaker with years of experience in communication and development.',
    'languages.english.description':
      'Professional proficiency with Cambrige Linguaskill certification (C1 CEFR).',
    'languages.portuguese.description':
      'Intermediate-Advanced level with practical communication skills.',

    // Social
    'social.title': "Let's Connect",
    'social.subtitle': 'Follow me on social media',
    'social.github': 'GitHub',
    'social.linkedin': 'LinkedIn',
    'social.email': 'Email',
    'social.cta': 'Ready to work together?',
    'social.ctaButton': 'Send Me an Email',

    // Footer
    'footer.tagline': 'Building amazing web experiences',
    'footer.quickLinks': 'Quick Links',
    'footer.socialLinks': 'Social Links',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.technologies': 'Tecnologías',
    'nav.about': 'Acerca de',
    'nav.social': 'Social',

    // Hero
    'hero.title': 'Soy',
    'hero.sub': 'Desarrollador Full Stack',
    'hero.location': 'Ubicado en Colombia',
    'hero.availability': 'Abierto a Oportunidades',
    'hero.desc':
      'Creo aplicaciones web con gran redimiento que resuelven problemas reales. Con experiencia en frameworks modernos y principios de diseño, hago tus ideas realidad.',
    'hero.mywork': 'Ver Mi Trabajo',
    'hero.cv': 'Descargar CV',

    // About
    'about.title': 'Acerca',
    'about.subtitle': 'de Mí',
    'about.description1':
      'Soy un desarrollador apasionado con amor por crear experiencias web hermosas y funcionales. Con 4 años de experiencia en desarrollo web, he trabajado en diversos proyectos que van desde herramientas pequeñas hasta aplicaciones más grandes.',
    'about.description2':
      'Cuando no estoy codificando, puedes encontrarme explorando nuevas tecnologías o compartiendo conocimiento con la comunidad.',
    'about.learnMore': 'Saber Más',
    'about.projects': 'Proyectos Completados',
    'about.projectsCount': '10+',
    'about.experience': 'Años de Experiencia',
    'about.experienceCount': '4+',
    'about.clients': 'Clientes Satisfechos',
    'about.clientsCount': '30+',
    'about.dedication': 'Dedicación',
    'about.dedicationCount': '100%',

    // Studies
    'studies.title': 'Educación',
    'studies.studies': 'Estudios',
    'studies.subtitle': 'Mi camino de aprendizaje y logros',
    'studies.inProgress': 'En Progreso',
    'studies.sena-dev.institution': 'Servicio Nacional de Aprendizaje (Sena)',
    'studies.sena-dev.degree':
      'Tecnico de Programación y Desarrollo de Software',
    'studies.sena-dev.field': 'Ciencias de la Computación',
    'studies.sena-dev.description':
      'Completé un programa tecnico integral en ciencias de la computación con enfoque en desarrollo web full-stack e ingeniería de software.',
    'studies.icesi-se.institution': 'Universidad Icesi',
    'studies.icesi-se.degree': 'Pregrado en Ingeniería de Sistemas',
    'studies.icesi-se.field': 'Ingeniería de Software',
    'studies.icesi-se.description':
      'Cursando una pregrado en Ingeniería de Sistemas con enfoque en ingeniería de software, combinando conocimiento teórico con habilidades prácticas de desarrollo.',
    'studies.downloadCert': 'Descargar Certificado',
    'studies.in': 'en',

    // Technologies
    'technologies.title': 'Tecnologías',
    'technologies.sub': 'Habilidades',
    'technologies.dec': 'Lo que uso para crear experiencias increibles',
    'technologies.plangs': 'Leguajes de programación',
    'technologies.tools': 'Herramientas',

    // Lo que hago
    'whatIDo.title': 'Lo que hago',
    'whatIDo.item1': 'Desarrollo aplicaciones web responsivas y accesibles',
    'whatIDo.item2':
      'Diseño interfaces modernas con excelentes principios de experiencia de usuario',
    'whatIDo.item3':
      'Desarrollo soluciones full-stack desde el concepto hasta el despliegue',
    'whatIDo.item4':
      'Colaboro con equipos para entregar productos de alta calidad',

    // Languages
    'languages.title': 'Idiomas',
    'languages.subtitle': 'Idiomas que hablo con fluidez',
    'languages.proficiency': 'Dominio',
    'languages.spanish.description':
      'Hablante nativo con años de experiencia en comunicación y desarrollo.',
    'languages.english.description':
      'Dominio profesional con certificación internacional (C1 CEFR).',
    'languages.portuguese.description':
      'Nivel intermedio-avanzado con habilidades de comunicación práctica.',

    // Social
    'social.title': 'Contactame',
    'social.subtitle': 'Sígueme en redes sociales',
    'social.github': 'GitHub',
    'social.linkedin': 'LinkedIn',
    'social.email': 'Correo',
    'social.cta': '¿Listo para trabajar juntos?',
    'social.ctaButton': 'Envíame un Correo',

    // Footer
    'footer.tagline': 'Creando experiencias web increíbles',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.socialLinks': 'Enlaces Sociales',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.technologies': 'Tecnologias',
    'nav.about': 'Sobre',
    'nav.social': 'Social',

    // Hero
    'hero.title': 'Sou',
    'hero.sub': 'Desenvolvedor Full Stack',
    'hero.location': 'Localizado na Colômbia',
    'hero.availability': 'Aberto a Oportunidades',
    'hero.desc':
      'Crio aplicações web bonitas e de alto desempenho que resolvem problemas reais. Com experiência em frameworks modernos e princípios de design, trago ideias à vida.',
    'hero.mywork': 'Ver Meu Trabalho',
    'hero.cv': 'Baixar CV',

    // About
    'about.title': 'Sobre',
    'about.subtitle': 'Mim',
    'about.description1':
      'Sou um desenvolvedor apaixonado com amor por criar experiências web bonitas e funcionais. Com 4 anos de experiência em desenvolvimento web, trabalhei em diversos projetos que variam de ferramentas pequenas a aplicativos maiores.',
    'about.description2':
      'Quando não estou codificando, você pode me encontrar explorando novas tecnologias ou compartilhando conhecimento com a comunidade.',
    'about.learnMore': 'Saber Mais',
    'about.projects': 'Projetos Concluídos',
    'about.projectsCount': '50+',
    'about.experience': 'Anos de Experiência',
    'about.experienceCount': '5+',
    'about.clients': 'Clientes Satisfeitos',
    'about.clientsCount': '30+',
    'about.dedication': 'Dedicação',
    'about.dedicationCount': '100%',

    // Studies
    'studies.title': 'Educação',
    'studies.studies': 'Estudos',
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
    'studies.in': 'em',

    // Technologies
    'technologies.title': 'Tecnologias',
    'technologies.sub': 'Habilidades',
    'technologies.dec': 'O que uso para ciar experiências incríveis',
    'technologies.plangs': 'Linguagens de programação',
    'technologies.tools': 'Ferramentas',

    // O que faço
    'whatIDo.title': 'O que faço',
    'whatIDo.item1': 'Desenvolvo aplicações web responsivas e acessíveis',
    'whatIDo.item2':
      'Projeto interfaces modernas com excelentes princípios de experiência do usuário',
    'whatIDo.item3':
      'Desenvolvo soluções full-stack desde o conceito até a implantação',
    'whatIDo.item4':
      'Colaboro com equipes para entregar produtos de alta qualidade',

    // Languages
    'languages.title': 'Idiomas',
    'languages.subtitle': 'Idiomas que falo com fluência',
    'languages.proficiency': 'Proficiência',
    'languages.spanish.description':
      'Falante nativo com anos de experiência em comunicação e desenvolvimento.',
    'languages.english.description':
      'Proficiência profissional com certificação internacional (C1 CEFR).',
    'languages.portuguese.description':
      'Nível intermediário-avançado com habilidades de comunicação prática.',

    // Social
    'social.title': 'Entrar em contato',
    'social.subtitle': 'Siga-me nas redes sociais',
    'social.github': 'GitHub',
    'social.linkedin': 'LinkedIn',
    'social.email': 'Email',
    'social.cta': 'Pronto para trabalharmos juntos?',
    'social.ctaButton': 'Envie-me um Email',

    // Footer
    'footer.tagline': 'Criando experiências web incríveis',
    'footer.quickLinks': 'Links Rápidos',
    'footer.socialLinks': 'Links Sociais',
  },
} as const;
