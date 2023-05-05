import React, { useState, useContext } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";
import { PlayerContext } from "../contexts/PlayerContext";

type StatButtonProps = {
  name: string;
  active: boolean;
  onPress: (stat: string) => void;
}

const StatButton = ({name, active, onPress}: StatButtonProps ) => {
  const buttonStyle = active ? styles.activeButton : styles.inactiveButton;
  const labelStyle = active ? styles.activeLabel : styles.inactiveLabel;

  return (
    // <TouchableOpacity style={[styles.dexterity, styles.strengthBorder]}>
    //   {/* <View style={[styles.dexterity, styles.strengthBorder]}> */}
    //     <Text style={[styles.strength1, styles.labelTypo]}>{name}</Text>
    //   {/* </View> */}
    // </TouchableOpacity>
    <TouchableOpacity onPress={() => onPress(name)} style={[styles.dexterity, styles.strengthBorder, buttonStyle]} >
      <Text style={[styles.strength1, styles.labelTypo, labelStyle]}>{name}</Text>
    </TouchableOpacity>
  )
};

const SavingThrowContainer = () => {

  const [activeStat, setActiveStat] = useState('strength');
  const [savingThrow, setSavingThrow] = useState('');
  const { thisPlayer, setThisPlayer } = useContext(PlayerContext);

  const toggleActiveStat = (stat: string) => {
    setActiveStat(stat);
    console.log(activeStat);
  };

  const updateSavingThrow = () => {
    let roll = Math.floor(Math.random() * 20) + 1;
    setSavingThrow(`${activeStat} roll: ${roll}`);
  }


  return (
    <View style={styles.contentframe}>
      <View style={styles.innercontent}>
        {/* //<Text style={[styles.strength1, styles.labelTypo]}>`active: ${activeStat}`</Text> */}
        <StatButton name="Strength" active={activeStat === 'strength'} onPress={() => toggleActiveStat('strength')} />
        <StatButton name="Charisma" active={activeStat === 'charisma'} onPress={() => toggleActiveStat('charisma')} />
        <StatButton name="Constitution" active={activeStat === 'constitution'} onPress={() => toggleActiveStat('constitution')} />
        <StatButton name="Intelligence" active={activeStat === 'intelligence'} onPress={() => toggleActiveStat('intelligence')} />
        <StatButton name="Dexterity" active={activeStat === 'dexterity'} onPress={() => toggleActiveStat('dexterity')} />
        <StatButton name="Wisdom" active={activeStat === 'wisdom'} onPress={() => toggleActiveStat('wisdom')} />
      </View>
      
      <View style={[styles.output, styles.outputLayout]}>
        <Text style={[styles.label, styles.labelTypo]}>{savingThrow}</Text>
      </View>
      
      <TouchableOpacity onPress={()=> {updateSavingThrow()}} style={[styles.button, styles.outputLayout]}>
        <Text style={[styles.label, styles.labelTypo]}>Saving Throw</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  strengthBorder: {
    overflow: "hidden",
    backgroundColor: Color.black,
    borderRadius: 22,
    flex: 1,
    alignSelf: "stretch",
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
  },
  outputLayout: {
    height: 41,
    borderWidth: 1,
    overflow: "hidden",
    alignSelf: "stretch",
    borderStyle: "solid",
    alignItems: "center",
  },
  strength1: {
    position: "absolute",
    height: "90%",
    width: "57.4%",
    top: "5%",
    left: "21.54%",
    fontSize: 28,
  },
  dexterity: {
    marginTop: 8,
  },
  innercontent: {
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
    width: 295,
    height: 396,
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_11xl,
    justifyContent: "center",
    borderWidth: 0.9,
    borderStyle: "solid",
    borderColor: "#ffebb8",
    alignItems: "center",
  },
  output: {
    backgroundColor: Color.gray_400,
    borderColor: "#ffebb8",
    height: 41,
    borderWidth: 1,
    justifyContent: "space-between",
  },
  label: {
    fontSize: FontSize.size_11xl,
  },
  button: {
    fontFamily: FontFamily.twinkleStarRegular,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.orange,
    borderColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
  },
  contentframe: {
    height: 496,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },


  label: {
    fontSize: 26,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  activeButton: {
    // backgroundColor: 'black',
    // borderColor: 'white',

    backgroundColor: Color.saddlebrown,
    borderColor: 'white',
    //borderWidth: 1,
    //borderWidth: StyleSheet.hairlineWidth,
  },
  inactiveButton: {
    //backgroundColor: Color.saddlebrown,
    // backgroundColor: Color.moccasin,
    // borderColor: 'white',
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


export default SavingThrowContainer;
