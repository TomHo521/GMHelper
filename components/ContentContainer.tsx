import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding } from "../GlobalStyles";

const ContentContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contentframe}>
      <Pressable
        style={styles.myProfileBorder}
        onPress={() => navigation.navigate("UtilitiesScreen")}
      >
        <Text style={styles.utilities}>Utilities</Text>
      </Pressable>
      <Pressable
        style={[styles.myProfile, styles.myProfileBorder]}
        onPress={() => navigation.navigate("CharacterProfile")}
      >
        <Text style={styles.utilities}>My Profile</Text>
      </Pressable>
      <Pressable
        style={[styles.myProfile, styles.myProfileBorder]}
        onPress={() => navigation.navigate("MyParty")}
      >
        <Text style={styles.utilities}>My Party</Text>
      </Pressable>
      <Pressable
        style={[styles.myProfile, styles.myProfileBorder]}
        onPress={() => navigation.navigate("CombatScreen")}
      >
        <Text style={styles.utilities}>Combat</Text>
      </Pressable>
      <Pressable
        style={[styles.myProfile, styles.myProfileBorder]}
        onPress={() => navigation.navigate("Guildboard")}
      >
        <Text style={styles.utilities}>Guildboard</Text>
      </Pressable>
      <Pressable
        style={[styles.myProfile, styles.myProfileBorder]}
        onPress={() => navigation.navigate("Transact")}
      >
        <Text style={styles.utilities}>Transact</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  myProfileBorder: {
    justifyContent: "center",
    paddingVertical: 0,
    paddingHorizontal: 53,
    overflow: "hidden",
    height: 40,
    backgroundColor: Color.black,
    borderRadius: 22,
    alignSelf: "stretch",
    alignItems: "center",
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
  },
  utilities: {
    flex: 1,
    fontSize: 28,
    fontFamily: FontFamily.twinkleStarRegular,
    color: Color.white,
    textAlign: "center",
    alignSelf: "stretch",
  },
  myProfile: {
    marginTop: 24,
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
    width: 310,
    paddingHorizontal: Padding.p_6xl,
    paddingTop: Padding.p_69xl,
    paddingBottom: 87,
    justifyContent: "flex-end",
    alignItems: "center",
    borderWidth: 0.9,
    borderColor: "#ffebb8",
    borderStyle: "solid",
  },
});

export default ContentContainer;
