import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from "react-native";
import Colors from "../constants/colors";

const CardWithRowBottom = ({
  title,
  titleBottom,
  imageUrl,
  onPress,
  children,
  style,
}) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.card, ...style }}>
      <TouchableComponent onPress={onPress} activeOpacity={0.8}>
        <View>
          <View style={{ ...styles.cardRow, ...styles.cardHeader }}>
            {titleBottom ? (
              <ImageBackground
                source={{ uri: imageUrl }}
                style={styles.bgImageButton}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={1}>
                    {title}
                  </Text>
                </View>
              </ImageBackground>
            ) : (
              <ImageBackground
                source={{ uri: imageUrl }}
                style={styles.bgImage}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={1}>
                    {title}
                  </Text>
                </View>
              </ImageBackground>
            )}
          </View>
          <View style={{ ...styles.cardDetail, ...styles.cardRow, ...style }}>
            {children}
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 250,
    width: "100%",
    backgroundColor: Colors.lightGrey,
    marginVertical: 10,
    overflow: "hidden",
  },
  cardRow: {
    flexDirection: "row",
  },
  cardHeader: {
    height: "80%",
  },
  cardDetail: {
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  bgImageButton: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 15,
  },
  title: {
    fontSize: 20,
    color: Colors.default,
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
});

export default CardWithRowBottom;
