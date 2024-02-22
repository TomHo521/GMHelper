import React, { useContext } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopNavBar from "../components/TopNavBar";
import SavingThrowContainer from "../components/SavingThrowContainer";
import BottomNavBar from "../components/BottomNavBar";
import { PlayerContext } from "../contexts/PlayerContext";

const SavingThrowIcon = () => {
  const navigation = useNavigation();
  const { thisPlayer, setThisPlayer } = useContext(PlayerContext);

  return (
    <ImageBackground
      style={styles.savingThrowIcon}
      resizeMode="cover"
      source={require("../assets/savingthrow.png")}
    >
      <TopNavBar pageTitle="Saving Throw"/>
      <SavingThrowContainer />
      <BottomNavBar
        prop1={require("../assets/-icon-home.png")}
        prop2={require("../assets/iconframe1.png")}
        prop3={require("../assets/iconsaccount-circle-filled-24px.png")}
        prop4={require("../assets/iconsmail-outline1.png")}
        propWidth1={86}
        propWidth2={86}
        propWidth3={86}
        propWidth4={86}
        onHomeButtonPress={() => navigation.navigate("HomeScreen")}
        onDiceButtonPress={() => navigation.navigate("DiceRollScreen")}
        onProfileButtonPress={() => navigation.navigate("CharacterProfile")}
        onMessagesButtonPress={() => navigation.navigate("Messages")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  savingThrowIcon: {
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

export default SavingThrowIcon;
