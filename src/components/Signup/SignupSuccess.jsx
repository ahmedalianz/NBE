import {Text, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import styles from './Signup.styles';
export function SignupSuccess() {
  const {t} = useTranslation();
  return (
    <View>
      <Text style={styles.bigTitle}>{t('Congrats')}</Text>
      <Text style={styles.sub_title}>{t('Congrats_sub')}</Text>
    </View>
  );
}
