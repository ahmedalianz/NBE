import {View, ScrollView} from 'react-native';
import React from 'react';
// import TopBar from '../components/TopBar'
import Balance from '../components/Home/Balance.jsx';
import TopBar from '../components/Home/TopBar.jsx';
import Shortcuts from '../components/Home/Shortcuts.jsx';
import QuickTransfer from '../components/Home/QuickTransfer.jsx';
import History from '../components/Home/History.jsx';
import {StyleSheet, Text} from 'react-native';
import {SIZES} from '../constants';
import {Transactions} from './Transactions.jsx';

const users = [
  {
    id: 1,
    Name: 'Leanne Graham',
    username: 'Bret',
    Securities: 'Antonette',
    Cash: 'Antonette',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    Name: 'Ervin Howell',
    username: 'Antonette',
    Securities: 'Antonette',
    Cash: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 2,
    Name: 'Ervin Howell',
    username: 'Antonette',
    Securities: 'Antonette',
    Cash: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
];

export const Home = () => {
  return (
    <View style={styles.homeScreen}>
      <TopBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Balance />
        <Text style={styles.resuableText}> Reusable table </Text>
        <Transactions keys={['Name', 'Securities', 'Cash']} data={users} />
        <Shortcuts />
        <QuickTransfer />
        <History />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: '#1F2933',
    flex: 1,
    paddingHorizontal: SIZES.mLarge,
  },
  resuableText: {
    color: 'white',
  },
});
