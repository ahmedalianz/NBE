import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../constants';

export default function NumberInput() {
  const [borderColor, setBorderColor] = useState('transparent');
  const focusInput = () => {
    setBorderColor(COLORS.primary);
  };
  const blurInput = () => {
    setBorderColor('transparent');
  };
  return (
    <View style={styles.numberInputContainer}>
      <TextInput
        keyboardType="numeric"
        style={[styles.numberInputText, {borderColor}]}
        maxLength={1}
        onFocus={focusInput}
        onBlur={blurInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  numberInputContainer: {
    backgroundColor: '#323F4B',
    width: 45,
    borderRadius: 10,
    height: 65,
  },
  numberInputText: {
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: 'bold',
    borderWidth: 2,
    color: COLORS.white,
  },
});
