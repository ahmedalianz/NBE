import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SIZES, COLORS, assets} from '../../constants';
import {LoginInput} from '../Login';
import PasswordVerificationText from './PasswordVerificationText';
import {useTranslation} from 'react-i18next';
export default function SignupSetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lowerCaseValidation, setLowerCaseValidation] = useState(true);
  const [upperCaseValidation, setUpperCaseValidation] = useState(true);
  const [minValidation, setMinValidation] = useState(true);
  const [numberValidation, setNumberValidation] = useState(true);
  const [specialValidation, setSpecialValidation] = useState(true);
  useEffect(() => {
    if (/\d/.test(password)) {
      setNumberValidation(false);
    } else {
      setNumberValidation(true);
    }
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(password)) {
      setSpecialValidation(false);
    } else {
      setSpecialValidation(true);
    }
    if (/[A-Z]/.test(password)) {
      setUpperCaseValidation(false);
    } else {
      setUpperCaseValidation(true);
    }
    if (/[a-z]/.test(password)) {
      setLowerCaseValidation(false);
    } else {
      setLowerCaseValidation(true);
    }
    if (password.length >= 8) {
      setMinValidation(false);
    } else {
      setMinValidation(true);
    }
  }, [password]);
  const {t} = useTranslation();
  return (
    <View style={styles.phoneContainer}>
      <Text style={[styles.title, {color: COLORS.white}]}>
        {t('Password_title')}
      </Text>
      <Text style={[styles.sub_title, {color: COLORS.grey}]}>
        {t('Password_subtitle')}
      </Text>
      <LoginInput
        title={t('Password')}
        borderColor="#12A759"
        titleColor="#12A759"
        backgroundColor="#323F4B"
        image={assets.lock}
        input={password}
        setInput={setPassword}
        name="Password"
      />
      <View style={{marginTop: 20}}>
        <LoginInput
          title={t('Confirm_Password')}
          borderColor="#323F4B"
          titleColor="COLORS.grey"
          backgroundColor="#323F4B"
          image={assets.lock}
          input={confirmPassword}
          setInput={setConfirmPassword}
          name="Password"
        />
      </View>
      <View style={styles.textLine}>
        <PasswordVerificationText
          title={t('Lower_case')}
          invalid={lowerCaseValidation}
        />
        <PasswordVerificationText
          title={t('Upper_case')}
          invalid={upperCaseValidation}
        />
      </View>
      <View style={styles.textLine}>
        <PasswordVerificationText
          title={t('Min_Char')}
          invalid={minValidation}
        />
        <PasswordVerificationText
          title={t('Number')}
          invalid={numberValidation}
        />
      </View>
      <PasswordVerificationText
        title={t('Special_character')}
        invalid={specialValidation}
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
  textLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
