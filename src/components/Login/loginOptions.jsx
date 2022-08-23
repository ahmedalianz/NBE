import {View, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useTranslation} from 'react-i18next';
import styles from './Login.styles';
export default function LoginOptions() {
  const [rememberMe, setRememberMe] = useState(false);
  const [t] = useTranslation();
  return (
    <View style={styles.loginOptionsContainer}>
      <View style={styles.rememberMeBox}>
        <CheckBox
          value={rememberMe}
          onValueChange={newValue => setRememberMe(newValue)}
          tintColors={styles.loginCheckbox}
        />
        <Text
          onPress={() => setRememberMe(val => !val)}
          style={styles.loginOptionsText}>
          {t('RememberMe')}
        </Text>
      </View>
      <Pressable>
        <Text style={styles.loginOptionsText}>{t('ForgotPassword')}</Text>
      </Pressable>
    </View>
  );
}
