import * as React from "react";
import { useContext } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeContainer from "../components/HomeContainer";
import BottomNavBarContainer from "../components/BottomNavBarContainer";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import TopNavBar from "../components/TopNavBar";
import { PlayerContext } from "../contexts/PlayerContext";

const CharacterProfileIcon = () => {
  const navigation = useNavigation();
  const { thisPlayer, setThisPlayer } = useContext(PlayerContext);

  return (
    <ImageBackground
      style={styles.characterProfileIcon}
      resizeMode="cover"
      source={require("../assets/characterprofile.png")}
    >
      <TopNavBar pageTitle="My Profile"/>
      {/* <HomeContainer
        backFrame={require("../assets/backframe.png")}
        pageTitle="My Profile"
        settingsFrame={require("../assets/settingsframe.png")}
      /> */}
      <View style={styles.contentframe}>
        <View style={styles.mainstatsBorder}>
          <Text style={[styles.mainStats, styles.mainStatsTypo]}>
            Main Stats
          </Text>
          <Text style={[styles.hp4040Weapon, styles.mainStatsTypo]}>{`${thisPlayer.name}  
Level ${thisPlayer.level} ${thisPlayer.class}
HP: ${thisPlayer.hp}
Weapon: Rapier      Armor: Mail
STR:15  DEX:15  CON:15 
INT:15  CHA:15  WIS:15`}
          </Text>
        </View>
        <View style={[styles.secondarystats, styles.mainstatsBorder]}>
          <Text style={[styles.mainStats, styles.mainStatsTypo]}>
            Statistics
          </Text>
          <Text
            style={[styles.hp4040Weapon, styles.mainStatsTypo]}
          >{`ABIs: Brawler
Gold:  45g
Total EXP: 999
Exp to Next Level: 


`}</Text>
        </View>
      </View>
      <BottomNavBarContainer
        prop1={require("../assets/-icon-home1.png")}
        prop2={require("../assets/iconframe6.png")}
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
  mainStatsTypo: {
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
  },
  mainstatsBorder: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_sm,
    backgroundColor: Color.black,
    borderRadius: 22,
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
  },
  mainStats: {
    textAlign: "center",
  },
  hp4040Weapon: {
    textAlign: "left",
    width: 219,
    height: 122,
    marginTop: 6,
  },
  secondarystats: {
    marginTop: 27,
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
    width: 295,
    paddingHorizontal: 24,
    paddingVertical: 74,
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
    alignItems: "center",
  },
  characterProfileIcon: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: 35,
    // width: "100%",
    // height: 800,
    //paddingTop: Padding.p_11xl,
    // paddingBottom: Padding.p_12xs,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default CharacterProfileIcon;
