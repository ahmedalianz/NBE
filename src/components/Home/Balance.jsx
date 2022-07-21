import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const Balance = () => {
  return (
    <View style={styles.balanceContainer}>
      <View style={styles.balanceWrapper}>
          {/* balance-bg */}
            <ImageBackground style={styles.balanceImage} source={require('../../assets/icons/balance-bg.png')} >
                <Text style={styles.balance}> Tap to view your balance </Text>
            </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
    balanceContainer:{
        paddingHorizontal: 25
    },
    balanceWrapper: {
        backgroundColor: 'black',
        borderRadius: 22
    },
    balanceImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        height: 132
    },
    balance: {
        color: 'white',
        fontSize: 24
    }
})

export default Balance