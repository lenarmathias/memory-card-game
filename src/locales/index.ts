import { en } from './en';
import { pl } from './pl';

export const translation = {
  en,
  pl
};

export type { Translation } from './en';
export type Language = keyof typeof translation;
