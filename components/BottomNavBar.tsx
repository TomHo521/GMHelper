import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

type BottomNavBarType = {
  prop1?: ImageSourcePropType;
  prop2?: ImageSourcePropType;
  prop3?: ImageSourcePropType;
  prop4?: ImageSourcePropType;

  /** Style props */
  propAlignSelf?: string;
  propWidth?: number | string;
  propFlex?: number | string;
  propWidth1?: number | string;
  propFlex1?: number | string;
  propWidth2?: number | string;
  propFlex2?: number | string;
  propWidth3?: number | string;
  propFlex3?: number | string;
  propWidth4?: number | string;

  /** Action props */
  onHomeButtonPress?: () => void;
  onDiceButtonPress?: () => void;
  onProfileButtonPress?: () => void;
  onMessagesButtonPress?: () => void;
};

// const getStyleValue = (key: string, value: string | number | undefined) => {
//   if (value === undefined) return;
//   return { [key]: value === "unset" ? undefined : value };
// };
const BottomNavBar = ({
  prop1,
  prop2,
  prop3,
  prop4,
  // propAlignSelf,
  // propWidth,
  // propFlex,
  // propWidth1,
  // propFlex1,
  // propWidth2,
  // propFlex2,
  // propWidth3,
  // propFlex3,
  // propWidth4,
  onHomeButtonPress,
  onDiceButtonPress,
  onProfileButtonPress,
  onMessagesButtonPress,
}: BottomNavBarType) => {
  // const bottomNavBarStyle = useMemo(() => {
  //   return {
  //     ...getStyleValue("alignSelf", propAlignSelf),
  //     ...getStyleValue("width", propWidth),
  //   };
  // }, [propAlignSelf, propWidth]);

  // const homeButtonStyle = useMemo(() => {
  //   return {
  //     ...getStyleValue("flex", propFlex),
  //     ...getStyleValue("width", propWidth1),
  //   };
  // }, [propFlex, propWidth1]);

  // const diceButtonStyle = useMemo(() => {
  //   return {
  //     ...getStyleValue("flex", propFlex1),
  //     ...getStyleValue("width", propWidth2),
  //   };
  // }, [propFlex1, propWidth2]);

  // const profiieButtonStyle = useMemo(() => {
  //   return {
  //     ...getStyleValue("flex", propFlex2),
  //     ...getStyleValue("width", propWidth3),
  //   };
  // }, [propFlex2, propWidth3]);

  // const messagesButtonStyle = useMemo(() => {
  //   return {
  //     ...getStyleValue("flex", propFlex3),
  //     ...getStyleValue("width", propWidth4),
  //   };
  // }, [propFlex3, propWidth4]);

  return (
    <LinearGradient
      style={[styles.bottomnavbar/*, bottomNavBarStyle*/]}
      locations={[0, 1]}
      colors={["rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 0)"]}
    >
      <TouchableOpacity
        style={[styles.homebutton, styles.iconframeFlexBox/*, homeButtonStyle*/]}
        onPress={onHomeButtonPress}
      >
        <View style={[styles.iconframe, styles.iconframeLayout]}>
          <Image style={styles.iconHome} resizeMode="cover" source={prop1} />
        </View>
        <Text style={[styles.buttonlabel, styles.buttonlabelFlexBox]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.dicebutton, styles.iconframeFlexBox/*, diceButtonStyle*/]}
        onPress={onDiceButtonPress}
      >
        <Image
          style={styles.iconframe1Layout}
          resizeMode="cover"
          source={prop2}
        />
        <Text style={[styles.buttonlabel, styles.buttonlabelFlexBox]}>
          Roll Dice
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.dicebutton, styles.iconframeFlexBox/*, profiieButtonStyle*/]}
        onPress={onProfileButtonPress}
      >
        <View style={[styles.iconframe, styles.iconframeLayout]}>
          <Image
            style={styles.iconframeLayout}
            resizeMode="cover"
            source={prop3}
          />
        </View>
        <Text style={[styles.buttonlabel, styles.buttonlabelFlexBox]}>
          My Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.dicebutton,
          styles.iconframeFlexBox,
         /* messagesButtonStyle,*/
        ]}
        onPress={onMessagesButtonPress}
      >
        <View style={[styles.iconframe, styles.iconframeLayout]}>
          <Image
            style={styles.iconframe1Layout}
            resizeMode="cover"
            source={prop4}
          />
        </View>
        <Text style={[styles.buttonlabel3, styles.buttonlabelFlexBox]}>
          Messages
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconframeFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconframeLayout: {
    height: 40,
    width: 40,
  },
  buttonlabelFlexBox: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.twinkleStarRegular,
    flex: 1,
    alignSelf: "stretch",
  },
  iconHome: {
    width: 35,
    height: 30,
  },
  iconframe: {
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonlabel: {
    fontSize: FontSize.size_xs,
  },
  homebutton: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_5xs,
    height: 93,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    flex: 1,
    alignItems: "center",
  },
  iconframe1Layout: {
    overflow: "hidden",
    height: 40,
    width: 40,
  },
  dicebutton: {
    marginLeft: 4,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_5xs,
    height: 93,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    flex: 1,
    alignItems: "center",
  },
  buttonlabel3: {
    fontSize: FontSize.size_smi,
  },
  bottomnavbar: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_10xs,
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_10xs,
    alignItems: "flex-end",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default BottomNavBar;
