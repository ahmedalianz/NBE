import {Dimensions, Platform, PixelRatio} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const guidelineBaseWidth = 350;
export const guidelineBaseHeight = 680;

const widthRatio = width / guidelineBaseWidth;
const heightRatio = height / guidelineBaseHeight;

const scale = size => widthRatio * size;
const verticalScale = size => heightRatio * size;
export const scaleFont = size => {
  const newSize = size * widthRatio;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
const defaultModerateFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

const moderateScale = (size, factor = defaultModerateFactor) =>
  size + (scale(size) - size) * factor;
export default {
  scale,
  verticalScale,
  moderateScale,
};
