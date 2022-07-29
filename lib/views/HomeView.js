import React, {useState, useCallback} from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, Button, Linking } from 'react-native';

import {CardCategory} from '../components/Card/CardCategory'
import {ButtonCategory} from '../components/Button/ButtonCategory'

export function HomeView() {

  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <View style={{alignItems: 'center'}}>
        <Text style={[styles.textTitle, styles.titleState]}>Statistiques</Text>
        <View style={[styles.stateCard,]}>
          {/* stat */}
        </View>
      </View>
      <View>
        <View style={[styles.titleCategory]}>
          <Text style={[styles.textTitle, styles.marginLeft]}>Catégories</Text>
          <Text style={[styles.textSeeAll, styles.marginRight]}>Tout voir</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.scrollButtonCategory]}>
          {/* button category */}
          <ButtonCategory/>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.scrollCardCategory]}>
          {/* card */}
          <CardCategory/>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  titleState: {
    marginTop: 70,
  },

  titleCategory: {
    flexDirection: "row", 
    alignItems: "center",
    marginTop: 80
  },

  textTitle: {
    fontSize: 24,
    color: '#283140',
  },

  textSeeAll: {
    fontSize: 16,
    color: "#283140",
    flex: 1, 
    textAlign: 'right'
  },

  marginLeft: {
    marginLeft: 30
  },

  marginRight: {
    marginRight: 30
  },
  
  stateCard: {
    width: 320,
    height: 130,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#283140",
    marginTop: 14
  },

  scrollCardCategory: {
    flexDirection: "row", 
    marginTop: 14
  },

  scrollButtonCategory: {
    flexDirection: "row", 
    marginTop: 14
  },
})