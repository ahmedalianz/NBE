import {Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import styles from './Login.styles';

export function Welcome() {
  const {t} = useTranslation();
  return (
    <View style={styles.px25}>
      <Text style={styles.title}>{t('Welcome_To_NBE')}</Text>
    </View>
  );
}
