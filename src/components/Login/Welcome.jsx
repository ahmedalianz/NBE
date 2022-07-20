import {Text, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import {useTranslation} from 'react-i18next';

export function Welcome() {
  const {t} = useTranslation();
  const {width} = useWindowDimensions();
  return (
    <Text
      style={[
        styles.text,
        {fontSize: width > 380 ? SIZES.xxLarge : SIZES.mLarge},
      ]}>
      {t('Welcome_To_NBE')}
    </Text>
  );
}
const styles = StyleSheet.create({
  text: {
    marginTop: 100,
    color: COLORS.white,
    fontWeight: '700',
    lineHeight: 47,
  },
});
