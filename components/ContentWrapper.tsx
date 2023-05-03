import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import NameFrameContainer from "./NameFrameContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding } from "../GlobalStyles";

const ContentWrapper = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.contentframe, styles.buttonBorder]}>
      <NameFrameContainer
        nameText="Zachary Dragonheart"
        emailText="Name:"
        propMarginTop="unset"
      />
      <NameFrameContainer
        nameText="Wood Elf"
        emailText="Race:"
        propMarginTop={20}
      />
      <NameFrameContainer
        nameText="Ranger"
        emailText="Class:"
        propMarginTop={20}
      />
      <NameFrameContainer
        nameText="*****"
        emailText="Password:"
        propMarginTop={20}
      />
      <NameFrameContainer
        nameText="*****"
        emailText="Re-enter password:"
        propMarginTop={20}
      />
      <Pressable
        style={[styles.button, styles.buttonBorder]}
        onPress={() => navigation.navigate("WelcomePage")}
      >
        <Text style={styles.submit}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBorder: {
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
  },
  submit: {
    fontSize: 28,
    fontFamily: FontFamily.twinkleStarRegular,
    color: Color.white,
    textAlign: "center",
  },
  button: {
    borderRadius: 22,
    backgroundColor: Color.orange,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_28xl,
    paddingVertical: Padding.p_11xs,
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 20,
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
    height: 560,
    paddingHorizontal: Padding.p_17xl,
    paddingTop: Padding.p_37xl,
    paddingBottom: Padding.p_116xl,
    alignItems: "center",
    marginTop: 54,
  },
});

export default ContentWrapper;
