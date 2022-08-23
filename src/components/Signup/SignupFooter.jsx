import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Layouts, Scaling, Typography} from '../../constants';
import {useTranslation} from 'react-i18next';
export function SignupFooter({
  buttonHandler,
  buttonText,
  outlined,
  withText,
  phone,
  value,
  step,
  passwordAccepted,
}) {
  const {t} = useTranslation();
  let [buttonStyle, setButtonStyle] = useState(Colors.primary);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    switch (step) {
      case 'enter-phone':
        setButtonStyle(
          phone.length === 11
            ? outlined
              ? Colors.white
              : Colors.primary
            : Colors.mid_green,
        );
        setButtonDisabled(phone.length !== 11);
        break;
      case 'verify-phone':
        setButtonStyle(
          value.length === 5
            ? outlined
              ? Colors.white
              : Colors.primary
            : Colors.mid_green,
        );
        setButtonDisabled(value.length !== 5);
        break;
      case 'set-password':
        setButtonStyle(
          passwordAccepted
            ? outlined
              ? Colors.white
              : Colors.primary
            : Colors.mid_green,
        );
        setButtonDisabled(!passwordAccepted);
        break;
      case 'signup-success':
        setButtonStyle(outlined ? Colors.white : Colors.primary);
        setButtonDisabled(false);
        break;
      default:
        setButtonStyle(Colors.primary);
        setButtonDisabled(true);
        break;
    }
  }, [phone, passwordAccepted, value]);

  return (
    <View>
      <TouchableOpacity
        disabled={buttonDisabled}
        style={[
          styles.buttonContainer,
          {
            backgroundColor: buttonStyle,
          },
        ]}
        onPress={buttonHandler}>
        <Text
          style={[
            styles.buttonText,
            {color: outlined ? Colors.primary : Colors.white},
          ]}>
          {t(buttonText)}
        </Text>
      </TouchableOpacity>
      {withText && (
        <Text style={styles.text}>
          {t('Sign')} <Text style={styles.highlightedText}>{t('Terms')}</Text>
          {t('Acknowledge')}
          <Text style={styles.highlightedText}>{t('Privacy')}</Text>.
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: Scaling.verticalScale(50),
    ...Layouts.allCentered,
    borderRadius: Scaling.moderateScale(12),
    marginBottom: Scaling.verticalScale(25),
  },
  buttonText: [Typography.FONT_SIZE_16, Typography.FONT_BOLD],

  text: {
    marginBottom: Scaling.verticalScale(25),
    color: '#808080',
    textAlign: 'center',
  },
  highlightedText: {
    color: Colors.white,
  },
});
