import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type ProfiieButtonType = {
  style?: StyleProp<ViewStyle>;
};

const ProfiieButton = ({ style }: ProfiieButtonType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.profiiebutton, style]}
      onPress={() => navigation.navigate("CharacterProfile")}
    >
      <Image
        style={styles.iconFrame}
        resizeMode="cover"
        source={require("../assets/iconframe7.png")}
      />
      <Text style={styles.myProfile}>My Profile</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconFrame: {
    width: 41,
    height: 39,
    overflow: "hidden",
  },
  myProfile: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.twinkleStarRegular,
    color: Color.white,
    textAlign: "center",
    width: 64,
    height: 17,
    marginTop: 4,
  },
  profiiebutton: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    paddingLeft: Padding.p_5xs,
    paddingTop: 15,
    paddingRight: 8,
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfiieButton;
