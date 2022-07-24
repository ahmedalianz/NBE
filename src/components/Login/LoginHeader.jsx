import {View, StyleSheet, Image, Pressable, I18nManager} from 'react-native';
import React from 'react';
import {assets, SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {changeLanguage} from '../../store/LanguageReducer';
export function LoginHeader({
  screenName,
  prevStep,
  signUpStep,
  noNavigateBack,
}) {
  const dispatch = useDispatch();
  const {language} = useSelector(state => state.language);
  const navigation = useNavigation();
  const changeLanguageHandler = () => {
    if (language === 'en') {
      dispatch(changeLanguage('ar'));
    } else {
      dispatch(changeLanguage('en'));
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
        <Pressable onPress={changeLanguageHandler}>
          <Image
            source={language === 'en' ? assets.ar : assets.en}
            resizeMode="cover"
            style={styles.lang}
          />
        </Pressable>
      ) : (
        !noNavigateBack && (
          <Pressable onPress={navigatePrevious}>
            <Image
              source={assets.arrow_back}
              resizeMode="cover"
              style={styles.lang}
            />
          </Pressable>
        )
      )}
      <Image source={assets.logo} resizeMode="cover" style={styles.logo} />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
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
