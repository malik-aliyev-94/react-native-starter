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

## Swiper
## Horizontal Scroll
## Carousel
## Background Image, Text over an image
## Gradient background
## Fetch example
## Status bar
## MobX
## Layout
## OneSignal Notifications
## WebView
