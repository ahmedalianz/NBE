import {
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import {useTranslation} from 'react-i18next';
export function SignupFooter({nextStep}) {
  const {t} = useTranslation();
  return (
    <KeyboardAvoidingView behavior="position">
      <TouchableOpacity style={styles.buttonContainer} onPress={nextStep}>
        <Text style={styles.buttonText}>{t('Next')}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        {t('Sign')} <Text style={styles.highlightedText}>{t('Terms')}</Text>{' '}
        {t('Acknowledge')}{' '}
        <Text style={styles.highlightedText}>{t('Privacy')}</Text>.
      </Text>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.primary,
    padding: SIZES.large,
    borderRadius: SIZES.xSmall,
  },
  buttonText: {
    color: COLORS.white,
    lineHeight: SIZES.large,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: '#808080',
    marginVertical: SIZES.mLarge,
    textAlign: 'center',
  },
  highlightedText: {
    color: COLORS.white,
  },
});
