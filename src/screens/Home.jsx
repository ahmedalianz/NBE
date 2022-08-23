import {View, ScrollView} from 'react-native';
import React from 'react';
// import TopBar from '../components/TopBar'
// import Balance from '../components/Home/Balance.jsx';
import TopBar from '../components/Home/TopBar.jsx';
// import Shortcuts from '../components/Home/Shortcuts.jsx';
// import QuickTransfer from '../components/Home/QuickTransfer.jsx';
// import History from '../components/Home/History.jsx';
import {StyleSheet} from 'react-native';

export const Home = () => {
  return (
    <View style={styles.homeScreen}>
      <TopBar />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <Balance />
        <Shortcuts />
        <QuickTransfer />
        <History />
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: '#1F2933',
    flex: 1,
  },
});
