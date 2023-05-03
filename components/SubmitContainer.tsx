import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SubmitContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.submitframe, styles.submitFlexBox]}>
      <Pressable
        style={[styles.submit, styles.submitBorder]}
        onPress={() => navigation.navigate("WelcomePage")}
      >
        <Text style={[styles.buttontext, styles.buttontextTypo]}>Submit</Text>
      </Pressable>
      <Text style={[styles.newClickHere, styles.buttonSpaceBlock]}>
        New? Click here!
      </Text>
      <Pressable
        style={[styles.button, styles.buttonSpaceBlock]}
        onPress={() => navigation.navigate("Registration")}
      >
        <Text style={[styles.createAccount, styles.buttontextTypo]}>
          Create Account
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  submitFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  submitBorder: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: Color.orange,
    borderRadius: Border.br_6xl,
  },
  buttontextTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  buttonSpaceBlock: {
    marginTop: 17,
    alignSelf: "stretch",
  },
  buttontext: {
    fontSize: FontSize.size_11xl,
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  submit: {
    height: 38,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
  },
  newClickHere: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  createAccount: {
    fontSize: FontSize.size_xl,
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  button: {
    height: 40,
    paddingHorizontal: 11,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: Color.orange,
    borderRadius: Border.br_6xl,
  },
  submitframe: {
    height: 130,
    marginTop: 100,
  },
});

export default SubmitContainer;
