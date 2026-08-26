import { useState, useEffect } from 'react';
import { translation, type Language } from './locales';

export type Settings = {
  language: Language;
};

export type SetSettings = (
  settings: Settings | ((previousSettings: Settings) => Settings)
) => void;

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

export const useLocalSettings = () => {
  const [settings, setSettings] = useState<Settings>(getInitialSettings);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return { settings, setSettings };
};
