import type { CollectionEntry } from 'astro:content';
import { useState } from 'react';
import { useColumnsAnimation } from '../hooks/useColumnsAnimation';
import { useSplitTextAnimation } from '../hooks/useSplitTextAnimation';
import type { Locale } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';

interface Technology {
  id: string;
  name: string;
}

interface TechnologyCategory {
  title: string;
  items: Technology[];
}

interface ProjectsProps {
  projects: CollectionEntry<'project'>[];
  lang: Locale;
}

export const categories: TechnologyCategory[] = [
  {
    title: 'Programming Languages',
    items: [
      { id: 'js', name: 'JavaScript' },
      { id: 'ts', name: 'TypeScript' },
      { id: 'java', name: 'Java' },
      { id: 'scala', name: 'Scala' },
      { id: 'dart', name: 'Dart' },
      { id: 'python', name: 'Python' },
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { id: 'react', name: 'React' },
      { id: 'nextjs', name: 'NextJS' },
      { id: 'astro', name: 'Astro' },
      { id: 'spring', name: 'Spring' },
      { id: 'flutter', name: 'Flutter' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { id: 'git', name: 'Git' },
      { id: 'nodejs', name: 'NodeJS' },
      { id: 'deno', name: 'Deno' },
      { id: 'tailwind', name: 'Tailwind' },
      { id: 'tanstack-query', name: 'TanStack Query' },
      { id: 'sql', name: 'SQL' },
      { id: 'postgres', name: 'PostgreSQL' },
    ],
  },
] as const;

function TechnologiesSection({ projects, lang }: ProjectsProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleTechnology = (id: string) => {
    const newSelected = new Set(selected);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelected(newSelected);
  };

  const isSelected = (id: string): boolean => {
    return selected.has(id);
  };

  const titleRef = useSplitTextAnimation();
  const pRef = useSplitTextAnimation();

  const columnsRef = useColumnsAnimation();

  const t = useTranslations(lang);

  return (
    <section id='technologies' className='py-20 px-4 bg-slate-800'>
      <div className='max-w-6xl mx-auto'>
        <div ref={titleRef} className='text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            {/* data-split tells the hook which spans to animate */}
            <span data-split='plain'>{t('technologies.title')} &amp; </span>
            <span data-split='gradient'>{t('technologies.sub')}</span>
          </h2>
        </div>
        <div ref={pRef} className='text-center mb-16'>
          <p data-split='plain' className='text-gray-300 text-lg'>
            {t('technologies.dec')}
          </p>
        </div>
        {/* Three Column Layout */}
        <div
          ref={columnsRef}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'
        >
          {categories.map((category) => (
            <div key={category.title} data-column className='flex flex-col'>
              <h3 className='text-2xl font-bold text-blue-300 mb-6 pb-3 border-b border-blue-500/50'>
                {category.title}
              </h3>
              <div className='grid grid-cols-4 md:grid-cols-3 gap-3'>
                {category.items.map((tech) => (
                  <div
                    key={tech.id}
                    onClick={() => toggleTechnology(tech.id)}
                    className={`relative cursor-pointer transition-all duration-300 rounded-lg overflow-hidden group ${
                      isSelected(tech.id)
                        ? 'ring-2 ring-blue-400 shadow-lg shadow-blue-500/20'
                        : 'hover:ring-2 hover:ring-blue-400/60'
                    }`}
                  >
                    <div
                      className={`aspect-square rounded-lg flex items-center justify-center text-center p-3 border-2 transition-all ${
                        isSelected(tech.id)
                          ? 'border-blue-400 bg-blue-900/50'
                          : 'border-blue-500/30 bg-linear-to-br from-blue-900/30 to-slate-800/30 group-hover:bg-blue-900/40'
                      }`}
                    >
                      <div className='flex flex-col items-center gap-1'>
                        <img
                          src={`/techs/${tech.id}.svg`}
                          className='w-8 h-8 rounded bg-slate-700/50 group-hover:bg-slate-600 transition-colors'
                          alt={tech.name}
                        />
                        <p className='text-gray-200 font-semibold text-xs group-hover:text-blue-300 transition-colors line-clamp-2'>
                          {tech.name}
                        </p>
                      </div>
                    </div>

                    {/* Check Indicator in Corner */}
                    <div
                      className={`absolute top-1 right-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected(tech.id)
                          ? 'border-blue-400 bg-blue-400 shadow-lg shadow-blue-500/50'
                          : 'border-gray-400/50 bg-slate-800/80'
                      }`}
                    >
                      {isSelected(tech.id) && (
                        <svg
                          className='w-3 h-3 text-white'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <title>Selected</title>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={3}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Technologies Summary */}

        <div className='mt-12'>
          <h3 id='projects' className='text-2xl font-bold text-blue-300 mb-8'>
            My Projects
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects
              .filter((project) => {
                // Show all projects if nothing is selected
                if (selected.size === 0) return true;
                // Filter projects that have at least one selected tag
                return project.data.tags.some((tag) => selected.has(tag));
              })
              .map((project) => {
                const [lang, slug] = project.id.split('/');

                return (
                  <a
                    key={project.id}
                    href={`/${lang}/project/${slug}`}
                    className='group relative rounded-lg overflow-hidden bg-linear-to-br from-blue-900/30 to-slate-800/30 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer'
                  >
                    {/* Cover Image */}
                    <div className='relative h-48 overflow-hidden bg-slate-900'>
                      <img
                        src={`/${project.data.cover}`}
                        alt={project.data.title}
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-50'
                      />
                      <div className='absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent' />
                    </div>

                    {/* Content */}
                    <div className='p-6 relative z-10'>
                      <h4 className='text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors'>
                        {project.data.title}
                      </h4>
                      <p className='text-gray-300 text-sm mb-4 line-clamp-3'>
                        {project.data.description}
                      </p>

                      {/* Tags */}
                      <div className='flex flex-wrap gap-2'>
                        {project.data.tags.map((tag) => {
                          const tech = categories
                            .flatMap((cat) => cat.items)
                            .find((item) => item.id === tag);
                          return (
                            <span
                              key={tag}
                              className={`px-2 py-1 text-xs font-medium rounded-full transition-all ${
                                selected.has(tag)
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-blue-900/30 text-blue-300 border border-blue-500/30'
                              }`}
                            >
                              {tech?.name}
                            </span>
                          );
                        })}{' '}
                      </div>
                    </div>
                  </a>
                );
              })}
          </div>

          {projects.filter((project) => {
            if (selected.size === 0) return true;
            return project.data.tags.some((tag) => selected.has(tag));
          }).length === 0 && (
            <div className='text-center py-12'>
              <p className='text-gray-400 text-lg'>
                No projects found for the selected technologies.
              </p>
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className='mt-12 bg-linear-to-r from-blue-900/30 to-slate-800/30 border border-blue-500/20 rounded-lg p-8'>
          <h3 className='text-xl font-bold text-blue-300 mb-4'>
            {t('whatIDo.title')}
          </h3>
          <ul className='text-gray-300 space-y-2'>
            <li className='flex items-start'>
              <span className='text-blue-400 mr-3'>✓</span>
              <span> {t('whatIDo.item1')}</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-400 mr-3'>✓</span>
              <span>{t('whatIDo.item2')}</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-400 mr-3'>✓</span>
              <span>{t('whatIDo.item3')}</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-400 mr-3'>✓</span>
              <span>{t('whatIDo.item4')}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
