import {scaleFont} from './scaling';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'Roboto-Regular';
export const FONT_FAMILY_MEDIUM = 'Roboto-Medium';
export const FONT_FAMILY_BOLD = 'Roboto-Bold';
export const FONT_FAMILY_AR_REGULAR = 'TheMixArab-Regular';
export const FONT_FAMILY_AR_BOLD = 'TheMixArab-Bold';
export const FONT_FAMILY_AR_BOLD2 = 'TheMixArab-Bold2';

// FONT SIZE
const FONT_SIZE_10 = {fontSize: scaleFont(10)};
const FONT_SIZE_12 = {fontSize: scaleFont(12)};
const FONT_SIZE_13 = {fontSize: scaleFont(13)};
const FONT_SIZE_14 = {fontSize: scaleFont(14)};
const FONT_SIZE_15 = {fontSize: scaleFont(15)};
const FONT_SIZE_16 = {fontSize: scaleFont(16)};
const FONT_SIZE_17 = {fontSize: scaleFont(17)};
const FONT_SIZE_20 = {fontSize: scaleFont(20)};
const FONT_SIZE_25 = {fontSize: scaleFont(25)};
const FONT_SIZE_30 = {fontSize: scaleFont(30)};
const FONT_SIZE_40 = {fontSize: scaleFont(40)};

// LINE HEIGHT
const LINE_HEIGHT_16 = {lineHeight: scaleFont(16)};
const LINE_HEIGHT_18 = {lineHeight: scaleFont(18)};
const LINE_HEIGHT_20 = {lineHeight: scaleFont(20)};
const LINE_HEIGHT_24 = {lineHeight: scaleFont(24)};
const LINE_HEIGHT_46 = {lineHeight: scaleFont(46)};

// FONT STYLE
const FONT_REGULAR = {
  ar: {fontFamily: FONT_FAMILY_AR_REGULAR},
  en: {fontFamily: FONT_FAMILY_REGULAR},
};
const FONT_MEDIUM = {
  ar: {fontFamily: FONT_FAMILY_AR_BOLD2},
  en: {fontFamily: FONT_FAMILY_MEDIUM},
};
const FONT_BOLD = {
  ar: {fontFamily: FONT_FAMILY_AR_BOLD},
  en: {fontFamily: FONT_FAMILY_BOLD},
};

export default {
  FONT_REGULAR,
  FONT_BOLD,
  FONT_MEDIUM,
  FONT_SIZE_10,
  FONT_SIZE_12,
  FONT_SIZE_13,
  FONT_SIZE_14,
  FONT_SIZE_15,
  FONT_SIZE_16,
  FONT_SIZE_17,
  FONT_SIZE_20,
  FONT_SIZE_25,
  FONT_SIZE_30,
  FONT_SIZE_40,
  LINE_HEIGHT_16,
  LINE_HEIGHT_18,
  LINE_HEIGHT_20,
  LINE_HEIGHT_24,
  LINE_HEIGHT_46,
};
