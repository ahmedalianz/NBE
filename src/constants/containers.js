import {StyleSheet} from 'react-native';

const Containers = StyleSheet.create({
  card: {padding: 15},
  shadowCard: {
    padding: 12,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.54,
    elevation: 8,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
});
export default Containers;
