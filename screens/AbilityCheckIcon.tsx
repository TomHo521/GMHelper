import * as React from "react";
import { FlatList, StyleSheet, View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeContainer from "../components/HomeContainer";
import ContentFrameContainer from "../components/ContentFrameContainer";
import BottomNavBarContainer from "../components/BottomNavBarContainer";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import TopNavBar from "../components/TopNavBar";

// const DATA = [{ id: "1" }];

// const renderItem = () => {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       style={styles.abilityCheckIcon}
//       resizeMode="cover"
//       source={require("../assets/abilitycheck.png")}
//     >
//       <HomeContainer
//         backFrame={require("../assets/backframe5.png")}
//         pageTitle="Home"
//         settingsFrame={require("../assets/settingsframe4.png")}
//         homeContainerTopNavBarAlignSelf="unset"
//         homeContainerTopNavBarWidth={327}
//         homeContainerTopNavBarAlignItems="flex-start"
//       />
//       <ContentFrameContainer />
//       <View style={[styles.output, styles.outputBorder]} />
//       <View style={[styles.button, styles.outputBorder]}>
//         <Text style={styles.label}>Ability Check</Text>
//       </View>
//       <BottomNavBarContainer
//         prop1={require("../assets/-icon-home1.png")}
//         prop2={require("../assets/iconframe.png")}
//         prop3={require("../assets/iconsaccount-circle-filled-24px2.png")}
//         prop4={require("../assets/iconsmail-outline.png")}
//         onHomeButtonPress={() => navigation.navigate("HomeScreen")}
//         onDiceButtonPress={() => navigation.navigate("DiceRollScreen")}
//         onProfiieButtonPress={() => navigation.navigate("CharacterProfile")}
//         onMessagesButtonPress={() => navigation.navigate("Messages")}
//       />
//     </ImageBackground>
//   );
// };


const AbilityCheckIcon = () => {
  const navigation = useNavigation();

  const data = [
    { id: 1, imageSource: require("../assets/abilitycheck.png") },
    // add more objects as needed
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ImageBackground
          style={styles.abilityCheckIcon}
          resizeMode="cover"
          source={item.imageSource}
        >
          {/* <HomeContainer
            backFrame={require("../assets/backframe5.png")}
            pageTitle="Home"
            settingsFrame={require("../assets/settingsframe4.png")}
            homeContainerTopNavBarAlignSelf="unset"
            homeContainerTopNavBarWidth={327}
            homeContainerTopNavBarAlignItems="flex-start"
          /> */}
          <TopNavBar pageTitle="Ability Check"/>
          <ContentFrameContainer />
          <View style={[styles.output, styles.outputBorder]} />
          <View style={[styles.button, styles.outputBorder]}>
            <Text style={styles.label}>Ability Check</Text>
          </View>
          <BottomNavBarContainer
            prop1={require("../assets/-icon-home1.png")}
            prop2={require("../assets/iconframe.png")}
            prop3={require("../assets/iconsaccount-circle-filled-24px2.png")}
            prop4={require("../assets/iconsmail-outline.png")}
            onHomeButtonPress={() => navigation.navigate("HomeScreen")}
            onDiceButtonPress={() => navigation.navigate("DiceRollScreen")}
            onProfiieButtonPress={() => navigation.navigate("CharacterProfile")}
            onMessagesButtonPress={() => navigation.navigate("Messages")}
          />
        </ImageBackground>
      )}
    />
    

    // <ImageBackground
    //   style={styles.abilityCheckIcon}
    //   resizeMode="cover"
    //   source={require("../assets/abilitycheck.png")}
    // >
    //   <HomeContainer
    //     backFrame={require("../assets/backframe5.png")}
    //     pageTitle="Home"
    //     settingsFrame={require("../assets/settingsframe4.png")}
    //     homeContainerTopNavBarAlignSelf="unset"
    //     homeContainerTopNavBarWidth={327}
    //     homeContainerTopNavBarAlignItems="flex-start"
    //   />
    //   <ContentFrameContainer />
    //   <View style={[styles.output, styles.outputBorder]} />
    //   <View style={[styles.button, styles.outputBorder]}>
    //     <Text style={styles.label}>Ability Check</Text>
    //   </View>
    //   <BottomNavBarContainer
    //     prop1={require("../assets/-icon-home1.png")}
    //     prop2={require("../assets/iconframe.png")}
    //     prop3={require("../assets/iconsaccount-circle-filled-24px2.png")}
    //     prop4={require("../assets/iconsmail-outline.png")}
    //     onHomeButtonPress={() => navigation.navigate("HomeScreen")}
    //     onDiceButtonPress={() => navigation.navigate("DiceRollScreen")}
    //     onProfiieButtonPress={() => navigation.navigate("CharacterProfile")}
    //     onMessagesButtonPress={() => navigation.navigate("Messages")}
    //   />
    // </ImageBackground>
  //   <FlatList
  //   data={DATA}
  //   renderItem={renderItem}
  //   keyExtractor={(item) => item.id}
  // />
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
