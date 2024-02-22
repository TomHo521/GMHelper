import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopNavBar from "../components/TopNavBar";
import BottomNavBar from "../components/BottomNavBar";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const RollAttackIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[styles.rollAttackIcon, styles.contentframeFlexBox]}
      resizeMode="cover"
      source={require("../assets/rollattack.png")}
    >
      <TopNavBar pageTitle="Roll Attack" />
      <View style={[styles.contentframe, styles.contentframeFlexBox]}>
        <View style={styles.innercontent}>
          <View style={styles.meleeattackBorder}>
            <Text style={[styles.melee, styles.meleeTypo]}>Melee</Text>
          </View>
          <View style={[styles.spellattack, styles.meleeattackBorder]}>
            <Text style={[styles.spellAttack, styles.meleeTypo]}>
              Spell Attack
            </Text>
          </View>
        </View>
        <View style={[styles.output, styles.outputBorder]} />
        <View style={[styles.button, styles.outputBorder]}>
          <Text style={styles.label}>Roll Attack</Text>
        </View>
      </View>
      <BottomNavBar
        prop1={require("../assets/-icon-home.png")}
        prop2={require("../assets/iconframe.png")}
        prop3={require("../assets/iconsaccount-circle-filled-24px.png")}
        prop4={require("../assets/iconsmail-outline.png")}
        onHomeButtonPress={() => navigation.navigate("HomeScreen")}
        onDiceButtonPress={() => navigation.navigate("DiceRollScreen")}
        onProfileButtonPress={() => navigation.navigate("CharacterProfile")}
        onMessagesButtonPress={() => navigation.navigate("Messages")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  contentframeFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  meleeTypo: {
    display: "flex",
    fontSize: 28,
    left: "0.21%",
    position: "absolute",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  meleeattackBorder: {
    backgroundColor: Color.black,
    borderRadius: 22,
    alignSelf: "stretch",
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
    overflow: "hidden",
    flex: 1,
  },
  outputBorder: {
    borderWidth: 1,
    alignSelf: "stretch",
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
  },
  melee: {
    height: "100%",
    top: "-0.64%",
  },
  spellAttack: {
    height: "94.87%",
    top: "4.49%",
  },
  spellattack: {
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
    height: 60,
    borderColor: "#ffebb8",
    borderWidth: 1,
    justifyContent: "space-between",
  },
  label: {
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  button: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.orange,
    borderColor: "#fff",
    height: 41,
    flexDirection: "row",
    justifyContent: "center",
  },
  contentframe: {
    height: 543,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  rollAttackIcon: {
    // height: 800,
    paddingTop: Padding.p_11xl,
    // paddingBottom: Padding.p_12xs,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    marginTop: 35,
  },
});

export default RollAttackIcon;
