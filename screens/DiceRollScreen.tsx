import React, { useState } from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeContainer from "../components/HomeContainer";
import BottomNavBarContainer from "../components/BottomNavBarContainer";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";
import TopNavBar from "../components/TopNavBar";

const DiceRollScreen = () => {
  const navigation = useNavigation();
  const [rollResult, setRollResult] = React.useState("0");

  const [diceValues, setDiceValues] = useState({
    d4: [0, 4],
    d6: [0, 6],
    d8: [0, 8],
    d10: [0, 10],
    d12: [0, 12],
    d20: [0, 20],
    });

    const handleInputChange = (name, value) => {
      const parsedValue = parseInt(value);
      if (isNaN(parsedValue)) {
        value = '0';
      }
      setDiceValues({
        ...diceValues,
        [name]: [parseInt(value), diceValues[name][1]],
      });
    };


    const handleDiceRoll = () => {
      //compute the dice rolls here
      let total = 0;
      const diceTypes = Object.keys(diceValues);
    
      diceTypes.forEach((type) => {
        const [count, sides] = diceValues[type];
    
        if (count > 0) {
          let subtotal = 0;
          for (let i = 0; i < count; i++) {
            let roll = Math.floor(Math.random() * sides) + 1;
            console.log(`${type} roll: ${roll}`);
            subtotal += roll;
          }
          console.log(`${type} subtotal: ${subtotal}`);
          total += subtotal;
        }
      });
    
      console.log(`total: ${total}`);
      setRollResult(total.toString());
    };

  return (
    <ImageBackground
      style={styles.diceRollScreen}
      resizeMode="cover"
      source={require("../assets/dicerollscreen.png")}
    >
  
      <TopNavBar pageTitle="Dice Roll"/>
      <View style={styles.contentframe}>
        <View style={styles.qtyLayout}>
        <TextInput
            style={[styles.d4, styles.d8Position]}
            value={diceValues.d4[0].toString()}
            onChangeText={(value) => handleInputChange('d4', value)}
            placeholder="d4"
          />
          <TextInput
            style={[styles.d6, styles.d8Position]}
            value={diceValues.d6[0].toString()}
            onChangeText={(value) => handleInputChange('d6', value)}
            placeholder="d6"
          />
          <TextInput
            style={[styles.d8, styles.d8Position]}
            value={diceValues.d8[0].toString()}
            onChangeText={(value) => handleInputChange('d8', value)}
            placeholder="d8"
          />
          <TextInput
            style={[styles.d10, styles.d8Position]}
            value={diceValues.d10[0].toString()}
            onChangeText={(value) => handleInputChange('d10', value)}
            placeholder="d10"
          />
          <TextInput
            style={[styles.d12, styles.d8Position]}
            value={diceValues.d12[0].toString()}
            onChangeText={(value) => handleInputChange('d12', value)}
            placeholder="d12"
          />
          <TextInput
            style={[styles.d20, styles.d8Position]}
            value={diceValues.d20[0].toString()}
            onChangeText={(value) => handleInputChange('d20', value)}
            placeholder="d20"
          />

        </View>
        <View style={[styles.dicetype, styles.qtyLayout]}>
          <View style={[styles.d201, styles.d81Layout]}>
            <Text style={[styles.d202, styles.d202Typo]}>d20</Text>
          </View>
          <View style={[styles.d121, styles.d81Layout]}>
            <Text style={[styles.d122, styles.d202Typo]}>d12</Text>
          </View>
          <View style={[styles.d101, styles.d81Layout]}>
            <Text style={[styles.d122, styles.d202Typo]}>d10</Text>
          </View>
          <View style={[styles.d81, styles.d81Layout]}>
            <Text style={[styles.d122, styles.d202Typo]}>d8</Text>
          </View>
          <View style={[styles.d61, styles.d81Layout]}>
            <Text style={[styles.d122, styles.d202Typo]}>d6</Text>
          </View>
          <View style={[styles.d41, styles.d81Layout]}>
            <Text style={[styles.d122, styles.d202Typo]}>d4</Text>
          </View>
        </View>
      </View>


      <View style={[styles.output, styles.outputFlexBox]}>
        <Text style={[styles.d122, styles.d202Typo]}> {rollResult} </Text>
      </View>

      <TouchableOpacity onPress={handleDiceRoll}>
        <View style={[styles.button, styles.outputFlexBox]}>
          <Text style={styles.rollDice}>Roll Dice</Text>
        </View>
      </TouchableOpacity>

      <BottomNavBarContainer
        prop1={require("../assets/-icon-home1.png")}
        prop2={require("../assets/iconframe.png")}
        prop3={require("../assets/iconsaccount-circle-filled-24px4.png")}
        prop4={require("../assets/iconsmail-outline.png")}
        onHomeButtonPress={() => navigation.navigate("HomeScreen")}
        onDiceButtonPress={() => navigation.navigate("DiceRollScreen")}
        onProfiieButtonPress={() => navigation.navigate("CharacterProfile")}
        onMessagesButtonPress={() => navigation.navigate("Messages")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  d8Position: {
    height: 40,
    backgroundColor: Color.black,
    color: 'white',
    fontSize: 24,
    left: "13.75%",
    right: "23.75%",
    top: "50%",
    width: "62.5%",
    position: "absolute",
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
    overflow: "hidden",
    textAlign: 'center', // center horizontally
    textAlignVertical: 'center', // center vertically
  },
  qtyLayout: {
    height: 385,
    width: 111,
  },
  d81Layout: {
    borderRadius: 22,
    left: "0%",
    right: "0%",
    height: 40,
    backgroundColor: Color.black,
    top: "50%",
    position: "absolute",
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
    overflow: "hidden",
    width: "100%",
  },
  d202Typo: {
    height: 36,
    fontSize: 28,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
    top: "50%",
    position: "absolute",
  },
  outputFlexBox: {
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    overflow: "hidden",
  },
  d20: {
    marginTop: 100.5,
  },
  d12: {
    marginTop: 52.5,
  },
  d10: {
    marginTop: 4.5,
  },
  d8: {
    marginTop: -43.5,
  },
  d6: {
    marginTop: -91.5,
  },
  d4: {
    marginTop: -139.5,
  },
  d202: {
    marginTop: -18.18,
    width: "65%",
    left: "17.5%",
  },
  d201: {
    marginTop: 100.5,
  },
  d122: {
    marginTop: -18,
    width: "57.4%",
    left: "21.54%",
  },
  d121: {
    marginTop: 52.5,
  },
  d101: {
    marginTop: 4.5,
  },
  d81: {
    marginTop: -43.5,
  },
  d61: {
    marginTop: -91.5,
  },
  d41: {
    marginTop: -139.5,
  },
  dicetype: {
    marginLeft: 8,
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
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_11xl,
    flexDirection: "row",
    borderWidth: 0.9,
    borderStyle: "solid",
    borderColor: "#ffebb8",
  },
  output: {
    backgroundColor: Color.gray_400,
    width: 268,
    height: 50,
    borderColor: "#ffebb8",
    justifyContent: "center",
    borderWidth: 1,
  },
  rollDice: {
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
  },
  button: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.orange,
    borderColor: "#fff",
    paddingHorizontal: 75,
    paddingVertical: 0,
    flexDirection: "row",
  },
  diceRollScreen: {
    flex: 1,
    // height: 800,
    //paddingTop: Padding.p_11xl,
    // paddingBottom: Padding.p_12xs,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    marginTop: 35,
  },
});

export default DiceRollScreen;
