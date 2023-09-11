import React, {type FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ROUTES} from '../../constants';
import BottomTabNavigation from '../BottomTab/BottomTabNavigation';
import {Metrics} from '../../theme';
import {Image, Text, View} from 'react-native';
import styles from './Styles';
import {Images} from '../../assets';

const {width, horizontalScale} = Metrics;

const CustomDrawer: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image source={Images.profile} style={styles.imageContainer} />
          <View style={styles.userDetailsContainer}>
            <Text style={styles.userNameTextStyle}>my name</Text>
            <Text style={styles.userEmailTextStyle}>my email</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        swipeEnabled: true,
        headerShown: false,
        drawerStyle: {
          width: width - horizontalScale(70),
        },
        drawerType: 'front',
      }}>
      <Drawer.Screen
        name={ROUTES.Tab}
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
