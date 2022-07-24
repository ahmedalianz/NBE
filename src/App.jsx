import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Signup} from './screens';
import './localization/i18next';
import {StatusBar, Text} from 'react-native';
import LanguageContextProvider from './store/LanguageContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Profile() {
  return <Text>profile</Text>;
}

function HomeNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

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
            <Stack.Screen name="Home" component={HomeNavigator}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </LanguageContextProvider>
    </>
  );
}

{
  /* <NavigationContainer>
      <Tab.Navigator
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Transfer" component={TransferScreen} />
      </Tab.Navigator>
    </NavigationContainer> */
}
