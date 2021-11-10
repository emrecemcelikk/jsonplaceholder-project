/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import screens
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export default function AppNavigationContainer(){
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}} >
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

