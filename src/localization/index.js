import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

import en from './en.json';
import ar from './ar.json';

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async callback => {
    const selectLanguage = 'en';
    console.log('detect - selectLanguage:', selectLanguage);
    callback(selectLanguage);
  },
  cacheUserLanguage: () => {},
};

const resources = {
  en: {translation: en},
  ar: {translation: ar},
};

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: I18nManager.isRTL ? 'ar' : 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
