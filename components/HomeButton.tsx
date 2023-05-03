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
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

type HomeButtonType = {
  style?: StyleProp<ViewStyle>;
};

const HomeButton = ({ style }: HomeButtonType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.homebutton, style]}
      onPress={() => navigation.navigate("HomeScreen")}
    >
      <Image
        style={styles.iconHome}
        resizeMode="cover"
        source={require("../assets/-icon-home5.png")}
      />
      <Text style={styles.home}>Home</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconHome: {
    width: 38,
    height: 33,
  },
  home: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.twinkleStarRegular,
    color: Color.white,
    textAlign: "center",
    width: 56,
    height: 17,
    marginTop: 6,
  },
  homebutton: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    paddingLeft: 12,
    paddingTop: 15,
    paddingRight: 12,
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default HomeButton;
