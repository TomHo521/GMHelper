import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

type NameFrameContainerType = {
  nameText?: string;
  emailText?: string;

  /** Style props */
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NameFrameContainer = ({
  nameText,
  emailText,
  propMarginTop,
}: NameFrameContainerType) => {
  const nameFrameStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.nameframe, nameFrameStyle]}>
      <View style={styles.namefield}>
        <Text style={[styles.zacharyDragonheart, styles.textTypo]}>
          {nameText}
        </Text>
      </View>
      <Text style={[styles.text, styles.textTypo]}>{emailText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.twinkleStarRegular,
    top: "50%",
    position: "absolute",
  },
  zacharyDragonheart: {
    marginTop: -15.33,
    width: "97.07%",
    left: "1.54%",
    fontSize: FontSize.size_base,
    color: Color.silver,
    height: 28,
  },
  namefield: {
    marginTop: -7.5,
    width: "96.62%",
    right: "1.9%",
    left: "1.49%",
    backgroundColor: Color.black,
    borderStyle: "solid",
    borderColor: "#ffebb8",
    borderWidth: 0.9,
    height: 35,
    overflow: "hidden",
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -26.5,
    width: "63.77%",
    left: "0%",
    fontSize: FontSize.size_sm,
    color: Color.white,
    height: 19,
  },
  nameframe: {
    width: 233,
    height: 59,
  },
});

export default NameFrameContainer;
