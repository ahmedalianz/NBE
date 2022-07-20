import {
  Text,
  Modal,
  StyleSheet,
  View,
  Image,
  Pressable,
  I18nManager,
} from 'react-native';
import React from 'react';
import {assets, COLORS, SIZES} from '../../constants';
import {useTranslation} from 'react-i18next';

export function FingerPrintModal({modalVisibility, setModalVisibility}) {
  const {t} = useTranslation();
  const hideModal = () => {
    setModalVisibility(false);
  };
  return (
    <Modal
      onRequestClose={hideModal}
      animationType="slide"
      transparent
      visible={modalVisibility}
      style={styles.modal}>
      <Pressable onPress={hideModal}>
        <Image
          style={styles.backImage}
          source={assets.fade}
          resizeMode="cover"
        />
      </Pressable>
      <View
        style={[
          styles.modalMain,
          {backgroundColor: I18nManager.isRTL ? COLORS.white : 'black'},
        ]}>
        <Text
          style={[
            styles.header,
            {color: I18nManager.isRTL ? 'black' : COLORS.white},
          ]}>
          {t('FingerPrint_header')}
        </Text>
        <Text
          style={[
            styles.sub_header,
            {color: I18nManager.isRTL ? 'black' : COLORS.white},
          ]}>
          {t('FingerPrint_login')}
        </Text>
        <View style={styles.modalSensor}>
          <Image
            source={
              I18nManager.isRTL ? assets.sensor_light : assets.sensor_dark
            }
            style={{width: 100, height: 100}}
          />
          <Text style={[styles.sub_header, {color: '#B7B7B7'}]}>
            {t('FingerPrint_touch')}
          </Text>
        </View>
        <Pressable onPress={hideModal}>
          <Text style={styles.cancel}>{t('Cancel')}</Text>
        </Pressable>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalMain: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: SIZES.medium,
  },
  sub_header: {
    fontSize: SIZES.medium,
    lineHeight: SIZES.large,
    marginTop: SIZES.medium,
  },
  header: {
    fontSize: 20,
    lineHeight: SIZES.mLarge,
  },
  backImage: {
    width: '100%',
    zIndex: -1,
    position: 'absolute',
  },
  cancel: {
    textAlign: 'right',
    color: COLORS.primary,
    fontSize: SIZES.medium,
    lineHeight: SIZES.large,
  },
  modalSensor: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 37,
  },
});
