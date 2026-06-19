import type { Study } from '../data/studies';
import { useStudiesAnimation } from '../hooks/useStudiesAnimation';
import type { Locale } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';

interface Props {
  studies: Study[];
  lang: Locale;
}

export function Studies({ studies, lang }: Props) {
  const containerRef = useStudiesAnimation();
  const t = useTranslations(lang);

  // Sort studies by end date (newest first)
  const sortedStudies = [...studies].sort(
    (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime(),
  );

  return (
    <section id='studies' className='py-20 px-4 bg-slate-900'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300'>
              {t('studies.title')}
            </span>
            &amp; {t('studies.studies')}
          </h2>
          <p className='text-gray-300 text-lg'>{t('studies.subtitle')}</p>
        </div>

        <div ref={containerRef} className='relative pl-12'>
          <div className='absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 to-cyan-500'></div>

          <div className='space-y-12'>
            {sortedStudies.map((study, index) => (
              <div key={study.id} className='relative study-item'>
                <div
                  className={`absolute left-0 top-6 w-4 h-4 rounded-full border-4 border-slate-900 transform -translate-x-2.5 ${
                    index % 2 === 0 ? 'bg-blue-500' : 'bg-cyan-500'
                  }`}
                />

                <div
                  className={`bg-linear-to-br rounded-lg p-6 transition-all duration-300 ${
                    study.isCurrent
                      ? 'from-blue-500/30 to-cyan-500/20 border-2 border-cyan-400 shadow-lg shadow-cyan-500/20'
                      : 'from-blue-900/30 to-slate-800/30 border border-blue-500/20 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10'
                  }`}
                >
                  <div className='flex items-center justify-between mb-2'>
                    <p className='text-blue-300 text-sm font-semibold'>
                      {study.startDate} -{' '}
                      {study.isCurrent ? 'Present' : study.endDate}
                    </p>
                    {study.isCurrent && (
                      <span className='inline-flex items-center gap-1 px-2 py-1 bg-cyan-500/30 border border-cyan-400 rounded-full text-xs font-semibold text-cyan-300 animate-pulse'>
                        <span className='w-2 h-2 rounded-full bg-cyan-400' />
                        {t('studies.inProgress')}
                      </span>
                    )}
                  </div>

                  <h3 className='text-xl font-bold text-white mb-1'>
                    {t(`studies.${study.id}.institution` as any)}
                  </h3>

                  <p className='text-lg text-cyan-300 font-semibold mb-3'>
                    {t(`studies.${study.id}.degree` as any)} {t(`studies.in`)}{' '}
                    {t(`studies.${study.id}.field` as any)}
                  </p>

                  {t(`studies.${study.id}.description` as any) && (
                    <p className='text-gray-300 mb-4 leading-relaxed'>
                      {t(`studies.${study.id}.description` as any)}
                    </p>
                  )}

                  {study.certificateUrl && (
                    <a
                      href={study.certificateUrl}
                      download={study.certificateName}
                      className='inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='1em'
                        height='1em'
                        viewBox='0 0 24 24'
                        className='text-2xl'
                      >
                        <title>Download</title>
                        <path
                          fill='currentColor'
                          d='m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z'
                        ></path>
                      </svg>
                      {t('studies.downloadCert')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
