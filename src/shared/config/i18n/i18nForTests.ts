import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: { en: { translations: {} } },
});

// eslint-disable-next-line import/no-default-export
export default i18n;
