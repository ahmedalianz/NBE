import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {assets, SIZES} from '../../constants';

const Shortcuts = () => {
  const shortcuts = ['Accounts', 'Cards', 'Utilities', 'History'];
  return (
    <View style={styles.shortcutsContainer}>
      {shortcuts.map((shortcut, i) => (
        <View key={i}>
          <View style={styles.shortcutStyle}>
            <Image source={assets.dollar} style={styles.dollar_image} />
          </View>
          <Text style={styles.shortcutText}> {shortcut} </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  shortcutsContainer: {
    marginTop: SIZES.mLarge,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shortcutStyle: {
    backgroundColor: '#00C97426',
    height: 60,
    width: 60,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shortcutText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  dollar_image: {width: 28, height: 20},
});

export default Shortcuts;
