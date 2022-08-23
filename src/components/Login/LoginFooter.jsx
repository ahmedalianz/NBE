import {View, Text} from 'react-native';
import React from 'react';

import {useTranslation} from 'react-i18next';
import styles from './Login.styles';
export function LoginFooter() {
  const {t} = useTranslation();
  return (
    <View style={styles.footerContainer}>
      <View style={styles.links}>
        <Text style={styles.link}>{t('Contact')}</Text>
        <Text style={styles.seperator}>-</Text>
        <Text style={styles.link}>{t('FAQs')}</Text>
        <Text style={styles.seperator}>-</Text>
        <Text style={styles.link}>{t('Help')}</Text>
      </View>
      <Text style={styles.copyright}>{t('CopyRight')}</Text>
    </View>
  );
}
