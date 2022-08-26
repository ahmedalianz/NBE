import React from 'react';
import './localization';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigations from './navigations';
import {SheetProvider} from 'react-native-actions-sheet';
import './components/sheets/sheets';
export default function App() {
  return (
    <SheetProvider>
      <SafeAreaProvider>
        <Provider store={store}>
          <StatusBar
            animated={true}
            showHideTransition="fade"
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
          <Navigations />
        </Provider>
      </SafeAreaProvider>
    </SheetProvider>
  );
}
