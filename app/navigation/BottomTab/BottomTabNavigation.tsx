import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {type FC} from 'react';
import {Image, Text, View} from 'react-native';
import {Icons} from '../../assets';
import {ROUTES, Strings} from '../../constants';
import {Home} from '../../modules';
import {Colors} from '../../theme';
import styles from './Styles';
import type {TabOptionsProps} from './Types';

const TabScreens = [
  {
    route: ROUTES.Home,
    // label: Strings.home,
    icon: Icons.home,
    component: Home,
  },
];

const TabOptions: FC<TabOptionsProps> = ({image, focused}) => {
  const activeTabColor = focused ? 'red' : Colors.black;
  return (
    <View style={styles.tabOption}>
      <Image
        style={[styles.tabImage, {tintColor: activeTabColor}]}
        source={image}
      />
      {/* <Text style={[styles.tabLabel, {color: activeTabColor}]}>}</Text> */}
    </View>
  );
};

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {TabScreens.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarIcon: ({focused}) => (
                <TabOptions
                  // label={item.label}
                  focused={focused}
                  image={item.icon}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
