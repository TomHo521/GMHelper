import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, View, Text, ImageBackground, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContentFrameContainer from "../components/ContentFrameContainer";
import BottomNavBar from "../components/BottomNavBar";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import TopNavBar from "../components/TopNavBar";
import { PlayerContext } from "../contexts/PlayerContext";

type renderItem = {
  id: number;
  imageSource: any;
}

const AbilityCheckIcon = () => {
  const data = [
    { id: 1, imageSource: require("../assets/abilitycheck.png") },
  ];
  const renderItem = ({ item } : {item: renderItem}) => {
    return (
      <ImageBackground
        style={styles.abilityCheckIcon}
        resizeMode="cover"
        source={item.imageSource}
      >
        <AbilityCheckContentFrameContainer/>
      </ImageBackground>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};



const AbilityCheckContentFrameContainer = () => {
  
  const navigation = useNavigation();
  const { thisPlayer, setThisPlayer } = useContext(PlayerContext);

  const [activeAbility, setActiveAbility] = useState('athletics');
  const [abilityCheckRoll, setAbilityCheckRoll] = useState('');
  
  const rollAbilityCheck = () => {
    let roll = Math.floor(Math.random() * 20) + 1;
    setAbilityCheckRoll(`${roll}`);
    console.log(`${activeAbility}: ${roll}`);
  }

  return (
    <>
      <TopNavBar pageTitle="Ability Check" />

      {/* The ability selection */}
      <ContentFrameContainer
        activeAbility={activeAbility}
        setActiveAbility={setActiveAbility}
      />
      {/* output box */}
      <View style={[styles.output, styles.outputBorder]}>
        <Text style={styles.textLabel}>{`${activeAbility} roll: ${abilityCheckRoll}`}</Text>
      </View>

      {/* Roll button */}
      <TouchableOpacity onPress={() => rollAbilityCheck()} style={[styles.button, styles.outputBorder]}>
        <Text style={styles.label}>Ability Check</Text>
      </TouchableOpacity>

      <BottomNavBar
        prop1={require("../assets/-icon-home.png")}
        prop2={require("../assets/iconframe.png")}
        prop3={require("../assets/iconsaccount-circle-filled-24px.png")}
        prop4={require("../assets/iconsmail-outline.png")}
        onHomeButtonPress={() => navigation.navigate("HomeScreen")}
        onDiceButtonPress={() => navigation.navigate("DiceRollScreen")}
        onProfileButtonPress={() => navigation.navigate("CharacterProfile")}
        onMessagesButtonPress={() => navigation.navigate("Messages")}
      />
    </>
  );
};



const styles = StyleSheet.create({
  outputBorder: {
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
  },
  output: {
    backgroundColor: Color.gray_400,
    borderColor: "#ffebb8",
    width: 300,
    height: 80,
  },
  // rollText: {
  //   color: Color.white
  // },
  textLabel: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.twinkleStarRegular,
    color: Color.white,
    textAlign: "center",
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.twinkleStarRegular,
    color: Color.white,
    textAlign: "center",
    width: 178,
    height: 40,
  },
  button: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.orange,
    borderColor: "#fff",
    width: 263,
    paddingHorizontal: 40,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  abilityCheckIcon: {
    flex: 1,
    width: "100%",
    height: "100%",
    //paddingTop: Padding.p_11xl,
    gap: 30,
    marginTop: 35,
    // paddingBottom: Padding.p_12xs,
    alignItems: "center",
    justifyContent: "space-between",
  },
});














export default AbilityCheckIcon;






// <FlatList
// data={data}
// keyExtractor={(item) => item.id.toString()}
// renderItem={({ item }) => (
//   <ImageBackground
//     style={styles.abilityCheckIcon}
//     resizeMode="cover"
//     source={item.imageSource}
//   >
   
//     <TopNavBar pageTitle="Ability Check"/>
//     <ContentFrameContainer activeAbility={activeAbility} setActiveAbility={setActiveAbility}/>
//     <View style={[styles.output, styles.outputBorder]} />
//     <View style={[styles.button, styles.outputBorder]}>
//       <Text style={styles.label}>Ability Check</Text>
//     </View>
//     <BottomNavBar
//       prop1={require("../assets/-icon-home.png")}
//       prop2={require("../assets/iconframe.png")}
//       prop3={require("../assets/iconsaccount-circle-filled-24px2.png")}
//       prop4={require("../assets/iconsmail-outline.png")}
//       onHomeButtonPress={() => navigation.navigate("HomeScreen")}
//       onDiceButtonPress={() => navigation.navigate("DiceRollScreen")}
//       onProfileButtonPress={() => navigation.navigate("CharacterProfile")}
//       onMessagesButtonPress={() => navigation.navigate("Messages")}
//     />
//   </ImageBackground>
// )}
// />