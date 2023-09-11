import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {Metrics} from '../../theme';
import styles from './styles';
import {SignUp} from '../signUp';
import {SignIn} from '../signIn';
import {Icons} from '../../assets';

const {behavior} = Metrics;

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoiding}
      behavior={behavior}
      testID="keyboardView">
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Image source={Icons.home} style={styles.largeLogo} />
        {isSignUp ? <SignUp /> : <SignIn />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Authentication;
