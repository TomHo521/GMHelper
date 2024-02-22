import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContentContainer from "../components/ContentContainer";
import BottomNavBar from "../components/BottomNavBar";

import TopNavBar from "../components/TopNavBar";

const HomeScreenIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.homescreenIcon}
      resizeMode="cover"
      source={require("../assets/homescreen.png")}
    >
      <TopNavBar pageTitle="Home"/>
   
      <ContentContainer />
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
  homescreenIcon: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: 35,
    //paddingTop: Padding.p_11xl,
    //paddingBottom: Padding.p_12xs,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default HomeScreenIcon;
