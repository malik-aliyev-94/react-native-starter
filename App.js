import React from 'react';
import { Text, Button, Icon, Footer, FooterTab, StyleProvider } from 'native-base';
import { TabNavigator, StackNavigator } from "react-navigation";

import HomeScreen from './src/screens/HomeScreen';
import TestScreen from './src/screens/TestScreen';
import IntroScreen from './src/screens/IntroScreen';
import DetailScreen from './src/screens/DetailScreen';


import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import AppStore from './src/stores/AppStore.js';
import {observer} from 'mobx-react';

// const HomeStack = StackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       header: null
//     },
//   },
//   Detail: {
//     screen: DetailScreen,
//   },
// });

const Nav =  (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Test: { screen: TestScreen },
    Intro: {
      screen: IntroScreen,
      navigationOptions: { tabBarVisible: false }
    },
    Detail: { screen: DetailScreen }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Test")}>
              <Icon name="book" />
              <Text>Test</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Intro")} >
              <Icon name="bowtie" />
              <Text>No tab</Text>
            </Button>
            <Button
              vertical
              onPress={() => AppStore.modalVisible = true } >
              <Icon name="square" />
              <Text>Modal</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));


export default class App extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Nav />
      </StyleProvider>
    );
  }
}
