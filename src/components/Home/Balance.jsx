import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import React from 'react';
<<<<<<< HEAD
import {assets} from '../../constants';

export const Balance = () => {
=======
import {useNavigation} from '@react-navigation/native';

const Balance = () => {
  const navigation = useNavigation();

>>>>>>> fff3e66575d55fb9ff43243cb449310345bc8469
  return (
    <View style={styles.balanceContainer}>
      <Pressable
        onPress={() => {
          navigation.navigate('Signup');
        }}
        style={styles.balanceWrapper}>
        <ImageBackground
          style={styles.balanceImage}
          source={require('../../assets/images/balance-bg.png')}>
          <Text style={styles.balance}> Tap to view your balance </Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    paddingBottom: 25,
  },
  balanceWrapper: {
<<<<<<< HEAD
=======
    backgroundColor: 'black',
>>>>>>> fff3e66575d55fb9ff43243cb449310345bc8469
    borderRadius: 22,
  },
  balanceImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 132,
  },
<<<<<<< HEAD
  balance: {},
=======
  balance: {
    color: 'white',
    fontSize: 24,
  },
>>>>>>> fff3e66575d55fb9ff43243cb449310345bc8469
});
