import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import TopNavBar from "../components/TopNavBar";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const WelcomePageIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[styles.welcomePageIcon, styles.innercontentFlexBox]}
      resizeMode="cover"
      source={require("../assets/welcomepage.png")}
    >
      <TopNavBar pageTitle="Welcome"/>
    
      <View style={[styles.contentFrame, styles.contentFrameShadowBox]}>
        <View style={[styles.innercontent, styles.innercontentFlexBox]}>
          <View style={styles.annoucementFrame}>
            <Text style={[styles.text, styles.textClr]}>
              <Text
                style={styles.welcomeBackZack}
              >{`Welcome back Zack Dragonheart!

`}</Text>
              <Text
                style={styles.theWorldHas}
              >{`The world has eagerly awaited your return!

Previously, your party last left off in Waxillium with the crude but powerful Dragonriders, led by their leader “Dred Dragonhide”.  “Dred prevented the escape of Tasaria and Perg!  A timely arrival by the adventurers however has evened the odds, as both the party and the dragonriders square off.

What action awaits your party this session?`}</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.continueButton, styles.contentFrameShadowBox]}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={[styles.text1, styles.textClr]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  innercontentFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  contentFrameShadowBox: {
    justifyContent: "center",
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  textClr: {
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
    alignSelf: "stretch",
  },
  welcomeBackZack: {
    fontSize: 24,
  },
  theWorldHas: {
    fontSize: FontSize.size_base,
  },
  text: {
    textAlign: "left",
  },
  annoucementFrame: {
    borderRadius: Border.br_3xs,
    backgroundColor: "rgba(5, 15, 23, 0.56)",
    paddingHorizontal: 9,
    paddingVertical: 6,
    justifyContent: "flex-end",
    alignSelf: "stretch",
    flex: 1,
  },
  text1: {
    fontSize: 28,
    textAlign: "center",
    flex: 1,
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  continueButton: {
    borderRadius: 22,
    backgroundColor: Color.orange,
    width: 222,
    height: 40,
    marginTop: 50,
    overflow: "hidden",
  },
  innercontent: {
    height: 472,
  },
  contentFrame: {
    borderRadius: 44,
    backgroundColor: "rgba(255, 255, 255, 0.17)",
    width: 318,
    flexDirection: "row",
    paddingHorizontal: 2,
    paddingTop: Padding.p_31xl,
    paddingBottom: 70,
  },
  welcomePageIcon: {
    width: "100%",
    height: "100%",
    marginTop: 35,
    // height: 800,
    gap: 80,
    //paddingTop: Padding.p_11xl,
    // paddingBottom: Padding.p_61xl,
    //justifyContent: "space-between",
    overflow: "hidden",
  },
});

export default WelcomePageIcon;
