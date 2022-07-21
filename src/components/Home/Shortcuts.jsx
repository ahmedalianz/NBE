import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Shortcuts = () => {
  return (
    <View style={styles.shortcutsContainer}>
      <View>
        <View style={styles.shortcutStyle}>
             <Image source={require('../../assets/icons/dollar.png')} 
            style={{width: 28, height: 20}}
            />
        </View>
        <Text style={styles.shortcutText}> Accounts </Text>
      </View>
      <View>
        <View style={styles.shortcutStyle}>
             <Image source={require('../../assets/icons/dollar.png')} 
            style={{width: 28, height: 20}}
            />
        </View>
        <Text style={styles.shortcutText}> Cards </Text>
      </View>
      <View>
        <View style={styles.shortcutStyle}>
             <Image source={require('../../assets/icons/dollar.png')} 
            style={{width: 28, height: 20}}
            />
        </View>
        <Text style={styles.shortcutText}> Utilities </Text>
      </View>
      <View>
        <View style={styles.shortcutStyle}>
             <Image source={require('../../assets/icons/dollar.png')} 
            style={{width: 28, height: 20}}
            />
        </View>
        <Text style={styles.shortcutText}> History </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    shortcutsContainer: {
        paddingHorizontal: 25,
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    shortcutStyle:{
        backgroundColor:'#00C97426',
        height: 60,
        width: 60,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shortcutText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 5
    }
})



export default Shortcuts