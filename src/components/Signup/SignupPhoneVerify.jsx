import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, SIZES} from '../../constants';
import NumberInput from './NumberInput';
export function SignupPhoneVerify() {
  const [phone, setPhone] = useState('');
  const [interval, setIntervalTime] = useState(16);
  const [numberStep, setNumberStep] = useState(1);
  useEffect(() => {
    let countDown = 16;
    const intervalTime = setInterval(() => {
      if (countDown === 1) {
        clearInterval(intervalTime);
      }
      countDown--;
      setIntervalTime(val => val - 1);
    }, 1000);
    return () => clearInterval(intervalTime);
  }, []);
  const nextNumber = () => {
    setNumberStep(val => val + 1);
  };
  console.log(numberStep);
  return (
    <View style={styles.phoneContainer}>
      <Text style={[styles.title, {color: COLORS.white}]}>Verification</Text>
      <Text style={[styles.sub_title, {color: '#B7B7B7'}]}>
        Enter 5 digit code we sent to +20 101 131 5412
      </Text>
      <View style={styles.numbersContainer}>
        <NumberInput nextNumber={nextNumber} focused={numberStep === 1} />
        <NumberInput nextNumber={nextNumber} focused={numberStep === 2} />
        <NumberInput nextNumber={nextNumber} focused={numberStep === 3} />
        <NumberInput nextNumber={nextNumber} focused={numberStep === 4} />
        <NumberInput focused={numberStep === 5} />
      </View>
      <View>
        <Text style={styles.noRecive}>Didn’t receive the code?</Text>
        <Text style={styles.countDown}>Request new one in 00:{interval}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneContainer: {marginTop: SIZES.xLarge},
  title: {fontWeight: 'bold', fontSize: 20, marginBottom: 5},
  sub_title: {
    fontSize: SIZES.medium,
    marginBottom: 20,
  },
  noRecive: {
    color: '#B7B7B7',
    fontSize: SIZES.medium,
  },
  numbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  countDown: {
    color: COLORS.white,
    fontWeight: 'bold',
    lineHeight: SIZES.large,
  },
});
