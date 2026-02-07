import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import locale JSON files
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enLipo from './locales/en/liposuction.json';
import enArmLipo from './locales/en/liposuction-arms.json';
import enStomachLipo from './locales/en/liposuction-stomach.json';
import enThighLipo from './locales/en/liposuction-thighs.json';
import enBackLipo from './locales/en/liposuction-back.json';
import enChinLipo from './locales/en/liposuction-chin.json';
import enTummyTuck from './locales/en/tummy-tuck.json';

import idCommon from './locales/id/common.json';
import idHome from './locales/id/home.json';
import idLipo from './locales/id/liposuction.json';
import idArmLipo from './locales/id/liposuction-arms.json';
import idStomachLipo from './locales/id/liposuction-stomach.json';
import idThighLipo from './locales/id/liposuction-thighs.json';
import idBackLipo from './locales/id/liposuction-back.json';
import idChinLipo from './locales/id/liposuction-chin.json';
import idTummyTuck from './locales/id/tummy-tuck.json';

import zhCNCommon from './locales/zh-CN/common.json';
import zhCNHome from './locales/zh-CN/home.json';
import zhCNLipo from './locales/zh-CN/liposuction.json';
import zhCNArmLipo from './locales/zh-CN/liposuction-arms.json';
import zhCNStomachLipo from './locales/zh-CN/liposuction-stomach.json';
import zhCNThighLipo from './locales/zh-CN/liposuction-thighs.json';
import zhCNBackLipo from './locales/zh-CN/liposuction-back.json';
import zhCNChinLipo from './locales/zh-CN/liposuction-chin.json';
import zhCNTummyTuck from './locales/zh-CN/tummy-tuck.json';

import zhMYCommon from './locales/zh-MY/common.json';
import zhMYHome from './locales/zh-MY/home.json';
import zhMYLipo from './locales/zh-MY/liposuction.json';
import zhMYArmLipo from './locales/zh-MY/liposuction-arms.json';
import zhMYStomachLipo from './locales/zh-MY/liposuction-stomach.json';
import zhMYThighLipo from './locales/zh-MY/liposuction-thighs.json';
import zhMYBackLipo from './locales/zh-MY/liposuction-back.json';
import zhMYChinLipo from './locales/zh-MY/liposuction-chin.json';
import zhMYTummyTuck from './locales/zh-MY/tummy-tuck.json';

import msCommon from './locales/ms/common.json';
import msHome from './locales/ms/home.json';
import msLipo from './locales/ms/liposuction.json';
import msArmLipo from './locales/ms/liposuction-arms.json';
import msStomachLipo from './locales/ms/liposuction-stomach.json';
import msThighLipo from './locales/ms/liposuction-thighs.json';
import msBackLipo from './locales/ms/liposuction-back.json';
import msChinLipo from './locales/ms/liposuction-chin.json';
import msTummyTuck from './locales/ms/tummy-tuck.json';

import koCommon from './locales/ko/common.json';
import koHome from './locales/ko/home.json';
import koLipo from './locales/ko/liposuction.json';
import koArmLipo from './locales/ko/liposuction-arms.json';
import koStomachLipo from './locales/ko/liposuction-stomach.json';
import koThighLipo from './locales/ko/liposuction-thighs.json';
import koBackLipo from './locales/ko/liposuction-back.json';
import koChinLipo from './locales/ko/liposuction-chin.json';
import koTummyTuck from './locales/ko/tummy-tuck.json';

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
    translation: { ...enCommon, ...enHome, ...enLipo, ...enArmLipo, ...enStomachLipo, ...enThighLipo, ...enBackLipo, ...enChinLipo, ...enTummyTuck },
  },
  id: {
    translation: { ...idCommon, ...idHome, ...idLipo, ...idArmLipo, ...idStomachLipo, ...idThighLipo, ...idBackLipo, ...idChinLipo, ...idTummyTuck },
  },
  'zh-CN': {
    translation: { ...zhCNCommon, ...zhCNHome, ...zhCNLipo, ...zhCNArmLipo, ...zhCNStomachLipo, ...zhCNThighLipo, ...zhCNBackLipo, ...zhCNChinLipo, ...zhCNTummyTuck },
  },
  'zh-MY': {
    translation: { ...zhMYCommon, ...zhMYHome, ...zhMYLipo, ...zhMYArmLipo, ...zhMYStomachLipo, ...zhMYThighLipo, ...zhMYBackLipo, ...zhMYChinLipo, ...zhMYTummyTuck },
  },
  ms: {
    translation: { ...msCommon, ...msHome, ...msLipo, ...msArmLipo, ...msStomachLipo, ...msThighLipo, ...msBackLipo, ...msChinLipo, ...msTummyTuck },
  },
  ko: {
    translation: { ...koCommon, ...koHome, ...koLipo, ...koArmLipo, ...koStomachLipo, ...koThighLipo, ...koBackLipo, ...koChinLipo, ...koTummyTuck },
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
