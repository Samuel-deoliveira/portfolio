import React, {useState, useCallback } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, Modal, Pressable, Alert, StyleSheet} from 'react-native';
import {FontAwesome5, EvilIcons, AntDesign, Ionicons   } from '@expo/vector-icons'
import DropDownPicker from 'react-native-dropdown-picker';

const config = require('../../../config.js')
const {ReposFetcher} = require('../../service/github/models/repos/ReposFetcher')

import picture from '../../../assets/pictures/feuille.png'

export function CardSearch() {

  const t = new ReposFetcher()

  var t01 = []

  const [sateTitle, setStateTitle] = useState({test : []})

   t.getAllRepos(config.github_token).then((response) => {
    for(let i = 0; i < response.result.length; i++) {
        if (response.result[i].private === false) {
          t01.push({
            title: response.result[i].name,
            avatar_url: response.result[i].owner.avatar_url,
            owner_name: response.result[i].owner.login
          })
        }
    }

    setStateTitle({test: t01})
  })

  var carSearch = []
  
  var n = sateTitle.test.length

  for (let i = 0; i < n ; i++) {

    carSearch.push(
      <View key={i} style={styles.card_style}>
        <Image source={picture} style={styles.card_picture}></Image>
        <View style={{flexDirection: "column", marginLeft: 9}}>
          <View>
            <Text style={{fontSize:16, color: "#283140"}}>{sateTitle.test[i].title}</Text>
          </View>
          <View style={{ flexDirection: "row",  alignItems: "center", marginTop: 10 }}>
            <Image source={{uri: sateTitle.test[i].avatar_url}} style={styles.card_user_picture}></Image>
            <Text style={{fontSize: 12, color: "#283140", marginLeft: 4}}>{sateTitle.test[i].owner_name}</Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: "flex-end", }}>
          <View style={styles.card_button}>
            <AntDesign name="arrowright" size={20} color="#ffffff"/>
          </View>
        </View>
      </View>
    )
  }
  
  return carSearch
}

const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  modal_button: {
    borderRadius: 100,
    padding: 10,
    elevation: 2,
    backgroundColor: "#283140",
  },

  card_button: {
    height: 30,
    width: 30,
    backgroundColor: "#283140",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20
  },

  card_style: {
    backgroundColor: "#ffffff",
    width: 330,
    height:100,
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  card_picture: {
    width: 82,
    height: 82
  },

  card_user_picture: {
    width: 34,
    height: 34,
    borderRadius: 100
  },

  button_params: {
    height: 40,
    width: 40,
    backgroundColor: '#283140',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: 'center',
  },

  search_bar: {
    height: 40,
    width: 280,
    borderRadius: 10,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#AEAEAE",
    marginBottom: 25
  },

  modal_button_text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginLeft: 30,
    marginRight: 30
  },

});