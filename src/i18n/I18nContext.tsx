"use client";

import { createContext, useContext, useState, useMemo } from 'react';
import { getDict, languages, type LangCode } from './translations';

type I18nContextType = {
  language: LangCode;
  setLanguage: (code: LangCode) => void;
  t: (path: string) => string;
  languages: { code: LangCode; name: string }[];
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LangCode>('en');
  const dict = useMemo(() => getDict(language), [language]);

  function t(path: string) {
    const parts = path.split('.');
    let cur: unknown = dict as unknown;
    for (const p of parts) {
      if (typeof cur === 'object' && cur !== null && p in (cur as Record<string, unknown>)) {
        cur = (cur as Record<string, unknown>)[p];
      } else {
        cur = undefined;
        break;
      }
    }
    return typeof cur === 'string' ? cur : path;
  }

  const value: I18nContextType = {
    language,
    setLanguage,
    t,
    languages,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}