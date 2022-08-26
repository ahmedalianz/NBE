import {Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants';
import styles from './Signup.styles';
export function PasswordVerificationText({title, invalid}) {
  return (
    <View style={styles.PasswordVerificationcontainer}>
      <View
        style={[
          styles.PasswordVerificationcontainerCircle,
          {
            backgroundColor: invalid ? Colors.grey : Colors.primary2,
          },
        ]}></View>
      <Text style={styles.textVerification}>{title}</Text>
    </View>
  );
}
