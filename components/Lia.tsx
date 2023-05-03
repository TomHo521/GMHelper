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

type LiaType = {
  style?: StyleProp<ViewStyle>;
};

const Lia = ({ style }: LiaType) => {
  return (
    <View style={[styles.lia, style]}>
      <LinearGradient
        style={[styles.frameParent, styles.frameParentShadowBox]}
        locations={[0, 1]}
        colors={["rgba(1, 71, 29, 0.59)", "rgba(0, 0, 0, 0)"]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/frame-76.png")}
        />
        <Text style={[styles.lia1, styles.lia1FlexBox]}>Lia</Text>
      </LinearGradient>
      <LinearGradient
        style={[
          styles.iMayBeAnElfButImNotAWrapper,
          styles.frameParentShadowBox,
        ]}
        locations={[0, 1]}
        colors={["rgba(0, 73, 38, 0.75)", "rgba(49, 46, 44, 0)"]}
      >
        <Text style={[styles.iMayBe, styles.lia1FlexBox]}>
          "I may be an elf, but I'm not above using a human shield in a fight!”
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
  lia1FlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  frameChild: {
    top: 44,
    left: 157,
    width: 232,
    height: 364,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  lia1: {
    top: 3,
    left: 119,
    fontSize: 28,
    fontFamily: FontFamily.twinkleStarRegular,
    width: 64,
  },
  frameParent: {
    top: 0,
    left: 0,
    height: 427,
    width: 316,
  },
  iMayBe: {
    top: 25,
    left: 30,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.milongaRegular,
    width: 257,
    height: 42,
  },
  iMayBeAnElfButImNotAWrapper: {
    top: 441,
    left: 3,
    borderStyle: "solid",
    borderColor: "#a4a4a4",
    borderWidth: 1,
    width: 313,
    height: 83,
  },
  lia: {
    height: 524,
    width: 316,
  },
});

export default Lia;
