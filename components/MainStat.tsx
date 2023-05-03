import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

interface MainStatLabel {
  label: string;
}

const MainStat = ({label}: MainStatLabel) => (
  <View style={[styles.strHeading, styles.athleticsFlexBox]}>
    <Text style={styles.strength}>{label}</Text>
  </View>
);


const styles = StyleSheet.create({

  athleticsFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },

  strength: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.twinkleStarRegular,
    fontSize: FontSize.size_xl,
  },
  strHeading: {
    height: 26,
    alignSelf: "stretch",
    flexDirection: "row",
  },
 
 
});


export default MainStat;
