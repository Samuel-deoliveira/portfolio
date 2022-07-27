import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {FontAwesome5, AntDesign } from '@expo/vector-icons'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './components/SplashScreen'
import logo from './assets/logo.png'

import {HomeView} from './views/HomeView'
import {AccountView} from './views/AccountView'
import {SearchView} from './views/SearchView'
import {NotifView} from './views/NotifView'

const Tab = createBottomTabNavigator()

export default function App() {

  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (

    // <SafeAreaProvider>
    //   <SplashScreen></SplashScreen>
    // </SafeAreaProvider>

    <NavigationContainer>
      <Tab.Navigator screenOptions={ {
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          marginHorizontal: 0,
          height: 80,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 10,
        }
      }}>
        <Tab.Screen name={"Home"} component={HomeView} options={{
          tabBarIcon: ({focused}) => (
            <View style={{position: 'absolute', top: 30}}>
              <FontAwesome5
              name="home"
              size={20}
              color={focused ? '#283140' : '#AEAEAE'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({navigation, route}) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start()
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Search"} component={SearchView} options={{
          tabBarIcon: ({focused}) => (
            <View style={{position: 'absolute', top: 30}}>
              <FontAwesome5
              name="search"
              size={20}
              color={focused ? '#283140' : '#AEAEAE'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({navigation, route}) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 1.1,
              useNativeDriver: true
            }).start()
          }
        })}></Tab.Screen>

        <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
          tabBarIcon: ({focused}) => (
            
            <TouchableOpacity>
              <View style={{
                  width: 75, 
                  height: 75, 
                  backgroundColor: '#283140', 
                  borderRadius: 50, 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginBottom: 80
                }}>
                <Image source={logo} style={{
                  width: 40,
                  height: 40,
                  tintColor: 'white'
                }}></Image>
              </View>
            </TouchableOpacity>

          )
        }}></Tab.Screen>

        <Tab.Screen name={"Notification"} component={NotifView} options={{
          tabBarIcon: ({focused}) => (
            <View style={{position: 'absolute', top: 30}}>
              <FontAwesome5
              name="bell"
              size={20}
              color={focused ? '#283140' : '#AEAEAE'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({navigation, route}) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3.35,
              useNativeDriver: true
            }).start()
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Account"} component={AccountView} options={{
          tabBarIcon: ({focused}) => (
            <View style={{position: 'absolute', top: 30}}>
              <FontAwesome5
              name="user-alt"
              size={20}
              color={focused ? '#283140' : '#AEAEAE'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({navigation, route}) => ({
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4.48,
              useNativeDriver: true
            }).start()
          }
        })}></Tab.Screen>

      </Tab.Navigator>

      <Animated.View style={{
          width: getWidth() - 40, 
          height: 2, 
          backgroundColor: '#283140', 
          position: 'absolute', 
          bottom: 22, 
          left: 35,
          borderRadius: 50,
          transform: [{translateX: tabOffsetValue}]
        }}>

      </Animated.View>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  width = width - 60

  return width / 5
}


function EmptyScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    </View>
  )
}
