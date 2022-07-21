import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const QuickTransfer = () => {
  return (
    <View style={styles.quickTransfer}>
      <Text style={styles.quickTransferText}>Send money</Text>
      <View style={styles.margin}></View>
      <ScrollView horizontal>
            <View style={styles.cardView}>
                <View style={styles.profile}>
                    <Image source={require('../../assets/icons/profile.png')} 
                    style={{width: 30, height: 30}}
                    />
                </View>
                <Text style={styles.cardName}>Ahmed</Text>  
            </View>
            <View style={styles.cardView}>
                <View style={styles.profile}>
                    <Image source={require('../../assets/icons/profile.png')} 
                    style={{width: 30, height: 30}}
                    />
                </View>
                <Text style={styles.cardName}>Ahmed</Text>  
            </View>
            <View style={styles.cardView}>
                <View style={styles.profile}>
                    <Image source={require('../../assets/icons/profile.png')} 
                    style={{width: 30, height: 30}}
                    />
                </View>
                <Text style={styles.cardName}>Ahmed</Text>  
            </View>
            <View style={styles.cardView}>
                <View style={styles.profile}>
                    <Image source={require('../../assets/icons/profile.png')} 
                    style={{width: 30, height: 30}}
                    />
                </View>
                <Text style={styles.cardName}>Ahmed</Text>  
            </View>
            <View style={styles.cardView}>
                <View style={styles.profile}>
                    <Image source={require('../../assets/icons/profile.png')} 
                    style={{width: 30, height: 30}}
                    />
                </View>
                <Text style={styles.cardName}>Ahmed</Text>  
            </View>
            <View style={styles.cardView}>
                <View style={styles.profile}>
                    <Image source={require('../../assets/icons/profile.png')} 
                    style={{width: 30, height: 30}}
                    />
                </View>
                <Text style={styles.cardName}>Ahmed</Text>  
            </View>
            <View style={styles.cardView}>
                <View style={styles.profile}>
                    <Image source={require('../../assets/icons/profile.png')} 
                    style={{width: 30, height: 30}}
                    />
                </View>
                <Text style={styles.cardName}>Ahmed</Text>  
            </View>
      </ScrollView>
     
    </View>
  )
}

const styles = StyleSheet.create({
    quickTransfer: {
        paddingLeft: 25,
        marginTop: 25,
    },
    quickTransferText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    margin: {
        marginTop: 10
    },
    cardView: {
        marginRight: 13,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 77,
        height: 86,
        borderRadius: 18
    },
    profile:{
        backgroundColor: 'white',
       
    },
    cardName: {
        color: 'black',
    },
    historyTitle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    historyTitleWrapper:{
        marginTop: 20
    }
})

export default QuickTransfer