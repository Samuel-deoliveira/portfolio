import React, {useState} from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function ButtonCategory() {

  const [state, setState ] = useState({categes : [
    {id: '1', name: "Discord Js", backgroundColor: "#283140", textColor: "#F3F4F5"},
    {id: '2', name: "React", backgroundColor: "#F3F4F5", textColor: "#283140"},
    {id: '3', name: "Native", backgroundColor: "#F3F4F5", textColor: "#283140"},
    {id: '4', name: "TT", backgroundColor: "#F3F4F5", textColor: "#283140"},
  ]});

  var buttonChangeBackground = item => {
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

  return (state.categes.map((item, key) => (
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
      onPress={() => buttonChangeBackground(item)}>
      <Text style={{ color: item.textColor }}>
        {' '}
        {item.name.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )))
    
}
