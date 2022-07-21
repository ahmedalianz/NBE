import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import {useTranslation} from 'react-i18next';

export default function SignupSuccess() {
  const {width} = useWindowDimensions();
  const {t} = useTranslation();
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
        {t('Congrats')}
      </Text>
      <Text
        style={[
          styles.sub_title,
          {
            color: COLORS.white,
            fontSize: width > 380 ? SIZES.medium : SIZES.xSmall,
          },
        ]}>
        {t('Congrats_sub')}
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
