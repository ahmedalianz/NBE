import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Home, Signup1, Signup2, Signup3, Signup4} from '../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function Navigations() {
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
            <Stack.Screen name="Signup1" component={Signup1} />
            <Stack.Screen
              name="Signup2"
              component={Signup2}
              options={{animation: 'slide_from_right'}}
            />
            <Stack.Screen
              name="Signup3"
              component={Signup3}
              options={{animation: 'slide_from_right'}}
            />
            <Stack.Screen
              name="Signup4"
              component={Signup4}
              options={{animation: 'slide_from_right'}}
            />
          </Stack.Group>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
