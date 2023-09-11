import {View, Text} from 'react-native';
import React from 'react';
import {GradientButton, Input} from '../../components';

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Input label={'Email'} />
      <Input label={'Password'} />
      <GradientButton title="signIN" />
      <View>
        <Text>Don't have an account?</Text>
        <Text
          onPress={() => {
            console.log('press');
          }}>
          register
        </Text>
      </View>
      <Text>or Connect with</Text>
    </View>
  );
};

export default SignIn;
