import { translation, type Language } from '.';
import type { Settings, SetSettings } from '../useLocalSettings';

export type SetLanguage = (language: Language) => void;

export const useTranslation = (
  settings: Settings,
  setSettings: SetSettings
) => {
  const text = translation[settings.language];

  const setLanguage = (language: Language) => {
    setSettings(previousSettings => ({
      ...previousSettings,
      language
    }));
  };

  return { text, setLanguage };
};
