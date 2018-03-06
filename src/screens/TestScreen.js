import React from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, Button, Icon, Text, View } from 'native-base';

import { StatusBarView } from '../components/StatusBarView';
import PageTitle from '../components/PageTitle';

export default class TestScreen extends React.Component {
  render() {
    return (
      <Container>
        <StatusBarView bg="#f2f5f7"></StatusBarView>
        <Content>
          <PageTitle title="Info Screen" />
          <View style={{flex: 1, padding: 10, paddingTop: 0, alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground
              imageStyle={{ borderRadius: 10 }}
              style={{width: 300, height: 300, margin: 10, flex: 1, justifyContent: 'flex-end'}}
              source={{ uri: 'https://i.imgur.com/KZsmUi2l.jpg'}} >
              <Text style={{color: '#fff', fontSize: 40, padding: 10}}>This is a text over an image</Text>
            </ImageBackground>
          </View>
          <Text style={{padding:20, textAlign: 'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </Content>
      </Container>
    );
  }
}
