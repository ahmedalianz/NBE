import {StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS, SIZES} from '../../constants';

export default function NumberInput({nextNumber, focused}) {
  const [borderColor, setBorderColor] = useState('transparent');
  const numberRef = useRef(null);
  const focusInput = () => {
    setBorderColor(COLORS.primary);
  };
  const blurInput = () => {
    setBorderColor('transparent');
  };
  useEffect(() => {
    if (focused) {
      numberRef.current.focus();
    }
  }, [focused]);
  return (
    <View style={styles.numberInputContainer}>
      <TextInput
        ref={numberRef}
        keyboardType="numeric"
        style={[styles.numberInputText, {borderColor}]}
        maxLength={1}
        onFocus={focusInput}
        onBlur={blurInput}
        onTextInput={nextNumber}
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
