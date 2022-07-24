import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import { assets } from '../../constants'
const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <View style={styles.userInfoContainer}>
        <Image
          source={assets.profile}
          style={{width: 40, height: 40}}
        />
        <View style={styles.userInfoWrapper}>
          <Text style={styles.userInfo}> Good morning </Text>
          <View>
            <Text style={styles.userInfo}> Ahmed </Text>
          </View>
        </View>
      </View>
      <Image
        source={assets.notifications}
        style={{width: 40, height: 40}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 54,
    marginBottom: 20,
  },
  userInfo: {
    color: 'white',
  },
  userInfoWrapper: {
    paddingLeft: 5,
  },
});

export default TopBar;
