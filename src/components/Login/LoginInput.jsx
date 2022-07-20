import {
  View,
  Text,
  TextInput,
  Animated,
  StyleSheet,
  Image,
  I18nManager,
  Pressable,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {assets, COLORS, SIZES} from '../../constants';

export function LoginInput({
  borderColor,
  backgroundColor,
  title,
  titleColor,
  name,
  image,
  marginTop,
  input,
  setInput,
}) {
  const moveText = useRef(new Animated.Value(0)).current;
  const textRef = useRef(null);
  const [secureText, setSecureText] = useState(name === 'Password');
  const changeSecureTextEntry = () => {
    setSecureText(val => !val);
  };
  useEffect(() => {
    if (input !== '') {
      moveTextTop();
    } else if (input === '') {
      moveTextBottom();
    }
  }, [input]);

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -12],
  });
  const inputFocus = () => {
    textRef.current.focus();
  };
  const inputBlur = () => {
    textRef.current.blur();
  };
  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <TouchableNativeFeedback onPress={inputBlur}>
      <View
        style={[
          styles.inputContainer,
          {borderColor, backgroundColor, marginTop},
        ]}>
        <Animated.View style={[styles.animatedStyle, animStyle]}>
          <Text
            onPress={inputFocus}
            style={{
              color: titleColor,
              fontWeight: '700',
              fontSize: SIZES.small,
              lineHeight: SIZES.medium,
            }}>
            {title}
          </Text>
        </Animated.View>
        <Image
          source={image}
          style={[styles.inputIcon, {left: 22}]}
          resizeMode="contain"
        />
        <TextInput
          ref={textRef}
          autoCapitalize={'none'}
          value={input}
          onChangeText={setInput}
          blurOnSubmit
          onEndEditing={inputBlur}
          secureTextEntry={secureText}
          style={[
            styles.inputText,
            {color: name === 'Username' ? COLORS.white : 'black'},
          ]}
        />
        {name === 'Password' && (
          <Pressable
            style={[styles.inputIcon, {right: 22}]}
            onPress={changeSecureTextEntry}>
            <Image
              source={I18nManager.isRTL ? assets.eye_light : assets.eye}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </TouchableNativeFeedback>
  );
}
const styles = StyleSheet.create({
  animatedStyle: {
    top: 15,
    left: 65,
    position: 'absolute',
    borderRadius: 90,
    fontSize: SIZES.small,
    lineHeight: SIZES.medium,
    zIndex: 2,
  },
  inputContainer: {
    borderWidth: 1.5,
    borderRadius: 10,
    height: 65,
  },
  whiteText: {
    color: COLORS.white,
  },
  inputIcon: {width: 20, height: 22, position: 'absolute', top: 20},
  inputText: {
    marginLeft: 65,
    position: 'relative',
    top: 10,
  },
});
