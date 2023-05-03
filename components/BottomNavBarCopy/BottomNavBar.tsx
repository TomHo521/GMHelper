// import * as React from "react";
// import {
//   StyleProp,
//   ViewStyle,
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   Pressable,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from "@react-navigation/native";
// import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

// type BottomNavBarType = {
//   style?: StyleProp<ViewStyle>;
// };

// const BottomNavBar = ({ style }: BottomNavBarType) => {
//   const navigation = useNavigation();

//   return (
//     <LinearGradient
//       style={[styles.bottomnavbar, style]}
//       locations={[0, 1]}
//       colors={["rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 0)"]}
//     >
//       <Pressable
//         style={styles.homebutton}
//         onPress={() => navigation.navigate("HomeScreen")}
//       >
//         <Image
//           style={styles.iconHome}
//           resizeMode="cover"
//           source={require("../assets/-icon-home6.png")}
//         />
//         <Text style={[styles.home, styles.homeTypo]}>Home</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.dicebutton, styles.dicebuttonBorder]}
//         onPress={() => navigation.navigate("DiceRollScreen")}
//       >
//         <Image
//           style={styles.iconFrame}
//           resizeMode="cover"
//           source={require("../assets/iconframe8.png")}
//         />
//         <Text style={[styles.rollDice, styles.homeTypo]}>Roll Dice</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.profiiebutton, styles.dicebuttonBorder]}
//         onPress={() => navigation.navigate("CharacterProfile")}
//       >
//         <Image
//           style={styles.iconFrame1}
//           resizeMode="cover"
//           source={require("../assets/iconframe81.png")}
//         />
//         <Text style={[styles.myProfile, styles.homeTypo]}>My Profile</Text>
//       </Pressable>
//       <Pressable
//         style={[styles.messagesbutton, styles.dicebuttonBorder]}
//         onPress={() => navigation.navigate("Messages")}
//       >
//         <Image
//           style={styles.iconFrame}
//           resizeMode="cover"
//           source={require("../assets/iconframe9.png")}
//         />
//         <Text style={[styles.messages, styles.homeTypo]}>Messages</Text>
//       </Pressable>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   homeTypo: {
//     height: 17,
//     textAlign: "center",
//     color: Color.white,
//     fontFamily: FontFamily.twinkleStarRegular,
//   },
//   dicebuttonBorder: {
//     marginLeft: 4,
//     alignItems: "center",
//     paddingBottom: 15,
//     paddingTop: 15,
//     borderWidth: 1,
//     borderColor: "#fff",
//     borderStyle: "solid",
//     borderRadius: Border.br_xl,
//     flex: 1,
//     alignSelf: "stretch",
//   },
//   iconHome: {
//     width: 38,
//     height: 33,
//   },
//   home: {
//     marginTop: 6,
//     width: 56,
//     height: 17,
//     textAlign: "center",
//     color: Color.white,
//     fontFamily: FontFamily.twinkleStarRegular,
//     fontSize: FontSize.size_xs,
//   },
//   homebutton: {
//     paddingLeft: 12,
//     paddingRight: 12,
//     justifyContent: "flex-end",
//     alignItems: "center",
//     paddingBottom: 15,
//     paddingTop: 15,
//     borderWidth: 1,
//     borderColor: "#fff",
//     borderStyle: "solid",
//     borderRadius: Border.br_xl,
//     flex: 1,
//     alignSelf: "stretch",
//   },
//   iconFrame: {
//     width: 57,
//     height: 44,
//     overflow: "hidden",
//   },
//   rollDice: {
//     width: 56,
//     height: 17,
//     textAlign: "center",
//     color: Color.white,
//     fontFamily: FontFamily.twinkleStarRegular,
//     fontSize: FontSize.size_xs,
//   },
//   dicebutton: {
//     paddingLeft: 11,
//     paddingRight: 11,
//     justifyContent: "flex-end",
//   },
//   iconFrame1: {
//     width: 41,
//     height: 39,
//     overflow: "hidden",
//   },
//   myProfile: {
//     width: 64,
//     marginTop: 4,
//     textAlign: "center",
//     color: Color.white,
//     fontFamily: FontFamily.twinkleStarRegular,
//     height: 17,
//     fontSize: FontSize.size_xs,
//   },
//   profiiebutton: {
//     paddingLeft: Padding.p_5xs,
//     paddingRight: 8,
//     justifyContent: "center",
//   },
//   messages: {
//     fontSize: FontSize.size_smi,
//     width: 61,
//     textAlign: "center",
//     color: Color.white,
//     fontFamily: FontFamily.twinkleStarRegular,
//     height: 17,
//   },
//   messagesbutton: {
//     paddingLeft: 9,
//     paddingRight: 9,
//     justifyContent: "flex-end",
//   },
//   bottomnavbar: {
//     flexDirection: "row",
//     padding: Padding.p_10xs,
//     alignItems: "flex-end",
//     backgroundColor: "transparent",
//     justifyContent: "center",
//     alignSelf: "stretch",
//   },
// });

//export default BottomNavBar;
