import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, SIZES} from '../../constants';
import NumberInput from './NumberInput';
import {useTranslation} from 'react-i18next';
export function SignupPhoneVerify() {
  const [phone, setPhone] = useState('');
  const {t} = useTranslation();
  const [interval, setIntervalTime] = useState(16);
  useEffect(() => {
    let countDown = 16;
    const intervalTime = setInterval(() => {
      if (countDown === 1) {
        clearInterval(intervalTime);
      }
      countDown--;
      setIntervalTime(val => val - 1);
    }, 1000);
    return () => clearInterval(intervalTime);
  }, []);
  return (
    <View style={styles.phoneContainer}>
      <Text style={[styles.title, {color: COLORS.white}]}>
        {t('Verification')}
      </Text>
      <Text style={[styles.sub_title, {color: COLORS.grey}]}>
        {t('Verification_message')} +20 101 131 5412
      </Text>
      <View style={styles.numbersContainer}>
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
      </View>
      <View>
        <Text style={styles.noRecive}>{t('Verification_No_Receive')}</Text>
        <Text style={styles.countDown}>
          {t('Request_new')} 00:{interval}
        </Text>
      </View>
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
  noRecive: {
    color: COLORS.grey,
    fontSize: SIZES.medium,
  },
  numbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  countDown: {
    color: COLORS.white,
    fontWeight: 'bold',
    lineHeight: SIZES.large,
  },
});
