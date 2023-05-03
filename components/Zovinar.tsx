import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

type ZovinarType = {
  style?: StyleProp<ViewStyle>;
};

const Zovinar = ({ style }: ZovinarType) => {
  return (
    <View style={[styles.zovinar, style]}>
      <LinearGradient
        style={[styles.frameParent, styles.frameParentShadowBox]}
        locations={[0, 1]}
        colors={["rgba(206, 0, 0, 0.59)", "rgba(0, 0, 0, 0)"]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/frame-74.png")}
        />
        <Text style={[styles.zovinar1, styles.zovinar1FlexBox]}>Zovinar</Text>
      </LinearGradient>
      <LinearGradient
        style={[
          styles.youllFryForThisDonKatsuWrapper,
          styles.frameParentShadowBox,
        ]}
        locations={[0, 1]}
        colors={["rgba(205, 1, 14, 0.75)", "rgba(49, 46, 44, 0)"]}
      >
        <Text style={[styles.youllFryFor, styles.zovinar1FlexBox]}>
          "You’ll fry for this Don Katsu!”
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentShadowBox: {
    backgroundColor: "transparent",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  zovinar1FlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  frameChild: {
    top: 44,
    left: 42,
    width: 232,
    height: 350,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  zovinar1: {
    left: 101,
    fontSize: 28,
    fontFamily: FontFamily.twinkleStarRegular,
    width: 114,
    height: 33,
    top: 0,
  },
  frameParent: {
    left: 0,
    height: 427,
    top: 0,
    width: 316,
  },
  youllFryFor: {
    top: 25,
    left: 30,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.milongaRegular,
    width: 257,
    height: 42,
  },
  youllFryForThisDonKatsuWrapper: {
    top: 441,
    left: 3,
    borderStyle: "solid",
    borderColor: "#a4a4a4",
    borderWidth: 1,
    width: 313,
    height: 83,
  },
  zovinar: {
    height: 524,
    width: 316,
  },
});

export default Zovinar;
