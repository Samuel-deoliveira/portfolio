import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome5, EvilIcons, AntDesign, Ionicons, MaterialIcons, Feather } from '@expo/vector-icons'
import userPicture from '../assets/user.jpg'

export function AccountView() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{flexDirection: 'row', marginTop: 70, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={userPicture} style={{width: 100, height: 100, borderRadius: 100}} />
        <View style={{height: 80, width: 1, backgroundColor: '#283140', marginLeft: 60, marginRight: 60 ,alignItems: 'center', justifyContent: 'center'}}></View>
        <View>
          <Text style={{fontSize: 20, color: "#283140"}}>Développeur</Text>
          <Text style={{marginTop: 4, color: '#808080'}}>Node JS | React</Text>
        </View>
      </View>
      <View style={{marginLeft: 30}}>
        <Text style={{marginTop: 10, fontSize: 36, color: "#283140"}}>Samuel</Text>
        <Text style={{fontSize: 16, color: "#808080"}}>De oliveira</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height: 1, width: 320, backgroundColor: '#283140', marginTop: 40, alignItems: 'center'}}></View>
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 50}}>

        <View style={{flexDirection: 'row', height: 50, width: 320,  alignItems: 'center'}}>
          <View style={{backgroundColor: 'rgba(12, 94, 249, 0.33)', height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
            <Feather name="info" size={30} color="black" />
          </View>
          <Text style={{marginLeft: 14, fontSize: 16, color:"#283140"}}>Information</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={{flex: 1, textAlign: 'right'}} />
        </View>
        <View style={{flexDirection: 'row', height: 50, width: 320,  alignItems: 'center', marginTop: 30}}>
          <View style={{backgroundColor: 'rgba(12, 94, 249, 0.33)', height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
            <Feather name="info" size={30} color="black" />
          </View>
          <Text style={{marginLeft: 14, fontSize: 16, color:"#283140"}}>Information</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={{flex: 1, textAlign: 'right'}} />
        </View>
        <View style={{flexDirection: 'row', height: 50, width: 320,  alignItems: 'center', marginTop: 30}}>
          <View style={{backgroundColor: 'rgba(12, 94, 249, 0.33)', height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
            <Feather name="info" size={30} color="black" />
          </View>
          <Text style={{marginLeft: 14, fontSize: 16, color:"#283140"}}>Information</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={{flex: 1, textAlign: 'right'}} />
        </View>
        <View style={{flexDirection: 'row', height: 50, width: 320,  alignItems: 'center', marginTop: 30}}>
          <View style={{backgroundColor: 'rgba(12, 94, 249, 0.33)', height: 45, width: 45, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
            <Feather name="info" size={30} color="black" />
          </View>
          <Text style={{marginLeft: 14, fontSize: 16, color:"#283140"}}>Information</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={{flex: 1, textAlign: 'right'}} />
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({



})