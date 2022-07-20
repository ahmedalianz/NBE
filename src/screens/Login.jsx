import {
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  View,
  Text,
} from 'react-native';
import React from 'react';
import {assets, SIZES} from '../constants';
import {
  LoginFooter,
  Welcome,
  LoginHeader,
  LoginForm,
} from '../components/Login';

export function Login() {
  return (
    <SafeAreaView>
      <Image style={styles.backImage} source={assets.back} resizeMode="cover" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.horizontalSpacing}>
          <LoginHeader screenName="Login" />
          <Welcome />
          <LoginForm />
        </View>
        <LoginFooter />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  horizontalSpacing: {
    marginHorizontal: SIZES.mLarge,
    flex: 1,
  },
  backImage: {
    width: '100%',
    zIndex: -1,
    position: 'absolute',
  },
});
