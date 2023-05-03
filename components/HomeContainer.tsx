import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

type HomeContainerType = {
  backFrame?: ImageSourcePropType;
  pageTitle?: string;
  settingsFrame?: ImageSourcePropType;

  /** Style props */
  homeContainerTopNavBarAlignSelf?: string;
  homeContainerTopNavBarWidth?: number | string;
  homeContainerTopNavBarAlignItems?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HomeContainer = ({
  backFrame,
  pageTitle,
  settingsFrame,
  homeContainerTopNavBarAlignSelf,
  homeContainerTopNavBarWidth,
  homeContainerTopNavBarAlignItems,
}: HomeContainerType) => {
  const topNavBarStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", homeContainerTopNavBarAlignSelf),
      ...getStyleValue("width", homeContainerTopNavBarWidth),
      ...getStyleValue("alignItems", homeContainerTopNavBarAlignItems),
    };
  }, [
    homeContainerTopNavBarAlignSelf,
    homeContainerTopNavBarWidth,
    homeContainerTopNavBarAlignItems,
  ]);

  return (
    <View style={[styles.topnavbar, topNavBarStyle]}>
      <Image
        style={styles.backframeIcon}
        resizeMode="cover"
        source={backFrame}
      />
      <View style={styles.titleframe}>
        <Text style={styles.title}>{pageTitle}</Text>
      </View>
      <Image
        style={styles.backframeIcon}
        resizeMode="cover"
        source={settingsFrame}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backframeIcon: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  title: {
    alignSelf: "stretch",
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.twinkleStarRegular,
    color: Color.white,
    textAlign: "center",
  },
  titleframe: {
    width: 210,
    paddingHorizontal: Padding.p_6xs,
    justifyContent: "flex-end",
    overflow: "hidden",
    paddingVertical: 0,
  },
  topnavbar: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gray_100,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 306,
    height: 43,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 0,
    marginTop: 30,
  },
});

export default HomeContainer;
