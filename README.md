# React Native Starter
This is a simple starter project for **React Native**, **Native Base**, **MobX**, **React Native Navigation**.

The most useful components, libraries and packages for **react-native** are gathered together.

Demo of this project is available on **Expo**.

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
