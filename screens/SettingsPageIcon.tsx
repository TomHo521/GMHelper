import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeContainer from "../components/HomeContainer";
import TopNavBar from "../components/TopNavBar";
import ContentFrame from "../components/ContentFrame";
import BottomNavBarContainer from "../components/BottomNavBarContainer";
import { Padding } from "../GlobalStyles";

const SettingsPageIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.settingsPageIcon}
      resizeMode="cover"
      source={require("../assets/settingspage.png")}
    >
      <TopNavBar pageTitle="Settings"/>
      {/* <HomeContainer
        backFrame={require("../assets/backframe.png")}
        pageTitle="Settings"
        settingsFrame={require("../assets/settingsframe2.png")}
      /> */}
      <ContentFrame />
      <BottomNavBarContainer
        prop1={require("../assets/-icon-home.png")}
        prop2={require("../assets/iconframe6.png")}
        prop3={require("../assets/iconsaccount-circle-filled-24px5.png")}
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
  settingsPageIcon: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: 35,
    // width: "100%",
    // height: 800,
    // overflow: "hidden",
    //paddingTop: Padding.p_11xl,
    // paddingBottom: Padding.p_12xs,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default SettingsPageIcon;
