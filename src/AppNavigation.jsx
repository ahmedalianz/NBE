import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Login, Home, Signup} from './screens';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function AppNavigation() {
  const {isAuthenticated} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Group>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
