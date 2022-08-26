import {Text, View, Image, Pressable} from 'react-native';
import React, {useRef} from 'react';
import {assets} from '../../../constants';
import {useTranslation} from 'react-i18next';
import styles from './FingerPrint.styles';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

export default function FingerPrint({sheetId}) {
  const {t} = useTranslation();
  const actionSheetRef = useRef(null);
  const closeSheet = () => {
    SheetManager.hide(sheetId);
  };
  return (
    <ActionSheet
      id={sheetId}
      ref={actionSheetRef}
      overlayColor="rgba(28, 36, 55);"
      defaultOverlayOpacity={0.7}
      containerStyle={{
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        backgroundColor: '#111111',
      }}>
      <View style={styles.fingerprintContainer}>
        <View>
          <Text style={styles.fingerprintHeader}>
            {t('FingerPrint_header')}
          </Text>
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
          <Pressable onPress={closeSheet}>
            <Text style={styles.cancel}>{t('Cancel')}</Text>
          </Pressable>
        </View>
      </View>
    </ActionSheet>
  );
}
