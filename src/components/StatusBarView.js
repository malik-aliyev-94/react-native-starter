import React from 'react';
import { Platform, Dimensions, PixelRatio, View } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

export const StatusBarView = (props) => (
  <View style={{height: (isIphoneX) ? 44 : 20, backgroundColor: props.bg}}></View>
);
