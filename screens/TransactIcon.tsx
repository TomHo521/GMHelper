import * as React from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomNavBarContainer from "../components/BottomNavBarContainer";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import TopNavBar from "../components/TopNavBar";

const TransactIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[styles.transactIcon, styles.topnavbarFlexBox]}
      resizeMode="cover"
      source={require("../assets/transact.png")}
    >
      <TopNavBar pageTitle="Transact"/>
      <BottomNavBarContainer
        prop1={require("../assets/-icon-home.png")}
        prop2={require("../assets/iconframe.png")}
        prop3={require("../assets/iconsaccount-circle-filled-24px1.png")}
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
  topnavbarFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
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
    paddingVertical: 0,
    overflow: "hidden",
  },
  topnavbar: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 306,
    height: 43,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
  },
  transactIcon: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: 35,
    // width: "100%",
    // height: 800,
    //paddingTop: Padding.p_11xl,
    // paddingBottom: Padding.p_12xs,
    overflow: "hidden",
  },
});

export default TransactIcon;
