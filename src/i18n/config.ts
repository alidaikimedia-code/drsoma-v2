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
import enMiniTummyTuck from './locales/en/mini-tummy-tuck.json';
import enArmLift from './locales/en/arm-lift.json';
import enThighLift from './locales/en/thigh-lift.json';
import enBodyLift from './locales/en/body-lift.json';
import enBeltLipo from './locales/en/belt-lipectomy.json';
import enFatTransfer from './locales/en/fat-transfer.json';
import enButtockFat from './locales/en/fat-grafting-buttock.json';
import enSixPack from './locales/en/six-pack-enhancement.json';
import enBodyHub from './locales/en/body-hub.json';

import idCommon from './locales/id/common.json';
import idHome from './locales/id/home.json';
import idLipo from './locales/id/liposuction.json';
import idArmLipo from './locales/id/liposuction-arms.json';
import idStomachLipo from './locales/id/liposuction-stomach.json';
import idThighLipo from './locales/id/liposuction-thighs.json';
import idBackLipo from './locales/id/liposuction-back.json';
import idChinLipo from './locales/id/liposuction-chin.json';
import idTummyTuck from './locales/id/tummy-tuck.json';
import idMiniTummyTuck from './locales/id/mini-tummy-tuck.json';
import idArmLift from './locales/id/arm-lift.json';
import idThighLift from './locales/id/thigh-lift.json';
import idBodyLift from './locales/id/body-lift.json';
import idBeltLipo from './locales/id/belt-lipectomy.json';
import idFatTransfer from './locales/id/fat-transfer.json';
import idButtockFat from './locales/id/fat-grafting-buttock.json';
import idSixPack from './locales/id/six-pack-enhancement.json';
import idBodyHub from './locales/id/body-hub.json';

import zhCNCommon from './locales/zh-CN/common.json';
import zhCNHome from './locales/zh-CN/home.json';
import zhCNLipo from './locales/zh-CN/liposuction.json';
import zhCNArmLipo from './locales/zh-CN/liposuction-arms.json';
import zhCNStomachLipo from './locales/zh-CN/liposuction-stomach.json';
import zhCNThighLipo from './locales/zh-CN/liposuction-thighs.json';
import zhCNBackLipo from './locales/zh-CN/liposuction-back.json';
import zhCNChinLipo from './locales/zh-CN/liposuction-chin.json';
import zhCNTummyTuck from './locales/zh-CN/tummy-tuck.json';
import zhCNMiniTummyTuck from './locales/zh-CN/mini-tummy-tuck.json';
import zhCNArmLift from './locales/zh-CN/arm-lift.json';
import zhCNThighLift from './locales/zh-CN/thigh-lift.json';
import zhCNBodyLift from './locales/zh-CN/body-lift.json';
import zhCNBeltLipo from './locales/zh-CN/belt-lipectomy.json';
import zhCNFatTransfer from './locales/zh-CN/fat-transfer.json';
import zhCNButtockFat from './locales/zh-CN/fat-grafting-buttock.json';
import zhCNSixPack from './locales/zh-CN/six-pack-enhancement.json';
import zhCNBodyHub from './locales/zh-CN/body-hub.json';

import zhMYCommon from './locales/zh-MY/common.json';
import zhMYHome from './locales/zh-MY/home.json';
import zhMYLipo from './locales/zh-MY/liposuction.json';
import zhMYArmLipo from './locales/zh-MY/liposuction-arms.json';
import zhMYStomachLipo from './locales/zh-MY/liposuction-stomach.json';
import zhMYThighLipo from './locales/zh-MY/liposuction-thighs.json';
import zhMYBackLipo from './locales/zh-MY/liposuction-back.json';
import zhMYChinLipo from './locales/zh-MY/liposuction-chin.json';
import zhMYTummyTuck from './locales/zh-MY/tummy-tuck.json';
import zhMYMiniTummyTuck from './locales/zh-MY/mini-tummy-tuck.json';
import zhMYArmLift from './locales/zh-MY/arm-lift.json';
import zhMYThighLift from './locales/zh-MY/thigh-lift.json';
import zhMYBodyLift from './locales/zh-MY/body-lift.json';
import zhMYBeltLipo from './locales/zh-MY/belt-lipectomy.json';
import zhMYFatTransfer from './locales/zh-MY/fat-transfer.json';
import zhMYButtockFat from './locales/zh-MY/fat-grafting-buttock.json';
import zhMYSixPack from './locales/zh-MY/six-pack-enhancement.json';
import zhMYBodyHub from './locales/zh-MY/body-hub.json';

