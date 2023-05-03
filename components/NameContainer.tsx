import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const NameContainer = () => {
  return (
    <View style={styles.nameParent}>
      <Text style={[styles.name, styles.passwordTypo]}>Name:</Text>
      <View style={styles.pwfield} />
      <Text style={[styles.password, styles.passwordTypo]}>Password:</Text>
      <View style={styles.pwfield} />
      <Text style={[styles.forgotPassword, styles.passwordTypo]}>
        Forgot password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  name: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
    flex: 1,
    alignSelf: "stretch",
  },
  pwfield: {
    backgroundColor: Color.black,
    borderStyle: "solid",
    borderColor: "#ffebb8",
    borderWidth: 1,
    height: 40,
    overflow: "hidden",
    marginTop: 4,
    alignSelf: "stretch",
  },
  password: {
    marginTop: 4,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
    flex: 1,
    alignSelf: "stretch",
  },
  forgotPassword: {
    fontSize: FontSize.size_sm,
    width: 166,
    height: 20,
    marginTop: 4,
  },
  nameParent: {
    flex: 1,
    alignSelf: "stretch",
  },
});

export default NameContainer;
