import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopNavBar from "../components/TopNavBar";
import ContentFrame from "../components/ContentFrame";
import BottomNavBar from "../components/BottomNavBar";


const SettingsPageIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.settingsPageIcon}
      resizeMode="cover"
      source={require("../assets/settingspage.png")}
    >
      <TopNavBar pageTitle="Settings"/>
    
      <ContentFrame />

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
