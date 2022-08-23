import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {assets} from '../../constants';

export const Balance = () => {
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
    borderRadius: 22,
    marginTop: 54,
  },
  balanceImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 132,
  },
  balance: {},
});
