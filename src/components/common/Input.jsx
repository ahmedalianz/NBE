import {
  View,
  Text,
  TextInput,
  Animated,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {assets, Colors, Layouts, Scaling, Typography} from '../../constants';
export function Input({
  style,
  title,
  titleColor,
  type,
  image,
  input,
  setInput,
  keyboardType = 'default',
}) {
  const moveText = useRef(new Animated.Value(0)).current;
  const textRef = useRef(null);
  const [secureText, setSecureText] = useState(type === 'password');
  const changeSecureTextEntry = useCallback(() => {
    setSecureText(val => !val);
  }, []);
  const animateText = useCallback(() => {
    if (input !== '') {
      moveTextTop();
    } else if (input === '') {
      moveTextBottom();
    }
  }, [input]);
  useEffect(() => {
    animateText();
  }, [input]);

  const moveTextTop = useCallback(() => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const moveTextBottom = useCallback(() => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);
  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -12],
  });
  const inputFocus = useCallback(() => {
    textRef.current.focus();
  }, []);
  const inputBlur = useCallback(() => {
    textRef.current.blur();
  }, []);
  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <Pressable onPress={inputBlur} style={[styles.inputContainer, style]}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text onPress={inputFocus} style={[styles.label, {color: titleColor}]}>
          {title}
        </Text>
      </Animated.View>
      <View style={[Layouts.rowBetween, Layouts.yCentered, {height: '100%'}]}>
        <Image source={image} style={styles.inputIcon} resizeMode="contain" />
        <TextInput
          ref={textRef}
          autoCapitalize={'none'}
          value={input}
          onChangeText={setInput}
          blurOnSubmit
          onEndEditing={inputBlur}
          keyboardType={keyboardType}
          secureTextEntry={secureText}
          style={[
            styles.inputText,
            {color: type === 'password' ? Colors.primary : Colors.white},
            {width: type === 'password' ? '70%' : '100%'},
          ]}
        />
        {type === 'password' && (
          <Pressable
            style={[styles.inputIcon, {right: 22}]}
            onPress={changeSecureTextEntry}>
            <Image
              source={assets.eye}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </Pressable>
        )}
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  animatedStyle: {
    top: 15,
    left: 65,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 2,
  },
  inputContainer: {
    borderWidth: 1.5,
    borderRadius: 10,
    height: 65,
  },
  label: {...Typography.FONT_SIZE_14, ...Typography.FONT_BOLD.en},
  inputIcon: {width: 20, height: 22, marginLeft: Scaling.scale(20)},
  inputText: {
    marginLeft: Scaling.scale(20),
    ...Typography.FONT_SIZE_16,
    ...Typography.FONT_REGULAR.en,
  },
});
