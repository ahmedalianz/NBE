import React, {createContext, useState} from 'react';
import {I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';

export const LanguageContext = createContext({
  language: 'en',
  changeLanguage: language => {},
});

const LanguageContextProvider = ({children}) => {
  const {i18n} = useTranslation();
  const [language, setLanguage] = useState(I18nManager.isRTL ? 'ar' : 'en');
  const value = {
    changeLanguage: language => {
      i18n
        .changeLanguage(language)
        .then(() => I18nManager.forceRTL(language === 'ar'));
      setLanguage(language);
    },
    language: language,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageContextProvider;
