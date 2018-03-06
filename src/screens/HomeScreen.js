import React from 'react';
import { Container, Content } from 'native-base';

import { StatusBarView } from '../components/StatusBarView';
import PageTitle from '../components/PageTitle';
import ModalWindow from '../components/Modal';
import Carousel from '../components/Carousel';
import Alphabet from '../components/Alphabet'
import Dashboard from '../components/Dashboard'

export default class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };
  render() {
    return (
      <Container>
        <StatusBarView bg="#f2f5f7"></StatusBarView>
        <Content>
          <PageTitle title="Home" />
          <ModalWindow />
          <Alphabet />
          <Dashboard />
          <Carousel />
        </Content>
      </Container>
    );
  }
}
