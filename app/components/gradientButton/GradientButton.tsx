import {Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../theme';
import styles from './styles';
import {GradientButtonProps} from './Types';

const GradientButton = ({title}: GradientButtonProps) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[Colors.lightGreen, Colors.lightBlue]}
      style={styles.button}>
      <Text>{title}</Text>
    </LinearGradient>
  );
};

export default GradientButton;
