import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeContainer from "../components/HomeContainer";
import BottomNavBarContainer from "../components/BottomNavBarContainer";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";
import TopNavBar from "../components/TopNavBar";

const DiceRollScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.diceRollScreen}
      resizeMode="cover"
      source={require("../assets/dicerollscreen.png")}
    >
      {/* <HomeContainer
        backFrame={require("../assets/backframe3.png")}
        pageTitle="Dice Roll"
        settingsFrame={require("../assets/settingsframe.png")}
      /> */}
      <TopNavBar pageTitle="Dice Roll"/>
      <View style={styles.contentframe}>
        <View style={styles.qtyLayout}>
          <View style={[styles.d20, styles.d8Position]} />
          <View style={[styles.d12, styles.d8Position]} />
          <View style={[styles.d10, styles.d8Position]} />
          <View style={[styles.d8, styles.d8Position]} />
          <View style={[styles.d6, styles.d8Position]} />
          <View style={[styles.d4, styles.d8Position]} />
        </View>
        <View style={[styles.dicetype, styles.qtyLayout]}>
          <View style={[styles.d201, styles.d81Layout]}>
            <Text style={[styles.d202, styles.d202Typo]}>d20</Text>
          </View>
          <View style={[styles.d121, styles.d81Layout]}>
            <Text style={[styles.d122, styles.d202Typo]}>d12</Text>
          </View>
          <View style={[styles.d101, styles.d81Layout]}>
            <Text style={[styles.d122, styles.d202Typo]}>d10</Text>
          </View>
          <View style={[styles.d81, styles.d81Layout]}>
            <Text style={[styles.d122, styles.d202Typo]}>d8</Text>
          </View>
          <View style={[styles.d61, styles.d81Layout]}>
            <Text style={[styles.d122, styles.d202Typo]}>d6</Text>
          </View>
          <View style={[styles.d41, styles.d81Layout]}>
            <Text style={[styles.d122, styles.d202Typo]}>d4</Text>
          </View>
        </View>
      </View>
      <View style={[styles.output, styles.outputFlexBox]} />
      <View style={[styles.button, styles.outputFlexBox]}>
        <Text style={styles.rollDice}>Roll Dice</Text>
      </View>
      <BottomNavBarContainer
        prop1={require("../assets/-icon-home1.png")}
        prop2={require("../assets/iconframe.png")}
        prop3={require("../assets/iconsaccount-circle-filled-24px4.png")}
        prop4={require("../assets/iconsmail-outline.png")}
        onHomeButtonPress={() => navigation.navigate("HomeScreen")}
        onDiceButtonPress={() => navigation.navigate("DiceRollScreen")}
        onProfiieButtonPress={() => navigation.navigate("CharacterProfile")}
        onMessagesButtonPress={() => navigation.navigate("Messages")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  d8Position: {
    height: 40,
    backgroundColor: Color.black,
    left: "13.75%",
    right: "23.75%",
    top: "50%",
    width: "62.5%",
    position: "absolute",
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
    overflow: "hidden",
  },
  qtyLayout: {
    height: 385,
    width: 111,
  },
  d81Layout: {
    borderRadius: 22,
    left: "0%",
    right: "0%",
    height: 40,
    backgroundColor: Color.black,
    top: "50%",
    position: "absolute",
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
    overflow: "hidden",
    width: "100%",
  },
  d202Typo: {
    height: 36,
    fontSize: 28,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
    top: "50%",
    position: "absolute",
  },
  outputFlexBox: {
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
  },
  d20: {
    marginTop: 100.5,
  },
  d12: {
    marginTop: 52.5,
  },
  d10: {
    marginTop: 4.5,
  },
  d8: {
    marginTop: -43.5,
  },
  d6: {
    marginTop: -91.5,
  },
  d4: {
    marginTop: -139.5,
  },
  d202: {
    marginTop: -18.18,
    width: "65%",
    left: "17.5%",
  },
  d201: {
    marginTop: 100.5,
  },
  d122: {
    marginTop: -18,
    width: "57.4%",
    left: "21.54%",
  },
  d121: {
    marginTop: 52.5,
  },
  d101: {
    marginTop: 4.5,
  },
  d81: {
    marginTop: -43.5,
  },
  d61: {
    marginTop: -91.5,
  },
  d41: {
    marginTop: -139.5,
  },
  dicetype: {
    marginLeft: 8,
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
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_11xl,
    flexDirection: "row",
    borderWidth: 0.9,
    borderStyle: "solid",
    borderColor: "#ffebb8",
  },
  output: {
    backgroundColor: Color.gray_400,
    width: 268,
    height: 50,
    borderColor: "#ffebb8",
    justifyContent: "center",
    borderWidth: 1,
  },
  rollDice: {
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  button: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.orange,
    borderColor: "#fff",
    paddingHorizontal: 75,
    paddingVertical: 0,
    flexDirection: "row",
  },
  diceRollScreen: {
    flex: 1,
    // height: 800,
    //paddingTop: Padding.p_11xl,
    // paddingBottom: Padding.p_12xs,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    marginTop: 35,
  },
});

export default DiceRollScreen;
