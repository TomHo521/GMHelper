import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

interface AbilityButtonLabel {
  label: string;
  active: boolean;
  onPress: (label:string) => void;
}

const AbilityButton = ({label, active, onPress}: AbilityButtonLabel) => {

  const buttonStyle = active ? styles.activeButton : styles.inactiveButton;
  const labelStyle = active ? styles.activeLabel : styles.inactiveLabel;

  return (
  <TouchableOpacity onPress={()=> onPress(label)} style={[styles.athletics, styles.athleticsFlexBox, buttonStyle]}>
    <Text style={[styles.abilityLabel, labelStyle]}>{label}</Text>
  </TouchableOpacity>
)};


const styles = StyleSheet.create({

  athleticsFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },

  abilityLabel: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    display: "flex",
    color: Color.saddlebrown,
    flex: 1,
    textAlign: "center",
    fontFamily: FontFamily.twinkleStarRegular,
    fontSize: FontSize.size_xl,
    // lineHeight: 30,
    // justifyContent: "center",
    // alignSelf: "stretch",
    // alignItems: "center",
  },
  athletics: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.moccasin,
    borderColor: "#763900",
    borderWidth: 2,
    width: 184,
    height: 30,
    marginTop: 3,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    flexDirection: "row",
  },

  activeButton: {
    //backgroundColor: 'brown',
    backgroundColor: Color.saddlebrown,
    borderColor: 'white',
  },
  inactiveButton: {
    //backgroundColor: Color.saddlebrown,
    backgroundColor: Color.moccasin,
    borderColor: Color.saddlebrown,
  },
  activeLabel: {
    color: 'white',
  },
  inactiveLabel: {
    color: 'black',
  },

});


export default AbilityButton;

