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








// <View style={[styles.contentframe, styles.athleticsFlexBox1]}>
// <View style={styles.frameBorder}>
//   <View style={[styles.strHeading, styles.athleticsFlexBox]}>
//     <Text style={styles.strength}>Strength</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>athletics</Text>
//   </View>
// </View>
// <View style={[styles.dexFrame, styles.frameBorder]}>
//   <View style={[styles.strHeading, styles.athleticsFlexBox]}>
//     <Text style={styles.strength}>Dexterity</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>acrobatics</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>sleight of hand</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>stealth</Text>
//   </View>
// </View>
// <View style={[styles.dexFrame, styles.frameBorder]}>
//   <View style={[styles.strHeading, styles.athleticsFlexBox]}>
//     <Text style={styles.strength}>Charisma</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>deception</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>intimidation</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>performance</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>persuasion</Text>
//   </View>
// </View>
// <View style={[styles.dexFrame, styles.frameBorder]}>
//   <View style={[styles.strHeading, styles.athleticsFlexBox]}>
//     <Text style={styles.strength}>Intelligence</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>arcana</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>history</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>investigation</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>nature</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>religion</Text>
//   </View>
// </View>
// <View style={[styles.dexFrame, styles.frameBorder]}>
//   <View style={[styles.strHeading, styles.athleticsFlexBox]}>
//     <Text style={styles.strength}>Wisdom</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>perception</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>medicine</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>insight</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>animal handling</Text>
//   </View>
//   <View style={[styles.athletics, styles.athleticsFlexBox]}>
//     <Text style={styles.abilityLabel}>survival</Text>
//   </View>
// </View>
// </View>