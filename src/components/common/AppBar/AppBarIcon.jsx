import {Image, Pressable, View} from 'react-native';
import React from 'react';
import styles from './AppBar.styles';
import {assets, Layouts} from '../../../constants';
export default function AppBarIcon({icon, onPress}) {
  let iconOption = {
    ar: assets.ar,
    en: assets.en,
    logo: assets.logo,
    back: assets.arrow_back,
  };
  return (
    <Pressable style={styles.mx10} onPress={onPress}>
      <Image source={iconOption[icon]} />
    </Pressable>
  );
}
