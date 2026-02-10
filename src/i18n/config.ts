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
import enFaceHub from './locales/en/face-hub.json';
import enRhino from './locales/en/rhinoplasty.json';
import enAsianRhino from './locales/en/asian-rhinoplasty.json';
import enRevRhino from './locales/en/rhinoplasty-revision.json';
import enEyelid from './locales/en/eyelid-surgery.json';
import enAsianEyelid from './locales/en/asian-eyelid-surgery.json';
import enBrowLift from './locales/en/brow-lift.json';
import enFaceLift from './locales/en/face-lift.json';
import enNeckLift from './locales/en/neck-lift.json';
import enBuccalFat from './locales/en/buccal-fat-removal.json';
import enChinAug from './locales/en/chin-augmentation.json';

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
import idFaceHub from './locales/id/face-hub.json';
import idRhino from './locales/id/rhinoplasty.json';
import idAsianRhino from './locales/id/asian-rhinoplasty.json';
import idRevRhino from './locales/id/rhinoplasty-revision.json';
import idEyelid from './locales/id/eyelid-surgery.json';
import idAsianEyelid from './locales/id/asian-eyelid-surgery.json';
import idBrowLift from './locales/id/brow-lift.json';
import idFaceLift from './locales/id/face-lift.json';
import idNeckLift from './locales/id/neck-lift.json';
import idBuccalFat from './locales/id/buccal-fat-removal.json';
import idChinAug from './locales/id/chin-augmentation.json';

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
import zhCNFaceHub from './locales/zh-CN/face-hub.json';
import zhCNRhino from './locales/zh-CN/rhinoplasty.json';
import zhCNAsianRhino from './locales/zh-CN/asian-rhinoplasty.json';
import zhCNRevRhino from './locales/zh-CN/rhinoplasty-revision.json';
import zhCNEyelid from './locales/zh-CN/eyelid-surgery.json';
import zhCNAsianEyelid from './locales/zh-CN/asian-eyelid-surgery.json';
import zhCNBrowLift from './locales/zh-CN/brow-lift.json';
import zhCNFaceLift from './locales/zh-CN/face-lift.json';
import zhCNNeckLift from './locales/zh-CN/neck-lift.json';
import zhCNBuccalFat from './locales/zh-CN/buccal-fat-removal.json';
import zhCNChinAug from './locales/zh-CN/chin-augmentation.json';

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
import zhMYFaceHub from './locales/zh-MY/face-hub.json';
import zhMYRhino from './locales/zh-MY/rhinoplasty.json';
import zhMYAsianRhino from './locales/zh-MY/asian-rhinoplasty.json';
import zhMYRevRhino from './locales/zh-MY/rhinoplasty-revision.json';
import zhMYEyelid from './locales/zh-MY/eyelid-surgery.json';
import zhMYAsianEyelid from './locales/zh-MY/asian-eyelid-surgery.json';
import zhMYBrowLift from './locales/zh-MY/brow-lift.json';
import zhMYFaceLift from './locales/zh-MY/face-lift.json';
import zhMYNeckLift from './locales/zh-MY/neck-lift.json';
import zhMYBuccalFat from './locales/zh-MY/buccal-fat-removal.json';
import zhMYChinAug from './locales/zh-MY/chin-augmentation.json';

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
import msFaceHub from './locales/ms/face-hub.json';
import msRhino from './locales/ms/rhinoplasty.json';
import msAsianRhino from './locales/ms/asian-rhinoplasty.json';
import msRevRhino from './locales/ms/rhinoplasty-revision.json';
import msEyelid from './locales/ms/eyelid-surgery.json';
import msAsianEyelid from './locales/ms/asian-eyelid-surgery.json';
import msBrowLift from './locales/ms/brow-lift.json';
import msFaceLift from './locales/ms/face-lift.json';
import msNeckLift from './locales/ms/neck-lift.json';
import msBuccalFat from './locales/ms/buccal-fat-removal.json';
import msChinAug from './locales/ms/chin-augmentation.json';

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
import koFaceHub from './locales/ko/face-hub.json';
import koRhino from './locales/ko/rhinoplasty.json';
import koAsianRhino from './locales/ko/asian-rhinoplasty.json';
import koRevRhino from './locales/ko/rhinoplasty-revision.json';
import koEyelid from './locales/ko/eyelid-surgery.json';
import koAsianEyelid from './locales/ko/asian-eyelid-surgery.json';
import koBrowLift from './locales/ko/brow-lift.json';
import koFaceLift from './locales/ko/face-lift.json';
import koNeckLift from './locales/ko/neck-lift.json';
import koBuccalFat from './locales/ko/buccal-fat-removal.json';
import koChinAug from './locales/ko/chin-augmentation.json';

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
    translation: { ...enCommon, ...enHome, ...enLipo, ...enArmLipo, ...enStomachLipo, ...enThighLipo, ...enBackLipo, ...enChinLipo, ...enTummyTuck, ...enMiniTummyTuck, ...enArmLift, ...enThighLift, ...enBodyLift, ...enBeltLipo, ...enFatTransfer, ...enButtockFat, ...enSixPack, ...enBodyHub, ...enFaceHub, ...enRhino, ...enAsianRhino, ...enRevRhino, ...enEyelid, ...enAsianEyelid, ...enBrowLift, ...enFaceLift, ...enNeckLift, ...enBuccalFat, ...enChinAug },
  },
  id: {
    translation: { ...idCommon, ...idHome, ...idLipo, ...idArmLipo, ...idStomachLipo, ...idThighLipo, ...idBackLipo, ...idChinLipo, ...idTummyTuck, ...idMiniTummyTuck, ...idArmLift, ...idThighLift, ...idBodyLift, ...idBeltLipo, ...idFatTransfer, ...idButtockFat, ...idSixPack, ...idBodyHub, ...idFaceHub, ...idRhino, ...idAsianRhino, ...idRevRhino, ...idEyelid, ...idAsianEyelid, ...idBrowLift, ...idFaceLift, ...idNeckLift, ...idBuccalFat, ...idChinAug },
  },
  'zh-CN': {
    translation: { ...zhCNCommon, ...zhCNHome, ...zhCNLipo, ...zhCNArmLipo, ...zhCNStomachLipo, ...zhCNThighLipo, ...zhCNBackLipo, ...zhCNChinLipo, ...zhCNTummyTuck, ...zhCNMiniTummyTuck, ...zhCNArmLift, ...zhCNThighLift, ...zhCNBodyLift, ...zhCNBeltLipo, ...zhCNFatTransfer, ...zhCNButtockFat, ...zhCNSixPack, ...zhCNBodyHub, ...zhCNFaceHub, ...zhCNRhino, ...zhCNAsianRhino, ...zhCNRevRhino, ...zhCNEyelid, ...zhCNAsianEyelid, ...zhCNBrowLift, ...zhCNFaceLift, ...zhCNNeckLift, ...zhCNBuccalFat, ...zhCNChinAug },
  },
  'zh-MY': {
    translation: { ...zhMYCommon, ...zhMYHome, ...zhMYLipo, ...zhMYArmLipo, ...zhMYStomachLipo, ...zhMYThighLipo, ...zhMYBackLipo, ...zhMYChinLipo, ...zhMYTummyTuck, ...zhMYMiniTummyTuck, ...zhMYArmLift, ...zhMYThighLift, ...zhMYBodyLift, ...zhMYBeltLipo, ...zhMYFatTransfer, ...zhMYButtockFat, ...zhMYSixPack, ...zhMYBodyHub, ...zhMYFaceHub, ...zhMYRhino, ...zhMYAsianRhino, ...zhMYRevRhino, ...zhMYEyelid, ...zhMYAsianEyelid, ...zhMYBrowLift, ...zhMYFaceLift, ...zhMYNeckLift, ...zhMYBuccalFat, ...zhMYChinAug },
  },
  ms: {
    translation: { ...msCommon, ...msHome, ...msLipo, ...msArmLipo, ...msStomachLipo, ...msThighLipo, ...msBackLipo, ...msChinLipo, ...msTummyTuck, ...msMiniTummyTuck, ...msArmLift, ...msThighLift, ...msBodyLift, ...msBeltLipo, ...msFatTransfer, ...msButtockFat, ...msSixPack, ...msBodyHub, ...msFaceHub, ...msRhino, ...msAsianRhino, ...msRevRhino, ...msEyelid, ...msAsianEyelid, ...msBrowLift, ...msFaceLift, ...msNeckLift, ...msBuccalFat, ...msChinAug },
  },
  ko: {
    translation: { ...koCommon, ...koHome, ...koLipo, ...koArmLipo, ...koStomachLipo, ...koThighLipo, ...koBackLipo, ...koChinLipo, ...koTummyTuck, ...koMiniTummyTuck, ...koArmLift, ...koThighLift, ...koBodyLift, ...koBeltLipo, ...koFatTransfer, ...koButtockFat, ...koSixPack, ...koBodyHub, ...koFaceHub, ...koRhino, ...koAsianRhino, ...koRevRhino, ...koEyelid, ...koAsianEyelid, ...koBrowLift, ...koFaceLift, ...koNeckLift, ...koBuccalFat, ...koChinAug },
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
