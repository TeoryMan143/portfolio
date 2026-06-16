import { useState } from 'react';
import { useColumnsAnimation } from '../hooks/useColumnsAnimation';
import { useSplitTextAnimation } from '../hooks/useSplitTextAnimation';

interface Technology {
  id: string;
  name: string;
}

interface TechnologyCategory {
  title: string;
  items: Technology[];
}

function TechnologiesSection() {
  const categories: TechnologyCategory[] = [
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
      ],
    },
  ];

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

  return (
    <section id='technologies' className='py-20 px-4 bg-slate-800'>
      <div className='max-w-6xl mx-auto'>
        <div ref={titleRef} className='text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            {/* data-split tells the hook which spans to animate */}
            <span data-split='plain'>Technologies &amp; </span>
            <span data-split='gradient'>Skills</span>
          </h2>
        </div>
        <div ref={pRef} className='text-center mb-16'>
          <p data-split='plain' className='text-gray-300 text-lg'>
            Here's what I work with to create amazing experiences
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
              <div className='grid grid-cols-3 gap-3'>
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
                    {/* Logo Placeholder Box */}
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

        <div className='bg-linear-to-r from-blue-900/30 to-slate-800/30 border border-blue-500/20 rounded-lg p-6'>
          <span className='text-lg font-bold text-blue-300 mb-3 mr-5'>
            Selected ({selected.size}):
          </span>
          <div className='inline-flex flex-wrap gap-2'>
            {Array.from(selected).map((id) => {
              // Find the technology name
              const tech = categories
                .flatMap((cat) => cat.items)
                .find((item) => item.id === id);
              return (
                <span
                  key={id}
                  className='px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium'
                >
                  {tech?.name}
                </span>
              );
            })}
          </div>
          <p className='text-gray-400 text-sm mt-4'>
            Selected array: {JSON.stringify(Array.from(selected))}
          </p>
        </div>

        {/* Summary Section */}
        <div className='mt-12 bg-linear-to-r from-blue-900/30 to-slate-800/30 border border-blue-500/20 rounded-lg p-8'>
          <h3 className='text-xl font-bold text-blue-300 mb-4'>What I Do</h3>
          <ul className='text-gray-300 space-y-2'>
            <li className='flex items-start'>
              <span className='text-blue-400 mr-3'>✓</span>
              <span>Build responsive and accessible web applications</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-400 mr-3'>✓</span>
              <span>
                Design modern user interfaces with great UX principles
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-400 mr-3'>✓</span>
              <span>
                Develop full-stack solutions from concept to deployment
              </span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-400 mr-3'>✓</span>
              <span>
                Collaborate with teams to deliver high-quality products
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
