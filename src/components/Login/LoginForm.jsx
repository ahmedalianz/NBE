import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
  I18nManager,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {assets, COLORS, SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {LoginInput} from './LoginInput';
import {useTranslation} from 'react-i18next';
import {FingerPrintModal} from './FingerPrintModal';
export function LoginForm() {
  const {t} = useTranslation();
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <LoginInput
        name="Username"
        title={t('Username')}
        borderColor="#FFFFFF80"
        titleColor={COLORS.white}
        backgroundColor="#0000004D"
        image={assets.at}
        marginTop={39}
        input={name}
        setInput={setName}
      />
      <LoginInput
        name="Password"
        title={t('Password')}
        borderColor={I18nManager.isRTL ? '#FFFFFF80' : '#007236'}
        backgroundColor={I18nManager.isRTL ? '#0000004D' : '#FFFFFF'}
        titleColor={I18nManager.isRTL ? COLORS.white : COLORS.primary}
        image={I18nManager.isRTL ? assets.lock_light : assets.lock}
        marginTop={21}
        input={password}
        setInput={setPassword}
      />

      <View style={styles.loginOptions}>
        <View style={styles.rememberMe}>
          <CheckBox
            value={rememberMe}
            onValueChange={newValue => setRememberMe(newValue)}
            tintColors={{
              true: COLORS.white,
              false: COLORS.grey,
            }}
          />
          <Text
            onPress={() => setRememberMe(val => !val)}
            style={styles.whiteText}>
            {t('RememberMe')}
          </Text>
        </View>
        <Pressable>
          <Text style={styles.whiteText}>{t('ForgotPassword')}</Text>
        </Pressable>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={[styles.loginButtonText, styles.whiteText]}>
            {t('LogIn')}
          </Text>
        </TouchableOpacity>
        <Pressable onPress={() => setModalVisibility(val => !val)}>
          <Image source={assets.fingerprint} style={{width: 50, height: 50}} />
        </Pressable>
      </View>
      <View style={styles.signupLinkContainer}>
        <Text style={styles.whiteText}>
          {t('No_Account')}{' '}
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={styles.link}>
            {t('Sign_up')}
          </Text>
        </Text>
      </View>
      <FingerPrintModal {...{modalVisibility, setModalVisibility}} />
    </>
  );
}
const styles = StyleSheet.create({
  loginButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  password: {
    marginTop: 21,
    borderWidth: 1.5,
    borderRadius: 10,
    height: 60,
  },
  loginButton: {
    flex: 1,
    marginRight: 21,
    backgroundColor: COLORS.primary,
    padding: SIZES.large,
    borderRadius: SIZES.xSmall,
  },
  loginButtonText: {
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: SIZES.large,
    fontSize: SIZES.medium,
  },
  whiteText: {
    color: COLORS.white,
  },
  link: {color: COLORS.link, textDecorationLine: 'underline'},
  loginOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signupLinkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.xLarge,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
});
