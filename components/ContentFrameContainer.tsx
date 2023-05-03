import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import AbilityButton from './AbilityButton';
import MainStat from './MainStat';

const ContentFrameContainer = () => {
  return (

    <View style={[styles.contentframe, styles.athleticsFlexBox1]}>
      <View style={styles.frameBorder}>
        <MainStat label="Strength" />
        <AbilityButton label="athletics" />
      </View>
      <View style={[styles.dexFrame, styles.frameBorder]}>
        <MainStat label="Dexterity" />
        <AbilityButton label="acrobatics" />
        <AbilityButton label="sleight of hand" />
        <AbilityButton label="stealth" />
      </View>
      <View style={[styles.dexFrame, styles.frameBorder]}>
        <MainStat label="Charisma" />
        <AbilityButton label="deception" />
        <AbilityButton label="intimidation" />
        <AbilityButton label="performance" />
        <AbilityButton label="persuasion" />
      </View>
      <View style={[styles.dexFrame, styles.frameBorder]}>
        <MainStat label="Intelligence" />
        <AbilityButton label="arcana" />
        <AbilityButton label="history" />
        <AbilityButton label="investigation" />
        <AbilityButton label="nature" />
        <AbilityButton label="religion" />
      </View>
      <View style={[styles.dexFrame, styles.frameBorder]}>
        <MainStat label="Wisdom" />
        <AbilityButton label="perception" />
        <AbilityButton label="medicine" />
        <AbilityButton label="insight" />
        <AbilityButton label="animal handling" />
        <AbilityButton label="survival" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  athleticsFlexBox1: {
    alignItems: "center",
    borderStyle: "solid",
  },
  athleticsFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameBorder: {
    paddingBottom: Padding.p_8xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_mini,
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
  },
  strength: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.twinkleStarRegular,
    fontSize: FontSize.size_xl,
  },
  strHeading: {
    height: 26,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  abilityLabel: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    display: "flex",
    color: Color.saddlebrown,
    flex: 1,
    textAlign: "center",
    fontFamily: FontFamily.twinkleStarRegular,
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  athletics: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.moccasin,
    borderColor: "#763900",
    borderWidth: 2,
    width: 184,
    height: 30,
    marginTop: 3,
    alignItems: "center",
    borderStyle: "solid",
    flexDirection: "row",
  },
  dexFrame: {
    marginTop: 20,
  },
  contentframe: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_300,
    width: 291,
    paddingHorizontal: Padding.p_15xl,
    paddingVertical: Padding.p_21xl,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    borderStyle: "solid",
  },
});

export default ContentFrameContainer;
