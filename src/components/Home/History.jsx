import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export const History = () => {
  return (
    <View style={styles.historyWrapper}>
      <View style={styles.historyTitleWrapper}>
        <Text style={styles.historyTitle}>History</Text>
      </View>

      <View>
        <View style={styles.listItemWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/icons/amazon.png')}
              style={{width: 50, height: 50}}
            />
          </View>
          <View style={styles.historyItemWrapper}>
            <Text style={styles.historyItemTitle}>Amazon</Text>
            <Text style={styles.historyItemTitle}>20 Jul 2022</Text>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}> $100 </Text>
          </View>
        </View>
        <View style={styles.listItemWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/icons/amazon.png')}
              style={{width: 50, height: 50}}
            />
          </View>
          <View style={styles.historyItemWrapper}>
            <Text style={styles.historyItemTitle}>Amazon</Text>
            <Text style={styles.historyItemTitle}>20 Jul 2022</Text>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}> $100 </Text>
          </View>
        </View>
        <View style={styles.listItemWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/icons/amazon.png')}
              style={{width: 50, height: 50}}
            />
          </View>
          <View style={styles.historyItemWrapper}>
            <Text style={styles.historyItemTitle}>Amazon</Text>
            <Text style={styles.historyItemTitle}>20 Jul 2022</Text>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}> $100 </Text>
          </View>
        </View>
        <View style={styles.listItemWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/icons/amazon.png')}
              style={{width: 50, height: 50}}
            />
          </View>
          <View style={styles.historyItemWrapper}>
            <Text style={styles.historyItemTitle}>Amazon</Text>
            <Text style={styles.historyItemTitle}>20 Jul 2022</Text>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}> $100 </Text>
          </View>
        </View>
        <View style={styles.listItemWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/icons/amazon.png')}
              style={{width: 50, height: 50}}
            />
          </View>
          <View style={styles.historyItemWrapper}>
            <Text style={styles.historyItemTitle}>Amazon</Text>
            <Text style={styles.historyItemTitle}>20 Jul 2022</Text>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}> $100 </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historyTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  historyTitleWrapper: {
    marginTop: 20,
  },
  historyItemTitle: {},
  listItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  priceWrapper: {
    textAlign: 'right',
  },
  price: {
    fontWeight: 'bold',
  },
  historyItemWrapper: {
    paddingLeft: 10,
    width: '70%',
  },
});
