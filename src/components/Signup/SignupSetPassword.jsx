import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SIZES, COLORS, assets} from '../../constants';
import {LoginInput} from '../Login';
import PasswordVerificationText from './PasswordVerificationText';
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
  return (
    <View style={styles.phoneContainer}>
      <Text style={[styles.title, {color: COLORS.white}]}>
        Set your password
      </Text>
      <Text style={[styles.sub_title, {color: '#B7B7B7'}]}>
        Enter a strong password for your online banking account
      </Text>
      <LoginInput
        title="Password"
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
          title="Confirm Password"
          borderColor="#323F4B"
          titleColor="#B7B7B7"
          backgroundColor="#323F4B"
          image={assets.lock}
          input={confirmPassword}
          setInput={setConfirmPassword}
          name="Password"
        />
      </View>
      <View style={styles.textLine}>
        <PasswordVerificationText
          title="Lower case letter"
          invalid={lowerCaseValidation}
        />
        <PasswordVerificationText
          title="Upper case letter"
          invalid={upperCaseValidation}
        />
      </View>
      <View style={styles.textLine}>
        <PasswordVerificationText
          title="Minimum 8 characters"
          invalid={minValidation}
        />
        <PasswordVerificationText title="Number" invalid={numberValidation} />
      </View>
      <PasswordVerificationText
        title="Special character"
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
