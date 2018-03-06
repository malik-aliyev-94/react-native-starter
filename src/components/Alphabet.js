import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { withNavigation } from 'react-navigation';

//https://uigradients.com/#DIMIGO
const letters = [
  ['A', '#2b5876', '#4e4376'],
  ['B', '#e65c00', '#F9D423'],
  ['C', '#2193b0', '#6dd5ed'],
  ['D', '#cc2b5e', '#753a88'],
  ['E', '#ec008c', '#fc6767'],
  ['F', '#1488CC', '#2B32B2'],
  ['G', '#00467F', '#A5CC82'],
  ['H', '#636363', '#a2ab58'],
  ['I', '#ad5389', '#3c1053'],
  ['J', '#a8c0ff', '#3f2b96'],
  ['K', '#2b5876', '#4e4376'],
  ['L', '#e65c00', '#F9D423'],
  ['M', '#2193b0', '#6dd5ed'],
  ['N', '#cc2b5e', '#753a88'],
  ['O', '#ec008c', '#fc6767'],
  ['P', '#1488CC', '#2B32B2'],
  ['Q', '#00467F', '#A5CC82'],
  ['R', '#636363', '#a2ab58'],
  ['S', '#ad5389', '#3c1053'],
  ['T', '#a8c0ff', '#3f2b96'],
  ['U', '#2b5876', '#4e4376'],
  ['V', '#e65c00', '#F9D423'],
  ['W', '#2193b0', '#6dd5ed'],
  ['X', '#cc2b5e', '#753a88'],
  ['Y', '#ad5389', '#3c1053'],
  ['Z', '#a8c0ff', '#3f2b96'],
]

const Alphabet = (props) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{padding:10}}>
  {letters.map((item, index) => (
    <TouchableOpacity
      onPress={ () => props.navigation.navigate("Detail", {letter: item[0]}) }>
      <LinearGradient
        colors={[item[1], item[2]]}
        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin:10,
          shadowOffset:{  width: 0,  height: 10 },
          shadowColor: '#AAA',
          shadowOpacity: .3,
          shadowRadius: 5,
          borderRadius: 25,
          flex: 1,
        }}
      >
        <View style={{width: 50, height: 50, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>{item[0]}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  ))}
  </ScrollView>
);


export default withNavigation(Alphabet);
