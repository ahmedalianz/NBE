import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import {assets} from '../../constants';

const Balance = () => {
  return (
    <View style={styles.balanceContainer}>
      <View style={styles.balanceWrapper}>
        <ImageBackground style={styles.balanceImage} source={assets.balance_bg}>
          <Text style={styles.balance}> Tap to view your balance </Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceWrapper: {
    backgroundColor: COLORS.black,
    borderRadius: 22,
    marginTop: 54,
  },
  balanceImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 132,
  },
  balance: {
    color: COLORS.white,
    fontSize: SIZES.mLarge,
  },
});

export default Balance;
