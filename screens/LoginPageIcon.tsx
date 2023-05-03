import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import NameContainer from "../components/NameContainer";
import SubmitContainer from "../components/SubmitContainer";
import { Border, Padding } from "../GlobalStyles";

const LoginPageIcon = () => {
  return (
    <ImageBackground
      style={[styles.loginPageIcon, styles.frameParentFlexBox]}
      resizeMode="cover"
      source={require("../assets/loginpage.png")}
    >
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <NameContainer />
        <SubmitContainer />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    borderRadius: Border.br_31xl,
    backgroundColor: "rgba(0, 0, 0, 0.29)",
    borderStyle: "solid",
    borderColor: "#ffb904",
    borderWidth: 1,
    width: 308,
    height: 497,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_21xl,
  },
  loginPageIcon: {
    flex: 1,
    width: "100%",
    height: "100%",
    // width: "100%",
    // height: 800,
    overflow: "hidden",
  },
});

export default LoginPageIcon;
