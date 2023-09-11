import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import {InputProps} from './Types';

const Input = ({label}: InputProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} />
    </View>
  );
};

export default Input;
