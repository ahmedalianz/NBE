import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {assets, COLORS, SIZES} from '../../constants';
import {LoginInput} from '../Login';
import {useTranslation} from 'react-i18next';
export function SignupPhone() {
  const [phone, setPhone] = useState('');
  const {t} = useTranslation();
  return (
    <View style={styles.phoneContainer}>
      <Text style={[styles.title, {color: COLORS.white}]}>{t('Mobile')}</Text>
      <Text style={[styles.sub_title, {color: COLORS.grey}]}>
        {t('Enter_Phone')}
      </Text>
      <LoginInput
        title={t('Mobile')}
        borderColor="#12A759"
        titleColor="#12A759"
        keyboardType="phone-pad"
        backgroundColor="#323F4B"
        image={assets.phone}
        input={phone}
        setInput={setPhone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  phoneContainer: {marginTop: SIZES.xLarge},
  title: {fontWeight: 'bold', fontSize: 20, marginBottom: 5},
  sub_title: {
    fontSize: SIZES.medium,
    marginBottom: 20,
  },
});
