import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';

export default function SignupSuccess() {
  const {width} = useWindowDimensions();
  return (
    <View>
      <Text
        style={[
          styles.title,
          {
            color: COLORS.white,
            fontSize: width > 380 ? SIZES.xLarge : SIZES.mLarge,
          },
        ]}>
        Congratulations
      </Text>
      <Text
        style={[
          styles.sub_title,
          {
            color: COLORS.white,
            fontSize: width > 380 ? SIZES.medium : SIZES.xSmall,
          },
        ]}>
        You have successfully registered in NBE online banking service
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {fontWeight: 'bold', marginBottom: 5},
  sub_title: {
    marginBottom: 20,
  },
});
