import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = (props) => (
  <Text style={styles.title}>{props.title}</Text>
);

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#f2f5f7',
    paddingLeft: 20,
    paddingTop: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#687793'
  }
});

export default Title;
