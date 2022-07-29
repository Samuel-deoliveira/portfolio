import React, {useState, useCallback} from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, Button, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import picture from '../../../assets/pictures/feuille.png'

export function CardCategory() {

  // card category
  var nomberCard = 5

  var cardCategory = []
  
  for(let i = 0; i < nomberCard; i++) {

    if ((i + 1) === nomberCard) {
      cardCategory.push(
        <View key={i}  style={[styles.cardCategory, styles.marginRight]}>
          <Image source={picture} style={[styles.cardPicture]}></Image>
          <Text style={[styles.textTitleCard]}>Thyrium Info</Text>
          <Text style={[styles.textUserCard]}>Samuel De oliveira</Text>
          <View style={{flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 4}}>
            <Ionicons name="timer-outline" size={13} color="#283140"/>
            <Text style={[styles.textTimerCard]}>10h</Text>
          </View>
          <View style={[styles.cardLinkRepo]}>
            <Text style={[styles.textLinkRepo]}>Voir le repos</Text>
          </View>
        </View>
      )
    }
    else if (i === 0) {
      cardCategory.push(
        <View key={i}  style={[styles.cardCategory, styles.marginLeft]}>
          <Image source={picture} style={[styles.cardPicture]}></Image>
          <Text style={[styles.textTitleCard]}>Thyrium Info</Text>
          <Text style={[styles.textUserCard]}>Samuel De oliveira</Text>
          <View style={{flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 4}}>
            <Ionicons name="timer-outline" size={13} color="#283140"/>
            <Text style={[styles.textTimerCard]}>10h</Text>
          </View>
          <View style={[styles.cardLinkRepo]}>
            <Text style={[styles.textLinkRepo]}>Voir le repos</Text>
          </View>
        </View>
      )
    } 
    else {
      cardCategory.push(
        <View key={i}  style={[styles.cardCategory]}>
          <Image source={picture} style={[styles.cardPicture]}></Image>
          <Text style={[styles.textTitleCard]}>Thyrium Info</Text>
          <Text style={[styles.textUserCard]}>Samuel De oliveira</Text>
          <View style={{flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 4}}>
            <Ionicons name="timer-outline" size={13} color="#283140"/>
            <Text style={[styles.textTimerCard]}>10h</Text>
          </View>
          <View title="Voir le repos" style={[styles.cardLinkRepo]}>
            <Text style={[styles.textLinkRepo]}>Voir le repos</Text>
            </View>
        </View>
      )
    }

  }

  return cardCategory

}

const styles = StyleSheet.create({

  marginLeft: {
    marginLeft: 30
  },

  marginRight: {
    marginRight: 30
  },

  cardCategory: {
    backgroundColor: "white",
    width: 180,
    height: 250,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 16,
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5
  },

  cardPicture: {
    height: 110,
    width: 110
  },

  textTitleCard: {
    fontSize: 18,
    color: "#283140",
    marginTop: 14
  },

  textUserCard: {
    fontSize: 12,
    color: "#757474",
    marginTop: 2
  },

  cardLinkRepo: {
    width: 180,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0C5EF9",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  
  textLinkRepo: {
    fontSize: 12,
    color: "#ffffff"
    
  },

  textTimerCard: {
    fontSize: 12,
    color: "#283140",
    marginLeft: 2
  },


})