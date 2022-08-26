import {StyleSheet, I18nManager} from 'react-native';
import {Scaling, Typography} from '../../../constants';

export default StyleSheet.create({
  animatedStyle: {
    top: 15,
    left: 65,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 2,
  },
  inputContainer: {
    borderWidth: 1.5,
    borderRadius: 10,
    height: 65,
  },
  label: [Typography.FONT_SIZE_14, Typography.FONT_BOLD],
  inputIcon: {width: 20, height: 22, marginLeft: Scaling.scale(20)},
  inputText: [
    {
      marginLeft: Scaling.scale(20),
      textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    Typography.FONT_SIZE_16,
    Typography.FONT_REGULAR,
  ],
});
