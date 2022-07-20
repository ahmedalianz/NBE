import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';

export default function PasswordVerificationText({title, invalid}) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: invalid ? '#B7B7B7' : COLORS.primary,
          },
        ]}></View>
      <Text style={styles.textVerification}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  circle: {
    borderRadius: 50,
    width: 18,
    marginEnd: 5,
    height: 18,
  },
  textVerification: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});
