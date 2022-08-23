import React from 'react';
import './localization/i18next';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigations from './navigations';
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          animated={true}
          showHideTransition="fade"
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Navigations />
      </SafeAreaProvider>
    </Provider>
  );
}
