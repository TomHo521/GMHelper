import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

type SavingThrowContainerType = {
  diceActionText?: ImageSourcePropType;
  diceActionImageUrl?: string;
  attackActionText?: ImageSourcePropType;
  savingThrowActionText?: string;

  /** Style props */
  propMarginTop?: number | string;
  propTop?: number | string;
  propMarginTop1?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UtilityRowContainer = ({
  diceActionText,
  diceActionImageUrl,
  attackActionText,
  savingThrowActionText,
  propMarginTop,
  propTop,
  propMarginTop1,
}: SavingThrowContainerType) => {
  const rowContainerStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const buttonULabelStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("marginTop", propMarginTop1),
    };
  }, [propTop, propMarginTop1]);

  const navigation = useNavigation();

  return (
    <View style={[styles.rowcontainer, rowContainerStyle]}>
      <TouchableOpacity
        style={styles.utilitybuttonLayout}
        onPress={() => navigation.navigate("AbilityCheck")}
      >
        <Image
          style={styles.iconframe}
          resizeMode="cover"
          source={attackActionText}
        />
        <Text style={styles.buttonulabelTypo}>{savingThrowActionText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.utilitybutton1, styles.utilitybuttonLayout]}
        onPress={() => navigation.navigate("RollAttack")}
      >
        <Image
          style={styles.iconframe}
          resizeMode="cover"
          source={diceActionText}
        />
        <Text style={[styles.buttonulabelTypo, buttonULabelStyle]}>
          {diceActionImageUrl}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  utilitybuttonLayout: {
    overflow: "hidden",
    height: 143,
    width: 130,
    borderWidth: 2,
    borderColor: "#763900",
    borderStyle: "solid",
    backgroundColor: Color.moccasin,
    borderRadius: Border.br_11xl,
  },
  iconframe: {
    top: 20,
    left: 10,
    borderRadius: Border.br_xl,
    width: 110,
    height: 80,
    position: "absolute",
    overflow: "hidden",
  },
  buttonulabelTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 35,
    width: 100,
    textAlign: "center",
    color: Color.saddlebrown,
    fontFamily: FontFamily.twinkleStarRegular,
    fontSize: FontSize.size_base,
    left: 16,
    top: 108,
    position: "absolute",
  },
  utilitybutton1: {
    marginLeft: 10,
  },
  rowcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UtilityRowContainer;
