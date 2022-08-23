import {StyleSheet, I18nManager} from 'react-native';
import {Scaling} from '../../../constants';

export default StyleSheet.create({
  container: {
    height: Scaling.verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  absoluteLeft: {position: 'absolute', left: 0, flexDirection: 'row'},
  absoluteRight: {position: 'absolute', right: 0, flexDirection: 'row'},
  absoluteCenter: {
    position: 'absolute',
    alignItems: 'center',
    right: 0,
    left: 0,
  },
  me10: {marginEnd: Scaling.scale(10)},
  ms10: {marginStart: Scaling.scale(10)},
  mx10: {marginHorizontal: Scaling.scale(25)},
  reverseAr: {transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]},
});
