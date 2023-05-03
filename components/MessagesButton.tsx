import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

type MessagesButtonType = {
  style?: StyleProp<ViewStyle>;
};

const MessagesButton = ({ style }: MessagesButtonType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.messagesbutton, style]}
      onPress={() => navigation.navigate("Messages")}
    >
      <Image
        style={styles.iconFrame}
        resizeMode="cover"
        source={require("../assets/iconframe61.png")}
      />
      <Text style={styles.messages}>Messages</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconFrame: {
    width: 57,
    height: 44,
    overflow: "hidden",
  },
  messages: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.twinkleStarRegular,
    color: Color.white,
    textAlign: "center",
    width: 61,
    height: 17,
  },
  messagesbutton: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    paddingLeft: 9,
    paddingTop: 15,
    paddingRight: 9,
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default MessagesButton;
