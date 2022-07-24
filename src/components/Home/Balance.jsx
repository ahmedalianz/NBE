import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Balance = () => {
  const navigation = useNavigation();

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
    backgroundColor: 'black',
    borderRadius: 22,
  },
  balanceImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 132,
  },
  balance: {
    color: 'white',
    fontSize: 24,
  },
});

export default Balance;
