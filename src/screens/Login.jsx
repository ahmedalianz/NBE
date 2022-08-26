import {
  StyleSheet,
  Image,
  I18nManager,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {assets} from '../constants';
import {LoginFooter, Welcome, LoginForm} from '../components';
import {AppBar} from '../components/common';
import {SafeAreaView} from 'react-native-safe-area-context';
import RNRestart from 'react-native-restart';
import {useTranslation} from 'react-i18next';

export function Login() {
  const {i18n} = useTranslation();
  const changeLangHandler = () => {
    i18n
      .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
      .then(() => {
        if (i18n.language === 'ar') {
          I18nManager.forceRTL(true);
          RNRestart.Restart();
        } else {
          I18nManager.forceRTL(false);
          RNRestart.Restart();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
      <Image
        style={styles.backImage}
        source={assets.signupbBackground}
        resizeMode="cover"
      />
      <AppBar>
        <AppBar.Start>
          <AppBar.Icon
            icon={I18nManager.isRTL ? 'en' : 'ar'}
            onPress={changeLangHandler}
          />
        </AppBar.Start>
        <AppBar.End>
          <AppBar.Icon icon="logo" />
        </AppBar.End>
      </AppBar>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
        <LoginForm />
        <LoginFooter />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  backImage: {
    width: '100%',
    position: 'absolute',
  },
});
