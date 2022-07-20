import {View, StyleSheet, Image, Pressable, I18nManager} from 'react-native';
import React, {useContext} from 'react';
import {assets, SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {LanguageContext} from '../../store/LanguageContext';

export function LoginHeader({
  screenName,
  prevStep,
  signUpStep,
  noNavigateBack,
}) {
  const navigation = useNavigation();
  const currentLanguageCtx = useContext(LanguageContext);
  const changeLanguage = () => {
    if (currentLanguageCtx.language === 'en') {
      currentLanguageCtx.changeLanguage('ar');
    } else {
      currentLanguageCtx.changeLanguage('en');
    }
  };
  const navigatePrevious = () => {
    if (screenName === 'Signup' && signUpStep === 1) {
      navigation.goBack();
    } else {
      prevStep();
    }
  };
  return (
    <View
      style={[
        styles.header,
        {justifyContent: noNavigateBack ? 'flex-end' : 'space-between'},
        {flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row'},
      ]}>
      {screenName === 'Login' ? (
        <Pressable onPress={changeLanguage}>
          <Image
            source={
              currentLanguageCtx.language === 'en' ? assets.ar : assets.en
            }
            resizeMode="cover"
            style={styles.lang}
          />
        </Pressable>
      ) : (
        !noNavigateBack && (
          <Pressable onPress={navigatePrevious}>
            <Image
              source={
                I18nManager.isRTL ? assets.arrow_back_green : assets.arrow_back
              }
              resizeMode="cover"
              style={styles.lang}
            />
          </Pressable>
        )
      )}
      <Image
        source={
          screenName === 'Signup' && I18nManager.isRTL
            ? assets.logo_green
            : assets.logo
        }
        resizeMode="cover"
        style={styles.logo}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 54,
    alignItems: 'center',
    flexDirection: 'row',
  },
  lang: {
    width: SIZES.xxLarge,
    height: SIZES.xxLarge,
  },
  logo: {
    width: 165,
    height: SIZES.xxLarge,
  },
});
