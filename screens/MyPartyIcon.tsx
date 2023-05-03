import * as React from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import HomeContainer from "../components/HomeContainer";
import TopNavBar from "../components/TopNavBar";
import BottomNavBarContainer from "../components/BottomNavBarContainer";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MyPartyIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[styles.myPartyIcon, styles.partyslideFlexBox]}
      resizeMode="cover"
      source={require("../assets/myparty.png")}
    >
      <TopNavBar pageTitle="My Party"/>
      {/* <HomeContainer
        backFrame={require("../assets/backframe.png")}
        pageTitle="My Party"
        settingsFrame={require("../assets/settingsframe.png")}
      /> */}
      <View style={[styles.partyslide, styles.partyslideFlexBox]} />
      <BottomNavBarContainer
        prop1={require("../assets/-icon-home.png")}
        prop2={require("../assets/iconframe.png")}
        prop3={require("../assets/iconsaccount-circle-filled-24px.png")}
        prop4={require("../assets/iconsmail-outline.png")}
        propAlignSelf="stretch"
        propFlex={1}
        propFlex1={1}
        propFlex2={1}
        propFlex3={1}
        onHomeButtonPress={() => navigation.navigate("HomeScreen")}
        onDiceButtonPress={() => navigation.navigate("DiceRollScreen")}
        onProfiieButtonPress={() => navigation.navigate("CharacterProfile")}
        onMessagesButtonPress={() => navigation.navigate("Messages")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  partyslideFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  po1Typo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
    fontSize: 28,
    top: 3,
    position: "absolute",
  },
  iMayBeTypo: {
    width: 257,
    fontFamily: FontFamily.milongaRegular,
    fontSize: FontSize.size_sm,
    left: 30,
    top: 25,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  frameLayout: {
    height: 364,
    width: 232,
    top: 44,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  midir1Typo: {
    height: 33,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
    fontSize: 28,
    position: "absolute",
  },
  partyslide: {
    width: 1407,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_6xs,
  },
  myPartyIcon: {
    flex: 1,
    width: "100%",
    height: "100%",
    // width: "100%",
    // height: 800,
    //paddingTop: Padding.p_11xl,
    // paddingBottom: Padding.p_12xs,
    marginTop: 35,
  },
});

export default MyPartyIcon;
