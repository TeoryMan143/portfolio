/**
 * Studies Data
 * 
 * Non-translatable study data (IDs, dates, certificates)
 * Translatable content (institution, degree, field, description) is managed in src/i18n/ui.ts
 * 
 * To add a new study:
 * 1. Add entry here with unique ID, dates, and certificate info
 * 2. Add corresponding translations in src/i18n/ui.ts with keys like:
 *    - 'studies.{id}.institution'
 *    - 'studies.{id}.degree'
 *    - 'studies.{id}.field'
 *    - 'studies.{id}.description'
 */

export interface Study {
  id: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  certificateUrl?: string;
  certificateName?: string;
}

export const studies: Study[] = [
  {
    id: 'sena-dev',
    startDate: '2022',
    endDate: '2024',
    certificateUrl: '/certificates/sena-cert.pdf',
    certificateName: 'sena-jonahtan.pdf',
  },
  {
    id: 'icesi-se',
    startDate: '2024',
    endDate: '2028',
    isCurrent: true
  }
];
