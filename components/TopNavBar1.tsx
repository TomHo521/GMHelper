import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const TopNavBar1 = () => {
  return (
    <View style={styles.topnavbar}>
      <Image
        style={styles.backframeIcon}
        resizeMode="cover"
        source={require("../assets/backframe1.png")}
      />
      <View style={styles.titleframe}>
        <Text style={styles.title}>Roll Attack</Text>
      </View>
      <Image
        style={styles.backframeIcon}
        resizeMode="cover"
        source={require("../assets/settingsframe1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backframeIcon: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  title: {
    alignSelf: "stretch",
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.twinkleStarRegular,
    color: Color.white,
    textAlign: "center",
  },
  titleframe: {
    width: 210,
    paddingHorizontal: Padding.p_6xs,
    justifyContent: "flex-end",
    overflow: "hidden",
    paddingVertical: 0,
  },
  topnavbar: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    paddingVertical: 0,
  },
});

export default TopNavBar1;
