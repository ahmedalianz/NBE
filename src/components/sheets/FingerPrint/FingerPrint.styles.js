import {StyleSheet} from 'react-native';
import {Colors, Scaling, Typography} from '../../../constants';

export default StyleSheet.create({
  fingerprintContainer: {
    backgroundColor: '#111111',
    padding: Scaling.scale(18),
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  fingerprintHeader: [
    {
      color: Colors.white,
    },
    Typography.FONT_BOLD,
    Typography.FONT_SIZE_20,
  ],
  fingerprintSubHeader: {
    color: Colors.white,
    marginTop: Scaling.verticalScale(12),
    ...Typography.FONT_SIZE_16,
  },
  touchText: {
    marginTop: Scaling.verticalScale(15),
    ...Typography.FONT_SIZE_16,
    color: Colors.grey,
    alignSelf: 'center',
  },
  sensorImage: {
    alignSelf: 'center',
    height: Scaling.verticalScale(88),
    width: Scaling.scale(88),
    marginTop: Scaling.verticalScale(35),
  },
  cancel: [
    {color: Colors.primary},
    Typography.FONT_BOLD,
    Typography.FONT_SIZE_16,
    {alignSelf: 'flex-end'},
  ],
});
