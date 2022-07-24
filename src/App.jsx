import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {Login, Home, Signup} from './screens';
import './localization/i18next';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <StatusBar
        animated={true}
        showHideTransition="fade"
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
          </Stack.Navigator>
          {/* <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
          </Drawer.Navigator> */}
        </NavigationContainer>
      </Provider>
    </>
  );
}
