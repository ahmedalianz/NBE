import {
  StyleSheet,
  Image,
  I18nManager,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useRef, useCallback} from 'react';
import {assets} from '../constants';
import {
  LoginFooter,
  Welcome,
  AppBar,
  LoginForm,
  FingerPrint,
} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Modalize} from 'react-native-modalize';
import RNRestart from 'react-native-restart';
import {useTranslation} from 'react-i18next';

export function Login() {
  const modalizeRef = useRef(null);
  const [i18n] = useTranslation();

  const openDrawer = useCallback(() => {
    modalizeRef.current?.open();
  }, []);
  const closeDrawer = useCallback(() => {
    modalizeRef.current?.close();
  }, []);
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
    <SafeAreaView style={{paddingTop: StatusBar.currentHeight}}>
      <Image
        style={styles.backImage}
        source={assets.signupbBackground}
        resizeMode="cover"
      />
      <AppBar>
        <AppBar.Start>
          <AppBar.Icon icon="ar" onPress={changeLangHandler} />
        </AppBar.Start>
        <AppBar.End>
          <AppBar.Icon icon="logo" />
        </AppBar.End>
      </AppBar>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
        <LoginForm {...{openDrawer}} />
        <LoginFooter {...{closeDrawer}} />
      </ScrollView>
      <Modalize
        ref={modalizeRef}
        handlePosition="inside"
        overlayStyle={{backgroundColor: 'rgba(28, 36, 55, 0.77)'}}
        modalStyle={{borderTopEndRadius: 30, borderTopStartRadius: 30}}
        adjustToContentHeight>
        <FingerPrint {...{closeDrawer}} />
      </Modalize>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  backImage: {
    width: '100%',
    position: 'absolute',
  },
});
