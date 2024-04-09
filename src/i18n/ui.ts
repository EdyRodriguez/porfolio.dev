import en from './languages/en.json';
import fr from './languages/fr.json';
import es from './languages/es.json';

export const languages = {
    en: 'English',
    fr: 'Français',
  };

  export const defaultLang = 'en';

  export const ui = {
    en,
    fr,
    es,
  } as const;