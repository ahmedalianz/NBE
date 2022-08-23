import {StyleSheet} from 'react-native';
import {Colors, Layouts, Scaling, Typography} from '../../constants';

export default StyleSheet.create({
  title: [
    Typography.FONT_BOLD.en,
    Typography.FONT_SIZE_40,
    Typography.LINE_HEIGHT_46,
    {color: Colors.white},
    {marginTop: Scaling.verticalScale(220)},
  ],
  loginOptionsContainer: [
    Layouts.rowBetween,
    Layouts.yCentered,
    {marginTop: Scaling.verticalScale(19)},
  ],
  rememberMeBox: [Layouts.row, Layouts.yCentered],
  loginButtonContainer: [
    Layouts.rowBetween,
    {marginTop: Scaling.verticalScale(26)},
  ],
  loginOptionsText: [Typography.FONT_SIZE_14, {color: Colors.white}],
  loginCheckbox: {
    true: Colors.white,
    false: Colors.grey,
  },
  link: [
    {
      color: Colors.link,
    },
    Typography.FONT_SIZE_14,
    Typography.FONT_BOLD,
  ],
  loginButton: {
    flex: 1,
    marginRight: 21,
    backgroundColor: Colors.primary,
    width: Scaling.scale(275),
    height: Scaling.verticalScale(50),
    ...Layouts.allCentered,
    borderRadius: Scaling.moderateScale(12),
  },
  loginButtonText: [
    {
      color: Colors.white,
    },
    {
      textAlign: 'center',
    },
    Typography.FONT_SIZE_16,
    Typography.FONT_BOLD,
    Typography.LINE_HEIGHT_18,
  ],
  icon: {width: Scaling.scale(50), height: Scaling.verticalScale(50)},
  noAccount: [{color: Colors.white}, Typography.FONT_SIZE_14],
  signupLinkContainer: {
    ...Layouts.allCentered,
    marginVertical: Scaling.verticalScale(30),
  },
  px25: {paddingHorizontal: Scaling.scale(25)},
  footerContainer: {
    backgroundColor: Colors.overlay,
    padding: Scaling.scale(10),
  },
  links: {
    ...Layouts.row,
    ...Layouts.xCentered,
    marginVertical: 5,
  },
  seperator: {color: Colors.white, marginHorizontal: Scaling.scale(5)},
  copyright: {
    color: Colors.white,
    textAlign: 'center',
    ...Typography.FONT_SIZE_10,
  },
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
