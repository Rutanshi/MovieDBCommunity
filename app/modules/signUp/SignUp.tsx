import {Text, View} from 'react-native';
import React from 'react';
import {GradientButton, Input} from '../../components';

const SignUp = () => {
  return (
    <View>
      <Input label="Email" />
      <Input label="Password" />
      <Input label="Confirm Password" />
      <GradientButton title="Sign Up" />
      <Text>Forgot your password?</Text>
      <View>
        <Text>Already have an account?</Text>
        <Text
          onPress={() => {
            console.log('press');
          }}>
          Sign In
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
