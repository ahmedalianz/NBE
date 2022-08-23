import {Text, View} from 'react-native';
import React from 'react';
import {assets, Colors} from '../../constants';
import {Input} from '..';
import {useTranslation} from 'react-i18next';
import styles from './Signup.styles';
export function SignupPhone({phone, setPhone}) {
  const {t} = useTranslation();
  return (
    <View style={styles.phoneContainer}>
      <Text style={styles.title}>{t('Mobile')}</Text>
      <Text style={styles.sub_title}>{t('Enter_Phone')}</Text>
      <Input
        title={t('Mobile')}
        titleColor={Colors.primary2}
        keyboardType="phone-pad"
        style={{
          backgroundColor: Colors.mid_green,
          borderColor: Colors.primary2,
        }}
        image={assets.phone}
        input={phone}
        setInput={setPhone}
      />
    </View>
  );
}
