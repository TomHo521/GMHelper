import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import AbilityButton from './AbilityButton';
import MainStat from './MainStat';

interface ContentFrameContainerProps {
  activeAbility: string;
  setActiveAbility: React.Dispatch<React.SetStateAction<string>>;
}

const ContentFrameContainer = ({activeAbility, setActiveAbility} : ContentFrameContainerProps) => {

  return (

    <View style={[styles.contentframe, styles.athleticsFlexBox1]}>
      <View style={styles.frameBorder}>
        <MainStat label="Strength" />
        <AbilityButton label="athletics" active={activeAbility === 'athletics'} onPress={setActiveAbility}/>
      </View>
      <View style={[styles.dexFrame, styles.frameBorder]}>
        <MainStat label="Dexterity" />
        <AbilityButton label="acrobatics" active={activeAbility === 'acrobatics'} onPress={setActiveAbility}/>
        <AbilityButton label="sleight of hand" active={activeAbility === 'sleight of hand'} onPress={setActiveAbility}/>
        <AbilityButton label="stealth" active={activeAbility === 'stealth'} onPress={setActiveAbility}/>
      </View>
      <View style={[styles.dexFrame, styles.frameBorder]}>
        <MainStat label="Charisma" />
        <AbilityButton label="deception" active={activeAbility === 'deception'} onPress={setActiveAbility}/>
        <AbilityButton label="intimidation" active={activeAbility === 'intimidation'} onPress={setActiveAbility}/>
        <AbilityButton label="performance" active={activeAbility === 'performance'} onPress={setActiveAbility}/>
        <AbilityButton label="persuasion" active={activeAbility === 'persuasion'} onPress={setActiveAbility}/>
      </View>
      <View style={[styles.dexFrame, styles.frameBorder]}>
        <MainStat label="Intelligence" />
        <AbilityButton label="arcana" active={activeAbility === 'arcana'} onPress={setActiveAbility}/>
        <AbilityButton label="history" active={activeAbility === 'history'} onPress={setActiveAbility}/>
        <AbilityButton label="investigation" active={activeAbility === 'investigation'} onPress={setActiveAbility}/>
        <AbilityButton label="nature" active={activeAbility === 'nature'} onPress={setActiveAbility}/>
        <AbilityButton label="religion" active={activeAbility === 'religion'} onPress={setActiveAbility}/>
      </View>
      <View style={[styles.dexFrame, styles.frameBorder]}>
        <MainStat label="Wisdom" />
        <AbilityButton label="perception" active={activeAbility === 'perception'} onPress={setActiveAbility}/>
        <AbilityButton label="medicine" active={activeAbility === 'medicine'} onPress={setActiveAbility}/>
        <AbilityButton label="insight" active={activeAbility === 'insight'} onPress={setActiveAbility}/>
        <AbilityButton label="animal handling" active={activeAbility === 'animal handling'} onPress={setActiveAbility}/>
        <AbilityButton label="survival" active={activeAbility === 'survival'} onPress={setActiveAbility}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  athleticsFlexBox1: {
    alignItems: "center",
    borderStyle: "solid",
  },
  athleticsFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameBorder: {
    paddingBottom: Padding.p_8xs,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_mini,
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
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
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
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
    borderStyle: "solid",
    flexDirection: "row",
  },
  dexFrame: {
    marginTop: 20,
  },
  contentframe: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_300,
    width: 291,
    paddingHorizontal: Padding.p_15xl,
    paddingVertical: Padding.p_21xl,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    borderStyle: "solid",
  },
});

export default ContentFrameContainer;
