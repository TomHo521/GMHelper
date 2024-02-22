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

type CassianType = {
  style?: StyleProp<ViewStyle>;
};

const Cassian = ({ style }: CassianType) => {
  return (
    <View style={[styles.midir, style]}>
      <LinearGradient
        style={[styles.frameParent, styles.frameParentShadowBox]}
        locations={[0, 1]}
        colors={["rgba(0, 6, 60, 0.59)", "rgba(0, 0, 0, 0)"]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="contain"
          source={require("../assets/Cassian2.png")}
        />
        <Text style={[styles.midir1, styles.midirFlexBox]}>Cassian</Text>
      </LinearGradient>
      <LinearGradient
        style={[styles.theNamesMidirMladyWrapper, styles.frameParentShadowBox]}
        locations={[0, 1]}
        colors={["#21a2f2", "rgba(65, 83, 240, 0)"]}
      >
        <Text style={[styles.theNamesMidir, styles.midirFlexBox]}>
          "Donburi about it...”
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
  midirFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  frameChild: {
    top: 44,
    left: 42,
    width: 232,
    height: 364,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  midir1: {
    top: 2,
    left: 110,
    fontSize: 28,
    fontFamily: FontFamily.twinkleStarRegular,
    width: 103,
    height: 33,
  },
  frameParent: {
    top: 0,
    left: 0,
    height: 427,
    width: 316,
  },
  theNamesMidir: {
    top: 25,
    left: 30,
    //fontSize: FontSize.size_md,
    fontSize: 16,
    fontFamily: FontFamily.milongaRegular,
    width: 257,
    height: 42,
  },
  theNamesMidirMladyWrapper: {
    top: 441,
    left: 3,
    borderStyle: "solid",
    borderColor: "#a4a4a4",
    borderWidth: 1,
    width: 313,
    height: 83,
  },
  midir: {
    height: 524,
    width: 316,
  },
});

export default Cassian;
