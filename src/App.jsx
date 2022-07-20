import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from './screens';
import './localization/i18next';
import {StatusBar} from 'react-native';
import LanguageContextProvider from './store/LanguageContext';
const Stack = createNativeStackNavigator();
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
      <LanguageContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      </LanguageContextProvider>
    </>
  );
}
