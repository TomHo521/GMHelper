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

type DiceButtonType = {
  style?: StyleProp<ViewStyle>;
};

const DiceButton = ({ style }: DiceButtonType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.dicebutton, style]}
      onPress={() => navigation.navigate("DiceRollScreen")}
    >
      <Image
        style={styles.iconFrame}
        resizeMode="cover"
        source={require("../assets/iconframe51.png")}
      />
      <Text style={styles.rollDice}>Roll Dice</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconFrame: {
    width: 57,
    height: 44,
    overflow: "hidden",
  },
  rollDice: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.twinkleStarRegular,
    color: Color.white,
    textAlign: "center",
    width: 56,
    height: 17,
  },
  dicebutton: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    paddingLeft: 11,
    paddingTop: 15,
    paddingRight: 11,
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default DiceButton;
