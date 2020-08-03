import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import CardWithRowBottom from "./elements/CardWithRowBottom";
import { BodyText, H1 } from "./tags/HtmlTags";
import Well from "./elements/Well";
import Card from "./elements/Card";
import colors from "./constants/colors";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const image =
    "https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <CardWithRowBottom title="Texting Card" imageUrl={image}>
            <BodyText>Texting Test</BodyText>
            <BodyText>Texting Test</BodyText>
            <BodyText>Texting Test</BodyText>
          </CardWithRowBottom>

          <CardWithRowBottom title="Texting Card" imageUrl={image} titleBottom>
            <BodyText>Texting Test</BodyText>
            <BodyText>Texting Test</BodyText>
            <BodyText>Texting Test</BodyText>
          </CardWithRowBottom>

          <Card imageUrl={image} imageHeight={200} style={styles.card}>
            <H1>Barel Musenga</H1>
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </BodyText>
          </Card>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  imageStyle: {
    width: "100%",
    height: 200,
  },
  card: {
    backgroundColor: colors.lightGray,
  },
});
