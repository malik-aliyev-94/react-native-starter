import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import AppStore from '../stores/AppStore.js';
import {observer} from 'mobx-react';

@observer
export default class Dashboard extends React.Component {

  render() {
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
          <View style={styles.customCard}>
            <Text style={styles.customHeader}>Users</Text>
            <Text style={{textAlign: 'right', color: '#00b8ff', fontSize: 40, verticalAlign: 'bottom'}}>{AppStore.data.users}</Text>
          </View>
          <View style={styles.customCard}>
            <Text style={styles.customHeader}>Posts</Text>
            <Text style={{textAlign: 'right', color: '#00b8ff', fontSize: 40, verticalAlign: 'bottom'}}>{AppStore.data.posts}</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', padding: 10, paddingTop: 0}}>
          <View style={[styles.customCard, {height: null}]}>
            <Text style={styles.customHeader}>Comments</Text>
            <Text style={{textAlign: 'right', color: '#00b8ff', fontSize: 40, verticalAlign: 'bottom'}}>{AppStore.data.comments}</Text>
          </View>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  customCard: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowOffset:{  width: 0,  height: 10 },
    shadowColor: '#AAA',
    shadowOpacity: .3,
    shadowRadius: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  customHeader: {
    color: '#283e67',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20
  },
});
