import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import TopNavBar from "../components/TopNavBar";
import BottomNavBar from "../components/BottomNavBar";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const GuildboardIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.guildboardIcon}
      resizeMode="cover"
      source={require("../assets/guildboard.png")}
    >
      <TopNavBar pageTitle="GuildBoard"/>
     
      <View style={[styles.contentframe, styles.questpostBorder]}>
        <View style={[styles.questpost, styles.questpostBorder]}>
          <Text style={styles.text}>
            <Text style={styles.adventurerATradeShipment}>
              <Text style={styles.adventurerATradeShipment1}>{`Adventurer!

A trade shipment of elderberry licorice has been purloined by goblins of the Misty Forest!  As you may know, the Lady Eliadrin has a palate for fine confections!

This is no mere licorice adventurers.  The ingredients were made from elderberries and pepper at the height of the season, and cannot be replaced in time for the licorice sampling at the Noble’s banquet.  

Please help recover the licorice for the Lady Eliadrin!  You would be handsomely rewarded!

                                             Lord Baron

Objective:  Head to the Misty Forest to recover the licorice to Lord Baron before the Noble’s Banquet

Reward:  ???  


`}</Text>
              <Text style={styles.blankLine}> </Text>
            </Text>
            <Text style={styles.blankLine}>
              <Text style={styles.blankLine2}> </Text>
            </Text>
          </Text>
        </View>
      </View>
      <BottomNavBar
        prop1={require("../assets/-icon-home.png")}
        prop2={require("../assets/iconframe.png")}
        prop3={require("../assets/iconsaccount-circle-filled-24px.png")}
        prop4={require("../assets/iconsmail-outline.png")}
        propAlignSelf="unset"
        propWidth={360}
        onHomeButtonPress={() => navigation.navigate("HomeScreen")}
        onDiceButtonPress={() => navigation.navigate("DiceRollScreen")}
        onProfileButtonPress={() => navigation.navigate("CharacterProfile")}
        onMessagesButtonPress={() => navigation.navigate("Messages")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  questpostBorder: {
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
  },
  adventurerATradeShipment1: {
    fontSize: FontSize.size_smi,
  },
  blankLine: {
    fontSize: FontSize.size_mini,
  },
  adventurerATradeShipment: {
    fontFamily: FontFamily.dancingScriptRegular,
  },
  blankLine2: {
    fontFamily: FontFamily.akayaTelivigalaRegular,
  },
  text: {
    color: Color.white,
    textAlign: "left",
    width: 246,
  },
  questpost: {
    borderRadius: 22,
    backgroundColor: Color.black,
    padding: Padding.p_5xs,
    overflow: "hidden",
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
    flexDirection: "row",
    paddingHorizontal: 19,
    paddingVertical: 52,
  },
  guildboardIcon: {
    flex: 1,
    width: "100%",
    height: "100%",
    // width: "100%",
    // height: 800,
    //paddingTop: Padding.p_11xl,
    // paddingBottom: Padding.p_12xs,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    marginTop: 35,
  },
});

export default GuildboardIcon;
