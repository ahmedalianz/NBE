import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {assets, Colors} from '../../constants';
import styles from './Login.styles';
import {useNavigation} from '@react-navigation/native';
import {Input} from '..';
import LoginOptions from './loginOptions';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {login} from '../../store/AuthReducer';

export function LoginForm({openDrawer}) {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <View style={styles.px25}>
      <Input
        title={t('Username')}
        style={{
          borderColor: '#FFFFFF80',
          backgroundColor: '#0000004D',
          marginTop: 39,
        }}
        image={assets.at}
        input={name}
        setInput={setName}
        titleColor={Colors.white}
      />
      <Input
        type="password"
        title={t('Password')}
        style={{
          borderColor: '#007236',
          backgroundColor: '#FFFFFF',
          marginTop: 21,
        }}
        image={assets.lock}
        input={password}
        setInput={setPassword}
        titleColor={Colors.primary}
      />
      <LoginOptions />
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => dispatch(login())}>
          <Text style={styles.loginButtonText}>{t('LogIn')}</Text>
        </TouchableOpacity>
        <Pressable onPress={openDrawer}>
          <Image
            source={assets.fingerprint}
            style={styles.icon}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.signupLinkContainer}>
        <Text style={styles.noAccount}>
          {t('No_Account')}{' '}
          <Text
            onPress={() => navigation.navigate('Signup1')}
            style={[styles.link, {textDecorationLine: 'underline'}]}>
            {t('Sign_up')}
          </Text>
        </Text>
      </View>
    </View>
  );
}
