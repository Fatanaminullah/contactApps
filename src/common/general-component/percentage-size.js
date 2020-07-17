import { Dimensions, PixelRatio, Platform } from 'react-native';

const widthPercentageToDP = (widthPercent) => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightPercentageToDP = (heightPercent) => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};
const normalize = (size) => {
  const {
    width: SCREEN_WIDTH,
  } = Dimensions.get('window');
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 320;

  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};
export {
  widthPercentageToDP,
  heightPercentageToDP,
  normalize,
};