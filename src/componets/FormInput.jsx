import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { colors, font } from '../utils/constants';
import { TextInput } from 'react-native-gesture-handler';

export default function FormInput({
  height,
  marginbottom,
  placeholder,
  inputMode,
  keyboardType,
  borderBottomColorActive,
  borderBottomColor,
  borderBottomWidth,
  activeColor,
  securedTextEntry,
  labelText,
}) {
  const [isFocused, setFocused] = useState(false);
  return (
    <View style={{ marginBottom: marginbottom }}>
      <Text style={[isFocused && { color: activeColor }]}>{labelText}</Text>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        inputMode={inputMode}
        secureTextEntry={securedTextEntry}
        style={[
          {
            borderBottomWidth,
            borderBottomColor,
            height,
          },
          isFocused && { borderBottomColor: borderBottomColorActive },
        ]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
}
