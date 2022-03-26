import React from "react";
import { View } from "react-native";
import { TextInput } from 'react-native-paper';

import styles from "./styles";

const appThemeWhite = '#FFFFFF';
const appThemeBlack = '#000000';

const Input = (props) => {

  const {
    value,
    onChangeText,
    onSubmitEditing,
    inputStyle,
    inputContainerStyle,
    textInputProps,
    inputTheme,
    inputLabel
  } = props;

  return (
    <View style={[styles.textInputContainer, inputContainerStyle]}>
      <TextInput
        {...textInputProps}
        style={[styles.textInput, inputStyle]}
        theme={inputTheme}
        placeholder={inputLabel}
        label={inputLabel}
        value={value}
        mode={'outlined'}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        underlineColorAndroid="transparent"
      />
    </View>
  );

};

export { Input };
export default Input;