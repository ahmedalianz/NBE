import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';

const History = () => {
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
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  historyTitleWrapper: {
    marginTop: 20,
  },
  historyItemTitle: {
    color: COLORS.white,
  },
  listItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  priceWrapper: {
    textAlign: 'right',
  },
  price: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  historyItemWrapper: {
    paddingLeft: 10,
    width: '70%',
  },
});

export default History;
