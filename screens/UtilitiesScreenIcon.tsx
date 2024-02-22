import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopNavBar from "../components/TopNavBar";
import UtilityRowContainer from "../components/UtilityRowContainer";
import BottomNavBar from "../components/BottomNavBar";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const UtilitiesScreenIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.utilitiesScreenIcon}
      resizeMode="cover"
      source={require("../assets/utilitiesscreen.png")}
    >
  
      <TopNavBar pageTitle="Utilities"/>

      <View style={styles.contentframe}>
        <View style={styles.rowcontainer}>
          <TouchableOpacity
            style={styles.utilitybuttonLayout}
            onPress={() => navigation.navigate("SavingThrow")}
          >
            <Image
              style={[styles.iconframe, styles.iconframeLayout]}
              resizeMode="cover"
              source={require("../assets/iconframe3.png")}
            />
            <Text style={styles.buttonulabelTypo}>{`Saving Throw
`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.utilitybutton1, styles.utilitybuttonLayout]}
            onPress={() => navigation.navigate("DiceRollScreen")}
          >
            <Image
              style={[styles.iconframe1, styles.iconframeLayout]}
              resizeMode="cover"
              source={require("../assets/iconframe2.png")}
            />
            <Text style={styles.buttonulabelTypo}>{`Roll Dice
`}</Text>
          </TouchableOpacity>
        </View>
        <UtilityRowContainer
          diceActionText={require("../assets/iconframe5.png")}
          diceActionImageUrl={`Roll Attack
`}
          attackActionText={require("../assets/iconframe4.png")}
          savingThrowActionText={`Ability Check
`}
        />
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
  iconframeLayout: {
    height: 80,
    width: 110,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  utilitybuttonLayout: {
    height: 143,
    width: 130,
    borderWidth: 2,
    borderColor: "#763900",
    backgroundColor: Color.moccasin,
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    overflow: "hidden",
  },
  iconframe: {
    marginTop: -51.5,
    marginLeft: -55,
    top: "50%",
    left: "50%",
  },
  buttonulabelTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 35,
    width: 100,
    textAlign: "center",
    color: Color.saddlebrown,
    fontFamily: FontFamily.twinkleStarRegular,
    fontSize: FontSize.size_base,
    left: 16,
    top: 108,
    position: "absolute",
  },
  iconframe1: {
    top: 20,
    left: 10,
  },
  utilitybutton1: {
    marginLeft: 10,
  },
  rowcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentframe: {
    borderRadius: Border.br_31xl,
    backgroundColor: "rgba(161, 117, 3, 0.1)",
    borderColor: "#fff",
    borderWidth: 1,
    height: 466,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_61xl,
    borderStyle: "solid",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  utilitiesScreenIcon: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: 35,
    // width: "100%",
    // height: 800,
    //paddingTop: Padding.p_11xl,
    // paddingBottom: Padding.p_12xs,
    justifyContent: "space-between",
    overflow: "hidden",
    alignItems: "center",
  },
});

export default UtilitiesScreenIcon;
