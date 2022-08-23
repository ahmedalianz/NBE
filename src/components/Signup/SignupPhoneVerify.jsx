import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
// import NumberInput from './NumberInput';
import {useTranslation} from 'react-i18next';
import styles from './Signup.styles';
import OTP from './OTP';

export function SignupPhoneVerify({phone, value, setValue}) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  const {t} = useTranslation();
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <View style={styles.phoneContainer}>
      <Text style={styles.title}>{t('Verification')}</Text>
      <Text style={styles.sub_title}>
        {t('Verification_message')} +2{phone}
      </Text>
      <OTP {...{value, setValue}} />
      <View>
        <Text style={styles.noRecive}>{t('Verification_No_Receive')}</Text>
        <Text style={styles.countDown}>
          {t('Request_new')} {`0${minutes}`}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </Text>
      </View>
    </View>
  );
}
