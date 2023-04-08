import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView, ImageBackground } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screen
import HomeScreen from './screen/HomeScreen';
import RequestScreen from './screen/RequestScreen';
import ProfileScreen from './screen/ProfileScreen';

//Screen Names
const homeName = 'Home';
const requestName = 'Request';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline'
            } else if (rn === requestName) {
              iconName = focused ? 'add' : 'add-circle-outline'
            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-circle-outline'
            }

            return <Ionicons name = {iconName} size = {size} color = {color}/>
          },
        })}>

        <Tab.Screen name = {homeName} component={HomeScreen}/>
        <Tab.Screen name = {requestName} component={RequestScreen}/>
        <Tab.Screen name = {profileName} component={ProfileScreen}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

