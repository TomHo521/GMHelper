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

type PoType = {
  style?: StyleProp<ViewStyle>;
};

const Po = ({ style }: PoType) => {
  return (
    <View style={[styles.po, style]}>
      <LinearGradient
        style={[styles.frameParent, styles.frameParentShadowBox]}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0.59)", "rgba(0, 0, 0, 0)"]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/frame-77.png")}
        />
        <Text style={[styles.po1, styles.po1FlexBox]}>Po</Text>
      </LinearGradient>
      <LinearGradient
        style={[
          styles.nothingCanStopMyFistsOfFWrapper,
          styles.frameParentShadowBox,
        ]}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0.75)", "rgba(49, 46, 44, 0)"]}
      >
        <Text style={[styles.nothingCanStop, styles.po1FlexBox]}>
          “Nothing can stop my fists of fury!”
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
  po1FlexBox: {
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
  po1: {
    top: 3,
    left: 132,
    fontSize: 28,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  frameParent: {
    top: 0,
    left: 0,
    height: 427,
    width: 316,
  },
  nothingCanStop: {
    top: 25,
    left: 30,
    //fontSize: FontSize.size_sm,
    fontSize: 16,
    fontFamily: FontFamily.milongaRegular,
    width: 257,
    height: 24,
  },
  nothingCanStopMyFistsOfFWrapper: {
    top: 441,
    left: 3,
    borderStyle: "solid",
    borderColor: "#a4a4a4",
    borderWidth: 1,
    width: 313,
    height: 83,
  },
  po: {
    height: 524,
    width: 316,
  },
});

export default Po;
