import {StyleSheet} from 'react-native';

const Layouts = StyleSheet.create({
  row: {flexDirection: 'row'},
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  rowBetweenR: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexed: {flex: 1},
  yCentered: {alignItems: 'center'},
  yBetween: {justifyContent: 'space-between'},
  xCentered: {justifyContent: 'center', flexDirection: 'row'},
  allCentered: {justifyContent: 'center', alignItems: 'center'},
  ySeprated: {justifyContent: 'space-between'},
});
export default Layouts;
