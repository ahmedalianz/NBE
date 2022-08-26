import {Text, View} from 'react-native';
import React from 'react';
import {Colors, assets, Layouts} from '../../constants';
import {PasswordVerificationText} from '..';
import {Input} from '../common';
import {useTranslation} from 'react-i18next';
import styles from './Signup.styles';
export function SignupSetPassword({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  lowerCaseValidation,
  numberValidation,
  upperCaseValidation,
  specialValidation,
  minValidation,
  passwrodMisMatch,
}) {
  const {t} = useTranslation();
  return (
    <View style={styles.phoneContainer}>
      <Text style={styles.title}>{t('Password_title')}</Text>
      <Text style={styles.sub_title}>{t('Password_subtitle')}</Text>
      <Input
        title={t('Password')}
        style={{borderColor: '#12A759', backgroundColor: '#323F4B'}}
        titleColor="#12A759"
        image={assets.lock}
        input={password}
        setInput={setPassword}
        name="Password"
        type="password"
      />
      <View style={{marginTop: 20}}>
        <Input
          title={t('Confirm_Password')}
          style={{borderColor: Colors.mid_green, backgroundColor: '#323F4B'}}
          titleColor={Colors.grey}
          image={assets.lock}
          input={confirmPassword}
          setInput={setConfirmPassword}
          name="Password"
          type="password"
        />
      </View>
      <View style={Layouts.rowBetweenR}>
        <PasswordVerificationText
          title={t('Lower_case')}
          invalid={lowerCaseValidation}
        />
        <PasswordVerificationText
          title={t('Upper_case')}
          invalid={upperCaseValidation}
        />
      </View>
      <View style={Layouts.rowBetweenR}>
        <PasswordVerificationText
          title={t('Min_Char')}
          invalid={minValidation}
        />
        <PasswordVerificationText
          title={t('Number')}
          invalid={numberValidation}
        />
      </View>
      <View style={Layouts.rowBetweenR}>
        <PasswordVerificationText
          title={t('Special_character')}
          invalid={specialValidation}
        />
        <PasswordVerificationText
          title={t('password_match')}
          invalid={passwrodMisMatch}
        />
      </View>
    </View>
  );
}
