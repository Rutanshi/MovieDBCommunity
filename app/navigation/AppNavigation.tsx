import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {type FC} from 'react';
import {ROUTES} from '../constants';
import type {
  AppStackParamList,
  AuthStackParamList,
  RootStackParamList,
} from './NavigationTypes';
import DrawerNavigation from './DrawerNavigation/DrawerNavigation';
import {Authentication, SignIn, SignUp} from '../modules';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name={ROUTES.Authentication}
        component={Authentication}
      />
      <AuthStack.Screen name={ROUTES.SignIn} component={SignIn} />
      <AuthStack.Screen name={ROUTES.SignUp} component={SignUp} />
    </AuthStack.Navigator>
  );
};

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name={ROUTES.Drawer} component={DrawerNavigation} />
    </AppStack.Navigator>
  );
};

const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {false ? (
          <RootStack.Screen
            name={ROUTES.AppStack}
            component={AppStackNavigator}
          />
        ) : (
          <RootStack.Screen
            name={ROUTES.AuthStack}
            component={AuthStackNavigator}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