import msCommon from './locales/ms/common.json';
import msHome from './locales/ms/home.json';
import msLipo from './locales/ms/liposuction.json';
import msArmLipo from './locales/ms/liposuction-arms.json';
import msStomachLipo from './locales/ms/liposuction-stomach.json';
import msThighLipo from './locales/ms/liposuction-thighs.json';
import msBackLipo from './locales/ms/liposuction-back.json';
import msChinLipo from './locales/ms/liposuction-chin.json';
import msTummyTuck from './locales/ms/tummy-tuck.json';
import msMiniTummyTuck from './locales/ms/mini-tummy-tuck.json';
import msArmLift from './locales/ms/arm-lift.json';
import msThighLift from './locales/ms/thigh-lift.json';
import msBodyLift from './locales/ms/body-lift.json';
import msBeltLipo from './locales/ms/belt-lipectomy.json';
import msFatTransfer from './locales/ms/fat-transfer.json';
import msButtockFat from './locales/ms/fat-grafting-buttock.json';
import msSixPack from './locales/ms/six-pack-enhancement.json';
import msBodyHub from './locales/ms/body-hub.json';

import koCommon from './locales/ko/common.json';
import koHome from './locales/ko/home.json';
import koLipo from './locales/ko/liposuction.json';
import koArmLipo from './locales/ko/liposuction-arms.json';
import koStomachLipo from './locales/ko/liposuction-stomach.json';
import koThighLipo from './locales/ko/liposuction-thighs.json';
import koBackLipo from './locales/ko/liposuction-back.json';
import koChinLipo from './locales/ko/liposuction-chin.json';
import koTummyTuck from './locales/ko/tummy-tuck.json';
import koMiniTummyTuck from './locales/ko/mini-tummy-tuck.json';
import koArmLift from './locales/ko/arm-lift.json';
import koThighLift from './locales/ko/thigh-lift.json';
import koBodyLift from './locales/ko/body-lift.json';
import koBeltLipo from './locales/ko/belt-lipectomy.json';
import koFatTransfer from './locales/ko/fat-transfer.json';
import koButtockFat from './locales/ko/fat-grafting-buttock.json';
import koSixPack from './locales/ko/six-pack-enhancement.json';
import koBodyHub from './locales/ko/body-hub.json';

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
    translation: { ...enCommon, ...enHome, ...enLipo, ...enArmLipo, ...enStomachLipo, ...enThighLipo, ...enBackLipo, ...enChinLipo, ...enTummyTuck, ...enMiniTummyTuck, ...enArmLift, ...enThighLift, ...enBodyLift, ...enBeltLipo, ...enFatTransfer, ...enButtockFat, ...enSixPack, ...enBodyHub },
  },
  id: {
    translation: { ...idCommon, ...idHome, ...idLipo, ...idArmLipo, ...idStomachLipo, ...idThighLipo, ...idBackLipo, ...idChinLipo, ...idTummyTuck, ...idMiniTummyTuck, ...idArmLift, ...idThighLift, ...idBodyLift, ...idBeltLipo, ...idFatTransfer, ...idButtockFat, ...idSixPack, ...idBodyHub },
  },
  'zh-CN': {
    translation: { ...zhCNCommon, ...zhCNHome, ...zhCNLipo, ...zhCNArmLipo, ...zhCNStomachLipo, ...zhCNThighLipo, ...zhCNBackLipo, ...zhCNChinLipo, ...zhCNTummyTuck, ...zhCNMiniTummyTuck, ...zhCNArmLift, ...zhCNThighLift, ...zhCNBodyLift, ...zhCNBeltLipo, ...zhCNFatTransfer, ...zhCNButtockFat, ...zhCNSixPack, ...zhCNBodyHub },
  },
  'zh-MY': {
    translation: { ...zhMYCommon, ...zhMYHome, ...zhMYLipo, ...zhMYArmLipo, ...zhMYStomachLipo, ...zhMYThighLipo, ...zhMYBackLipo, ...zhMYChinLipo, ...zhMYTummyTuck, ...zhMYMiniTummyTuck, ...zhMYArmLift, ...zhMYThighLift, ...zhMYBodyLift, ...zhMYBeltLipo, ...zhMYFatTransfer, ...zhMYButtockFat, ...zhMYSixPack, ...zhMYBodyHub },
  },
  ms: {
    translation: { ...msCommon, ...msHome, ...msLipo, ...msArmLipo, ...msStomachLipo, ...msThighLipo, ...msBackLipo, ...msChinLipo, ...msTummyTuck, ...msMiniTummyTuck, ...msArmLift, ...msThighLift, ...msBodyLift, ...msBeltLipo, ...msFatTransfer, ...msButtockFat, ...msSixPack, ...msBodyHub },
  },
  ko: {
    translation: { ...koCommon, ...koHome, ...koLipo, ...koArmLipo, ...koStomachLipo, ...koThighLipo, ...koBackLipo, ...koChinLipo, ...koTummyTuck, ...koMiniTummyTuck, ...koArmLift, ...koThighLift, ...koBodyLift, ...koBeltLipo, ...koFatTransfer, ...koButtockFat, ...koSixPack, ...koBodyHub },
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
