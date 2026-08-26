import { useState, useEffect } from 'react';
import { translation, type Language } from '.';

export type SetLanguage = (language: Language) => void;

type Settings = {
  language: Language;
};

const getInitialSettings = (): Settings => {
  const savedSettings = localStorage.getItem("settings");

  if (savedSettings) {
    const parsedSettings = JSON.parse(savedSettings);

    if (parsedSettings.language in translation) {
      return parsedSettings;
    }
  }

  return {
    language: "en"
  };
};

export const useTranslation = () => {
  const [settings, setSettings] = useState<Settings>(getInitialSettings);
  const text = translation[settings.language];

  const setLanguage = (language: Language) => {
    setSettings(previousSettings => ({
      ...previousSettings,
      language
    }));
  };

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return { text, setLanguage };
};
