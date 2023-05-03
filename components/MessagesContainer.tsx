import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border, Padding } from "../GlobalStyles";

type MessagesContainerType = {
  style?: StyleProp<ViewStyle>;
};

const MessagesContainer = ({ style }: MessagesContainerType) => {
  return (
    <LinearGradient
      style={[styles.bottomnavbar, style]}
      locations={[0, 1]}
      colors={["rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 0)"]}
    />
  );
};

const styles = StyleSheet.create({
  homeTypo: {
    height: 17,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  dicebuttonBorder: {
    marginLeft: 4,
    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 15,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    flex: 1,
    alignSelf: "stretch",
  },
  bottomnavbar: {
    flexDirection: "row",
    padding: Padding.p_10xs,
    alignItems: "flex-end",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default MessagesContainer;
