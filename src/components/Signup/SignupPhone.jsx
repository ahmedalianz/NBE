import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {assets, COLORS, SIZES} from '../../constants';
import {LoginInput} from '../Login';
export function SignupPhone() {
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.phoneContainer}>
      <Text style={[styles.title, {color: COLORS.white}]}>Mobile number</Text>
      <Text style={[styles.sub_title, {color: '#B7B7B7'}]}>
        Enter the mobile number registred in the bank
      </Text>
      <LoginInput
        title="Mobile number"
        borderColor="#12A759"
        titleColor="#12A759"
        backgroundColor="#323F4B"
        image={assets.phone}
        input={phone}
        setInput={setPhone}
      />
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
});
