import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import NameFrameContainer from "./NameFrameContainer";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ContentFrame = () => {
  return (
    <View style={styles.contentframe}>
      <NameFrameContainer inputText="Zachary Dragonheart" labelText="Name:" />
      <NameFrameContainer
        inputText="Z.Dragonheart@gmail.com"
        labelText="E-mail:"
        propMarginTop={25}
      />
      <NameFrameContainer
        inputText="*****"
        labelText="Change Password:"
        propMarginTop={25}
      />
      <NameFrameContainer
        inputText="*****"
        labelText="Re-enter password:"
        propMarginTop={25}
      />
      <View style={[styles.submitbutton, styles.resetbuttonLayout]}>
        <Text style={[styles.label, styles.labelTypo]}>Submit Changes</Text>
      </View>
      <View style={[styles.resetbutton, styles.resetbuttonLayout]}>
        <Text style={[styles.label1, styles.labelTypo]}>Reset to Defaults</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resetbuttonLayout: {
    marginTop: 25,
    overflow: "hidden",
    height: 40,
    width: 222,
    borderRadius: 22,
    borderWidth: 0.9,
    borderStyle: "solid",
  },
  labelTypo: {
    height: 36,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
    fontSize: FontSize.size_xl,
    top: "50%",
    width: "88.28%",
    marginTop: -16,
    position: "absolute",
  },
  label: {
    left: "5.93%",
  },
  submitbutton: {
    backgroundColor: Color.orange,
    borderColor: "#ffebb8",
    overflow: "hidden",
    height: 40,
    width: 222,
    borderRadius: 22,
  },
  label1: {
    left: "5.86%",
  },
  resetbutton: {
    backgroundColor: Color.saddlebrown_100,
    borderColor: "#f8e0a5",
  },
  contentframe: {
    borderRadius: 44,
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 495,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_6xl,
    alignItems: "center",
    borderWidth: 0.9,
    borderStyle: "solid",
    borderColor: "#ffebb8",
  },
});

export default ContentFrame;
