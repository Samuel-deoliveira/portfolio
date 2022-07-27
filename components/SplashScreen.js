import React, { useEffect, useRef } from 'react';
import { View, Animated, Image, Text, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
// const tabOffsetValue = useRef(new Animated.Value(0)).current

const BGColor = "#283140"
import logo from '../assets/logo.png'

export default function SplashScreen(){

  const edges = useSafeAreaInsets()

  const startAnimation = useRef(new Animated.Value(0)).current

  useEffect(() => {

    setTimeout(() => {
      Animated.sequence([
        Animated.timing(startAnimation, {
          toValue: +Dimensions.get("window").height -(edges.bottom + 200), 
          useNativeDriver: true
        })
      ]).start()

    }, 500)

  }, [])

  return (
    <Animated.View style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: BGColor,
      transform: [
        {translateY: startAnimation}
      ]
    }}>

      <Animated.View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',

        }}>
        <Animated.Image source={logo} style={{
          width: 100,
          height: 100,
          tintColor: 'white',
          marginBottom: 20
        }}></Animated.Image>

        <Animated.Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'white'
        }}>Portfolio</Animated.Text>

      </Animated.View>

    </Animated.View>
  );
}
