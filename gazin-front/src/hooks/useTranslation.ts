import React, { Dispatch, SetStateAction, useContext, useState } from 'react';

import {
  LanguageContext,
  defaultLocale,
  locales,
} from '../contexts/LanguageContext';

export const useTranslation = (LangStrings: {
  [x: string]: { [x: string]: any };
}) => {
  // const [locale, setLocale] = useContext(LanguageContext);
  const locale = 'pt';

  const setLocale: Dispatch<SetStateAction<any[]>> | any = [];

  function t(key: string) {
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || '';
  }

  return { t, locale, setLocale, locales };
};
