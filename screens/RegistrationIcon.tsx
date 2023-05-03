import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import HomeContainer from "../components/HomeContainer";
import TopNavBar from "../components/TopNavBar";
import ContentWrapper from "../components/ContentWrapper";
import { Padding } from "../GlobalStyles";

const RegistrationIcon = () => {
  return (
    <ImageBackground
      style={styles.registrationIcon}
      resizeMode="cover"
      source={require("../assets/guildboard.png")}
    >
      <TopNavBar pageTitle="Registration"/>
      {/* <HomeContainer
        backFrame={require("../assets/backframe4.png")}
        pageTitle="Registration"
        settingsFrame={require("../assets/settingsframe3.png")}
        homeContainerTopNavBarWidth={327}
      /> */}
      <ContentWrapper />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  registrationIcon: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    // paddingHorizontal: Padding.p_mini,
    //paddingTop: Padding.p_11xl,
    // paddingBottom: Padding.p_31xl,
    alignItems: "center",
    marginTop: 35,
  },
});

export default RegistrationIcon;
