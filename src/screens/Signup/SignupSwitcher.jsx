import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  SignupFooter,
  SignupPhone,
  AppBar,
  SignupPhoneVerify,
  SignupSetPassword,
  SignupSuccess,
} from '../../components';
import {assets, Colors, Layouts, Scaling} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export function SignupSwitcher({
  withText,
  step,
  buttonHandler,
  outlined,
  buttonText,
  phone,
  setPhone,
  value,
  setValue,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  lowerCaseValidation,
  numberValidation,
  upperCaseValidation,
  specialValidation,
  minValidation,
  passwordAccepted,
}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[
        Layouts.flexed,
        {
          backgroundColor:
            step === 'signup-success' ? Colors.primary : Colors.dark_green,
        },
      ]}>
      {step === 'signup-success' && (
        <Image
          source={assets.back_success}
          style={styles.backImage}
          resizeMode="contain"
        />
      )}
      <View>
        <AppBar>
          {step !== 'signup-success' && (
            <AppBar.Start>
              <AppBar.Icon icon="back" onPress={() => navigation.goBack()} />
            </AppBar.Start>
          )}
          <AppBar.End>
            <AppBar.Icon icon="logo" />
          </AppBar.End>
        </AppBar>
      </View>
      <View style={styles.signupInnerContainer}>
        {step === 'enter-phone' && <SignupPhone {...{phone, setPhone}} />}
        {step === 'verify-phone' && (
          <SignupPhoneVerify {...{phone, value, setValue}} />
        )}
        {step === 'set-password' && (
          <SignupSetPassword
            {...{
              password,
              setPassword,
              confirmPassword,
              setConfirmPassword,
              lowerCaseValidation,
              numberValidation,
              upperCaseValidation,
              specialValidation,
              minValidation,
            }}
          />
        )}
        {step === 'signup-success' && <SignupSuccess />}
        <SignupFooter
          {...{
            withText,
            buttonHandler,
            outlined,
            buttonText,
            phone,
            value,
            step,
            passwordAccepted,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signupInnerContainer: [
    Layouts.yBetween,
    Layouts.flexed,
    {paddingHorizontal: Scaling.scale(25)},
  ],
  backImage: {position: 'absolute', top: 100},
});
