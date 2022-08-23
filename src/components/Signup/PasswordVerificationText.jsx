import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Scaling} from '../../constants';

export function PasswordVerificationText({title, invalid}) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: invalid ? Colors.grey : Colors.primary2,
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
    marginVertical: Scaling.verticalScale(12),
  },
  circle: {
    borderRadius: 30,
    width: Scaling.scale(12),
    marginEnd: Scaling.scale(10),
    height: Scaling.verticalScale(12),
  },
  textVerification: {
    color: Colors.white,
  },
});
