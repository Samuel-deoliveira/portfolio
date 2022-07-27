import React, {useState, useCallback} from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, Button, Linking } from 'react-native';
import {FontAwesome5, EvilIcons, AntDesign, Ionicons } from '@expo/vector-icons'

import picture from '../assets/feuille.png'

export function HomeView() {

  var url = 'https://google.com'

  const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

  const [state, setState ] = useState({categes : [
    {id: '1', name: "Discord Js", backgroundColor: "#283140", textColor: "#F3F4F5"},
    {id: '2', name: "React", backgroundColor: "#F3F4F5", textColor: "#283140"},
    {id: '3', name: "Native", backgroundColor: "#F3F4F5", textColor: "#283140"},
    {id: '4', name: "TT", backgroundColor: "#F3F4F5", textColor: "#283140"},
  ]});

  
  var changeBackground = item => {
    let newState = JSON.parse(JSON.stringify(state.categes));

    for (let x = 0; x < state.categes.length; x++) {

      if (state.categes[x].id == item.id) {
        newState[x].backgroundColor = '#283140';
        newState[x].textColor = '#F3F4F5'
        setState({
          categes: newState,
        });
      } else {
        newState[x].backgroundColor = '#F3F4F5';
        newState[x].textColor = '#283140'
        setState({
          categes: newState,
        });
      }
    }
  }
  
  // button category
  var nomberCategory = 4

  var buttonCategory = []

  for (let i = 0; i < nomberCategory; i++) {
    
    if ((i + 1) === nomberCategory) {
      buttonCategory.push(
        <View key={i} style={[styles.categoryButtonFalse, styles.marginRight]}>
            <Text style={styles.textCategoryButtonFalse}>React</Text>
        </View>
      )
    }
    else if (i === 0) {
      buttonCategory.push(
        <View key={i} style={[styles.categoryButtonTrue, styles.marginLeft]}>
          <Text style={styles.textCategoryButtonTrue}>Discord Js</Text>
        </View>
      )
    }
    else {
      buttonCategory.push(
        <View key={i} style={styles.categoryButtonFalse}>
          <Text style={styles.textCategoryButtonFalse}>React</Text>
        </View>
      )
    }

  }

  // card category
  var nomberCard = 3

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
          <View title="Voir le repos" onPress={handlePress} style={[styles.cardLinkRepo]}>
            <Text style={[styles.textLinkRepo]}>Voir le repos</Text>
            </View>
        </View>
      )
    }

  }


  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <View>
        <Text style={[styles.textTitle, styles.marginLeft, styles.titleState]}>Statistiques</Text>
        <View style={[styles.stateCard, styles.marginLeft, styles.marginRight]}>
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
          {state.categes.map((item, key) => (
            <TouchableOpacity

              key={item.id}
              style={{
                width: 140,
                height: 40,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: item.backgroundColor,
              }}
              onPress={() => changeBackground(item)}>
              <Text style={{ color: item.textColor }}>
                {' '}
                {item.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.scrollCardCategory]}>
          {/* card */}
          {cardCategory}

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  titleState: {
    marginTop: 70
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

  categoryButtonTrue: {
    backgroundColor: "#283140",
    width: 140,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginRight: 10
  },

  textCategoryButtonTrue: {
    fontSize: 20,
    color: "#ffffff"
  },

  categoryButtonFalse: {
    backgroundColor: "#F3F4F5",
    width: 140,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginRight: 10
  },

  textCategoryButtonFalse: {
    fontSize: 20,
    color: "#283140"
  },

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