import {Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {assets} from '../../constants';
import {useTranslation} from 'react-i18next';
import styles from './Login.styles';
export function FingerPrint({closeDrawer}) {
  const {t} = useTranslation();

  return (
    <View style={styles.fingerprintContainer}>
      <Pressable onPress={closeDrawer}></Pressable>
      <View>
        <Text style={styles.fingerprintHeader}>{t('FingerPrint_header')}</Text>
        <Text style={styles.fingerprintSubHeader}>
          {t('FingerPrint_login')}
        </Text>
        <View style={styles.modalSensor}>
          <Image
            source={assets.sensor_dark}
            style={styles.sensorImage}
            resizeMode="contain"
          />
          <Text style={styles.touchText}>{t('FingerPrint_touch')}</Text>
        </View>
        <Pressable onPress={closeDrawer}>
          <Text style={styles.cancel}>{t('Cancel')}</Text>
        </Pressable>
      </View>
    </View>
  );
}
