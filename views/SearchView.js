import React, {useState, useCallback } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, Modal, Pressable, Alert, StyleSheet} from 'react-native';
import {FontAwesome5, EvilIcons, AntDesign, Ionicons   } from '@expo/vector-icons'
import DropDownPicker from 'react-native-dropdown-picker';

import picture from '../assets/feuille.png'
import user from '../assets/user.jpg'

export function SearchView() {

  const [modalVisible, setModalVisible] = useState(false);
  
  const [open01, setOpen01] = useState(false);
  const [value01, setValue01] = useState(null);
  const [items01, setItems01] = useState([
    {label: 'JavaScript', value: 'javascript', icon: () => <Ionicons  name="md-logo-javascript" size={30} color="#E8C034" />},
    {label: 'React', value: 'react', icon: () =>  <Ionicons  name="logo-react" size={30} color="#283140" />}
  ]);

  const [open02, setOpen02] = useState(false);
  const [value02, setValue02] = useState(null);
  const [items02, setItems02] = useState([
    {label: 'Samuel De oliveira', value: 'user', icon: () => <Ionicons  name="md-logo-javascript" size={30} color="#E8C034" />},
    {label: 'Thyrium', value: 'thyrium', icon: () =>  <Ionicons  name="logo-react" size={30} color="#283140" />}
  ]);


  var carSearch = []

  var nomberCardSearch = 1

  for (let i = 0; i < nomberCardSearch ; i++) {

    carSearch.push(
      <View key={i} style={styles.card_style}>
        <Image source={picture} style={styles.card_picture}></Image>
        <View style={{flexDirection: "column", marginLeft: 9}}>
          <View>
            <Text style={{fontSize:16, color: "#283140"}}>Thyrium Info</Text>
          </View>
          <View style={{
            flexDirection: "row", 
            alignItems: "center",
            marginTop: 10
            }}>
            <Image source={user} style={styles.card_user_picture}></Image>
            <Text style={{fontSize: 12, color: "#283140", marginLeft: 4}}>Samuel De oliveira</Text>
          </View>
        </View>
        <View style={styles.card_button}>
          <AntDesign name="arrowright" size={20} color="#ffffff"/>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 16, color: '#283140'}}>Paramètres de recherche</Text>
            <DropDownPicker 
              open={open01}
              value={value01} 
              items={items01} 
              setOpen={setOpen01} 
              setValue={setValue01} 
              setItems={setItems01} 
              searchable={false} 
              placeholder="Sélectionnez une langue"
              style={{marginTop:26}}
            />
            <DropDownPicker 
              open={open02}
              value={value02} 
              items={items02} 
              setOpen={setOpen02} 
              setValue={setValue02} 
              setItems={setItems02} 
              searchable={false}
              placeholder="Sélectionnez un utilisateur"
              style={{marginTop:20, marginBottom: 26}} 
            />
            <Pressable
              style={[styles.modal_button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modal_button_text}>Valider</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={{
        fontSize: 24,
        marginTop: 20
      }}>Chercher</Text>
      <View style={{flexDirection: "row", marginTop: 18}}>
        <View style={styles.search_bar}>
          <AntDesign
            name="search1"
            size={24}
            color="#AEAEAE"
            style={{marginLeft: 8}}
          />
        </View>
        <Pressable style={styles.button_params} onPress={() => setModalVisible(!modalVisible)}>
          <AntDesign
            name="bars"
            size={30}
            color="#ffffff"
          />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{flexDirection: "column"}}>
        {/* card */}
        {carSearch}
      </ScrollView>
    </SafeAreaView>
  )
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
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
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