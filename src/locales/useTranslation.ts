import { useState } from 'react';
import { translation, type Language } from '.';

export type SetLanguage = (language: Language) => void;

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>("en");
  const text = translation[language];

  return { text, setLanguage };
};
