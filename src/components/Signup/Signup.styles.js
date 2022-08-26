import {StyleSheet} from 'react-native';
import {Colors, Scaling, Typography} from '../../constants';

export default StyleSheet.create({
  phoneContainer: {marginTop: Scaling.verticalScale(30)},
  title: [
    Typography.FONT_BOLD,
    Typography.FONT_SIZE_20,
    {color: Colors.white},
    {marginBottom: Scaling.verticalScale(5)},
  ],
  bigTitle: [
    Typography.FONT_BOLD,
    Typography.FONT_SIZE_30,
    {color: Colors.white},
    {marginBottom: Scaling.verticalScale(5)},
  ],
  sub_title: [
    Typography.FONT_SIZE_15,
    Typography.FONT_REGULAR,
    {color: Colors.grey},
    {marginBottom: Scaling.verticalScale(20)},
  ],
  noRecive: [
    Typography.FONT_SIZE_16,
    Typography.FONT_REGULAR,
    {color: Colors.grey, marginTop: Scaling.verticalScale(20)},
  ],
  countDown: [
    {color: Colors.white},
    Typography.FONT_BOLD,
    Typography.FONT_SIZE_16,
  ],
  cell: {
    width: Scaling.scale(45),
    height: Scaling.verticalScale(65),
    borderWidth: Scaling.scale(2),
    borderColor: '#323F4B',
    backgroundColor: '#323F4B',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: Scaling.scale(10),
    color: '#fff',
    ...Typography.FONT_SIZE_25,
    ...Typography.FONT_BOLD,
  },
  focusCell: {
    borderColor: Colors.primary2,
  },
  PasswordVerificationcontainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Scaling.verticalScale(12),
  },
  PasswordVerificationcontainerCircle: {
    borderRadius: 30,
    width: Scaling.scale(12),
    marginEnd: Scaling.scale(10),
    height: Scaling.verticalScale(12),
  },
  textVerification: [{color: Colors.white}, Typography.FONT_REGULAR],
});
