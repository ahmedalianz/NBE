import {
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
export function SignupFooter({nextStep}) {
  return (
    <KeyboardAvoidingView behavior="position">
      <TouchableOpacity style={styles.buttonContainer} onPress={nextStep}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        By signing up, you agree to our{' '}
        <Text style={styles.highlightedText}>Terms of Service</Text> and
        acknowledge that you have read our{' '}
        <Text style={styles.highlightedText}>Privacy Policy</Text>.
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
