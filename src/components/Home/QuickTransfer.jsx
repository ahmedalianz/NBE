import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import {assets} from '../../constants';

export const QuickTransfer = () => {
  return (
    <View style={styles.quickTransfer}>
      <Text style={styles.quickTransferText}>Send money</Text>
      <ScrollView horizontal style={styles.margin}>
        {Array(10)
          .fill('card')
          .map((card, i) => (
            <View style={styles.cardView} key={i}>
              <View style={styles.profile}>
                <Image
                  source={assets.profile}
                  style={{width: 30, height: 30}}
                />
              </View>
              <Text style={styles.cardName}>Ahmed</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  quickTransfer: {},
  quickTransferText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  margin: {
    marginTop: 10,
  },
  cardView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 77,
    height: 86,
  },
  profile: {},
  cardName: {},
  historyTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  historyTitleWrapper: {
    marginTop: 20,
  },
});

export default QuickTransfer;
