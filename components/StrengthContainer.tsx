import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const StrengthContainer = () => {
  return (
    <View style={styles.contentframe}>
      <View style={styles.innercontent}>
        <View style={styles.strengthBorder}>
          <Text style={[styles.strength1, styles.labelTypo]}>Strength</Text>
        </View>
        <View style={[styles.dexterity, styles.strengthBorder]}>
          <Text style={[styles.strength1, styles.labelTypo]}>Dexterity</Text>
        </View>
        <View style={[styles.dexterity, styles.strengthBorder]}>
          <Text style={[styles.strength1, styles.labelTypo]}>Constitution</Text>
        </View>
        <View style={[styles.dexterity, styles.strengthBorder]}>
          <Text style={[styles.strength1, styles.labelTypo]}>Intelligence</Text>
        </View>
        <View style={[styles.dexterity, styles.strengthBorder]}>
          <Text style={[styles.strength1, styles.labelTypo]}>Wisdom</Text>
        </View>
        <View style={[styles.dexterity, styles.strengthBorder]}>
          <Text style={[styles.strength1, styles.labelTypo]}>Charisma</Text>
        </View>
      </View>
      <View style={[styles.output, styles.outputLayout]} />
      <View style={[styles.button, styles.outputLayout]}>
        <Text style={[styles.label, styles.labelTypo]}>Saving Throw</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  strengthBorder: {
    overflow: "hidden",
    backgroundColor: Color.black,
    borderRadius: 22,
    flex: 1,
    alignSelf: "stretch",
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
  },
  outputLayout: {
    height: 41,
    borderWidth: 1,
    overflow: "hidden",
    alignSelf: "stretch",
    borderStyle: "solid",
    alignItems: "center",
  },
  strength1: {
    position: "absolute",
    height: "90%",
    width: "57.4%",
    top: "5%",
    left: "21.54%",
    fontSize: 28,
  },
  dexterity: {
    marginTop: 8,
  },
  innercontent: {
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
    width: 295,
    height: 396,
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_11xl,
    justifyContent: "center",
    borderWidth: 0.9,
    borderStyle: "solid",
    borderColor: "#ffebb8",
    alignItems: "center",
  },
  output: {
    backgroundColor: Color.gray_400,
    borderColor: "#ffebb8",
    height: 41,
    borderWidth: 1,
    justifyContent: "space-between",
  },
  label: {
    fontSize: FontSize.size_11xl,
  },
  button: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.orange,
    borderColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
  },
  contentframe: {
    height: 496,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default StrengthContainer;
