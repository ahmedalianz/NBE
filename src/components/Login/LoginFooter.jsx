import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

import {useTranslation} from 'react-i18next';

export function LoginFooter() {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.links}>
        <Text style={styles.link}>{t('Contact')}</Text>
        <Text style={styles.seperator}>-</Text>
        <Text style={styles.link}>{t('FAQs')}</Text>
        <Text style={styles.seperator}>-</Text>
        <Text style={styles.link}>{t('Help')}</Text>
      </View>
      <Text style={styles.whiteText}>{t('CopyRight')}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000066',
    padding: 10,
  },
  links: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'center',
  },
  link: {color: COLORS.link},
  seperator: {marginHorizontal: 5, color: COLORS.white},
  whiteText: {color: COLORS.white, textAlign: 'center'},
});
