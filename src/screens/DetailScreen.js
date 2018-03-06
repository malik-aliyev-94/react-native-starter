import React from 'react';
import { Text, View } from 'native-base';

const DetailScreen = (props) => (
  <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 30, color: '#687793'}}>This is letter</Text>
    <Text style={{fontSize: 100, fontWeight: 'bold'}}>{ props.navigation.state.params.letter }</Text>
  </View>
);

export default DetailScreen;
