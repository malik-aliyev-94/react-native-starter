import React from 'react';
import { View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import Swiper from 'react-native-swiper';
import AppStore from '../stores/AppStore.js';
import {observer} from 'mobx-react';

@observer
export default class ModalWindow extends React.Component {

  setModalVisible(visible) {
    AppStore.modalVisible = visible;
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={AppStore.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <TouchableOpacity
            style={{alignSelf: 'center', marginTop: 5, position: 'absolute', top: 0, right: 0, zIndex: 9, padding: 20}}
            onPress={() => {
              this.setModalVisible(!AppStore.modalVisible);
            }}>
            <Icon name="close" style={{color: '#fff', fontSize: 70}} />
          </TouchableOpacity>
          <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    fontSize: 30
  }
});
