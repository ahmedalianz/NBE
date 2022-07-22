import {
  View,
  SafeAreaView,
  StyleSheet,
  I18nManager,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  SignupFooter,
  SignupPhone,
  SignupPhoneVerify,
} from '../components/Signup';
import {assets, COLORS, SIZES} from '../constants';
import {LoginHeader} from '../components/Login';
import SignupSetPassword from '../components/Signup/SignupSetPassword';
import SignupSuccess from '../components/Signup/SignupSuccess';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

export function Signup() {
  const [signUpStep, setSignUpStep] = useState(1);
  const navigation = useNavigation();
  const {t} = useTranslation();
  const nextStep = () => {
    setSignUpStep(step => step + 1);
  };
  const prevStep = () => {
    setSignUpStep(step => step - 1);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: signUpStep < 4 ? '#1F2933' : COLORS.primary,
      }}>
      {signUpStep === 4 && (
        <Image
          style={[styles.backImage, {transform: [{scaleX: -1}]}]}
          source={assets.back_success}
          resizeMode="cover"
          resizeMethod="resize"
        />
      )}

      <ScrollView contentContainerStyle={styles.signupContainer}>
        <View>
          <LoginHeader
            screenName="Signup"
            prevStep={prevStep}
            signUpStep={signUpStep}
            noNavigateBack={signUpStep === 4}
          />
          {signUpStep === 1 && <SignupPhone />}
          {signUpStep === 2 && <SignupPhoneVerify />}
          {signUpStep === 3 && <SignupSetPassword />}
          {signUpStep === 4 && <SignupSuccess />}
        </View>
      </ScrollView>
      <View style={styles.signupContainer}>
        {signUpStep === 1 && <SignupFooter nextStep={nextStep} />}
        {(signUpStep === 2 || signUpStep === 3) && (
          <TouchableOpacity style={styles.buttonContainer} onPress={nextStep}>
            <Text style={styles.buttonText}>{t('Submit')}</Text>
          </TouchableOpacity>
        )}
        {signUpStep === 4 && (
          <TouchableOpacity
            style={styles.finish_buttonContainer}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.finish_buttonText}>{t('Finish')}</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  signupContainer: {
    marginHorizontal: SIZES.mLarge,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    backgroundColor: COLORS.primary,
    padding: SIZES.large,
    borderRadius: SIZES.xSmall,
    marginBottom: 25,
  },
  buttonText: {
    color: COLORS.white,
    lineHeight: SIZES.large,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  finish_buttonContainer: {
    backgroundColor: COLORS.white,
    padding: SIZES.large,
    borderRadius: SIZES.xSmall,
    marginBottom: 25,
  },
  finish_buttonText: {
    color: COLORS.primary,
    lineHeight: SIZES.large,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backImage: {
    width: '65%',
    bottom: 0,
    left: 0,
    height: '80%',
    zIndex: -1,
    position: 'absolute',
  },
});
