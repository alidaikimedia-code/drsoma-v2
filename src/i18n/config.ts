import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import locale JSON files
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enLipo from './locales/en/liposuction.json';

import idCommon from './locales/id/common.json';
import idHome from './locales/id/home.json';
import idLipo from './locales/id/liposuction.json';

import zhCNCommon from './locales/zh-CN/common.json';
import zhCNHome from './locales/zh-CN/home.json';
import zhCNLipo from './locales/zh-CN/liposuction.json';

import zhMYCommon from './locales/zh-MY/common.json';
import zhMYHome from './locales/zh-MY/home.json';
import zhMYLipo from './locales/zh-MY/liposuction.json';

import msCommon from './locales/ms/common.json';
import msHome from './locales/ms/home.json';
import msLipo from './locales/ms/liposuction.json';

import koCommon from './locales/ko/common.json';
import koHome from './locales/ko/home.json';
import koLipo from './locales/ko/liposuction.json';

// Supported locales configuration
export const locales = [
  { code: 'en', urlPrefix: '', name: 'English', shortName: 'EN', flag: '🇬🇧' },
  { code: 'id', urlPrefix: 'id', name: 'Indonesia', shortName: 'ID', flag: '🇮🇩' },
  { code: 'zh-CN', urlPrefix: 'zh-cn', name: '中文 (中国)', shortName: 'CN', flag: '🇨🇳' },
  { code: 'zh-MY', urlPrefix: 'zh-my', name: '中文 (马来西亚)', shortName: 'MY', flag: '🇲🇾' },
  { code: 'ms', urlPrefix: 'ms', name: 'Bahasa Melayu', shortName: 'MS', flag: '🇲🇾' },
  { code: 'ko', urlPrefix: 'ko', name: '한국어', shortName: 'KO', flag: '🇰🇷' },
];

// Get locale from URL path
export function getLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    const firstSegment = segments[0].toLowerCase();
    const locale = locales.find(l => l.urlPrefix === firstSegment);
    if (locale) return locale.code;
  }
  return 'en';
}

// Strip locale prefix from path
export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    const firstSegment = segments[0].toLowerCase();
    const locale = locales.find(l => l.urlPrefix && l.urlPrefix === firstSegment);
    if (locale) {
      const rest = segments.slice(1).join('/');
      return '/' + (rest ? rest + '/' : '');
    }
  }
  return pathname;
}

// Build localized path
export function getLocalizedPath(path: string, localeCode: string): string {
  const locale = locales.find(l => l.code === localeCode);
  if (!locale || !locale.urlPrefix) return path;
  const cleanPath = stripLocaleFromPath(path);
  return `/${locale.urlPrefix}${cleanPath}`;
}

// Bundled translations from JSON files
const resources = {
  en: {
    translation: { ...enCommon, ...enHome, ...enLipo },
  },
  id: {
    translation: { ...idCommon, ...idHome, ...idLipo },
  },
  'zh-CN': {
    translation: { ...zhCNCommon, ...zhCNHome, ...zhCNLipo },
  },
  'zh-MY': {
    translation: { ...zhMYCommon, ...zhMYHome, ...zhMYLipo },
  },
  ms: {
    translation: { ...msCommon, ...msHome, ...msLipo },
  },
  ko: {
    translation: { ...koCommon, ...koHome, ...koLipo },
  },
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
