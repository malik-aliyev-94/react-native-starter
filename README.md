# React Native Starter
This is a simple starter project for **React Native**, **Native Base**, **MobX**, **React Native Navigation**.

The most useful components, libraries and packages for **react-native** are gathered together.

Demo of this project is available on [Expo](https://expo.io/@malik-aliyev-94/expo-react-native-starter).

![Expo Demo](assets/expo-qr.png)

## Contents
1. NativeBase - Customize getTheme
2. Navigation
3. Routing parameters
4. Modal
5. First Launch screen (AsyncStorage)
6. Swiper
7. Horizontal Scroll
8. Carousel
9. Background Image, Text over an image
10. Gradient background
11. Fetch example
12. Status bar
13. MobX
14. Layout
15. OneSignal Notifications
16. WebView

### NativeBase
[NativeBase](https://nativebase.io) - open source project to build React Native apps (Essential cross-platform UI components for React Native). You can get more brief information about NativeBase from their [website]((https://nativebase.io) or [GitHub](https://github.com/GeekyAnts/NativeBase) page.

In this project we have used customized NativeBase components.

**Steps to be followed to customize NativeBase:**

- Run this command from your terminal after installing native-base.
```bash
  node node_modules/native-base/ejectTheme.js
```
- All the theme files and variables get added to your project root. Change the variables or theme files.
- Wrap the code or component to which you want to apply the theme with StyleProvider.
- Pass the variable i.e., platform/material/commonColors.js as the parameter of theme function, which is passed as a value to style prop of component StyleProvider.
- The theme you pass should be a function.

The **native-base-theme** dir is generated automatically after running the command above. Inside the directory are two folders named components and variables.

The components folder contain the theme styling files for all the components. This is where you would change the style properties of the components if you need to.

Example, if you need to change the height of Button component, you'll need to change this line in **native-base-theme/components/Button.js**.

The variables folder contain three preset theme variables. You can change the variables (for color, fontFamily, iconFamily etc) for a uniform look and feel throughout your app.

Read more about customization here https://docs.nativebase.io/Customize.html#Customize

## Navigation
[React Navigation](https://github.com/react-navigation/react-navigation) This is one of the best React Native libraries for Routing and Navigation purposes.

Read the doc from the official [website](https://reactnavigation.org).

In this project we have used **TabNavigator**. You can see the configuration in **./App.js** file.

Some Tips for React navigation

* If you want to hide tabBar on some screen, set **navigationOptions: { tabBarVisible: false }**

For example:

```javascript
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
    ...
  }
));
```

* You can create a StackNavigator for each screen
* Use withNavigation from react-navigation to access navigation from everywhere :)
See **./src/components/Alphabet.js** for example.
```javascript
import { withNavigation } from 'react-navigation';
```

[withNavigation](https://reactnavigation.org/docs/with-navigation.html#docsNav) is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.

## Routing parameters
How to pass parameters to the screens ?

See the example in the **Alphabet** component. Params are passed to the navigate method as the second parameter.

```javascript
<TouchableOpacity
  onPress={ () => props.navigation.navigate("Detail", {letter: item[0]}) }>
  ...
```

In **./src/screen/DetailScreen** you can see how to access this parameters.

```javascript
const DetailScreen = (props) => (
  <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 30, color: '#687793'}}>This is letter</Text>
    <Text style={{fontSize: 100, fontWeight: 'bold'}}>{ props.navigation.state.params.letter }</Text>
  </View>
);
```
Read more on the [website](https://reactnavigation.org/docs/params.html#docsNav).

## Modal
Click the last item on the tabBar navigation to see the modal example.

The Modal component is a simple way to present content above an enclosing view.

To show or hide modal set the **visible** attribute to **true** or **false**.

```javascript
import { Modal } from 'react-native';

<Modal
  animationType="slide"
  transparent={false}
  visible={AppStore.modalVisible}
  ...
```

## First Launch screen (AsyncStorage)
You can use Modal for the Intro Screen (First Launch Screen) for example.
To show screen once use [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html#docsNav).

AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage.

See [react-native-app-intro](https://github.com/FuYaoDe/react-native-app-intro) on GitHub. This  is a react native component implementing a parallax effect welcome page using base on [react-native-swiper](https://github.com/leecade/react-native-swiper).

## Swiper
On the modal window we have used [react-native-swiper](https://github.com/leecade/react-native-swiper) as a full screen horizontal slider.

See the usage example in the Modal component.

```javascript
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
```
## Horizontal Scroll

Open the **./src/components/Alphabet** component. You can see horizontal scrolling example in this file.

```javascript
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{padding:10}}>
...
</ScrollView>
```
To ***hide Scroll Indicator*** set **showsHorizontalScrollIndicator** to **false**

## Carousel

## Background Image, Text over an image
You can use ImageBackground component for this purpose. See the example in the **./src/screens/TestScreen** file.

```javascript
import { ImageBackground } from 'react-native';

<ImageBackground
  imageStyle={{ borderRadius: 10 }}
  style={{width: 300, height: 300, margin: 10, flex: 1, justifyContent: 'flex-end'}}
  source={{ uri: 'https://i.imgur.com/KZsmUi2l.jpg'}} >
  <Text style={{color: '#fff', fontSize: 40, padding: 10}}>This is a text over an image</Text>
</ImageBackground>
```
## Gradient background
This component is included into [Expo SDK](https://docs.expo.io/versions/latest/sdk/linear-gradient.html).

We have used this component to render background gradient for letters in the Alphabet component.

```javascript
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
```

[GitHub repo](https://github.com/react-native-community/react-native-linear-gradient) is available.

## Fetch example
First Read the [React Native Networking](https://facebook.github.io/react-native/docs/network.html#docsNav) doc from the official website.

Then open the **IntroScreen** and see the example.

```javascript
componentDidMount(){
  return fetch('https://api.github.com/users/malik-aliyev-94')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        data: responseJson,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
}
```
Also ActivityIndicator is used here.

## Status bar
There is a small [package](https://github.com/malik-aliyev-94/react-native-is-iphonex) to determine whether if the device is iPhoneX and then set he StatusBar height.

```javascript
export const StatusBarView = (props) => (
  <View style={{height: (isIphoneX) ? 44 : 20, backgroundColor: props.bg}}></View>
);
```

## MobX
MobX is a simple, scalable state management tool.

Dashboard on the HomeScreen also Modal window configured using MobX.

Store file is located at the **./src/stores** dir.

Read more about MobX [here](https://mobx.js.org/index.html).

[React bindings for MobX](https://github.com/mobxjs/mobx-react)
## Layout
[The Full React Native Layout Cheat Sheet](https://medium.com/@drorbiran/the-full-react-native-layout-cheat-sheet-a4147802405c) - this article on medium is highly recommended to read to understand

## OneSignal Notifications
## WebView

OneSignal Notifications, WebView and other features and components will be included to this project in the future.
