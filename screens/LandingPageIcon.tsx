import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LandingPageIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[styles.landingPageIcon, styles.herotextframeFlexBox]}
      resizeMode="cover"
      source={require("../assets/landingpage.png")}
    >
      <View style={[styles.herotextframe, styles.loginbuttonLayout]}>
        <Text style={styles.theWorldAwaits}>The World Awaits</Text>
      </View>
      <Pressable
        style={[styles.loginbutton, styles.loginbuttonLayout]}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={styles.theWorldAwaits}>Login</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  herotextframeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginbuttonLayout: {
    padding: Padding.p_xs,
    flexDirection: "row",
    width: 236,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  theWorldAwaits: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.twinkleStarRegular,
    color: Color.white,
    textAlign: "center",
    flex: 1,
  },
  herotextframe: {
    borderRadius: Border.br_3xs,
    backgroundColor: "rgba(67, 67, 67, 0.3)",
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  loginbutton: {
    borderRadius: Border.br_xl,
    backgroundColor: "rgba(0, 113, 79, 0.44)",
    borderColor: "#ffefef",
    marginTop: 207,
  },
  landingPageIcon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
  },
});

export default LandingPageIcon;
