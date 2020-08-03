import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Well from "./Well";
import colors from "../constants/colors";

const Card = ({ children, imageUrl, onPress, imageHeight, style }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.container, ...style }}>
      <TouchableComponent onPress={onPress} activeOpacity={0.8}>
        <View>
          <Image
            source={{ uri: imageUrl }}
            style={{ ...styles.imageStyle, height: imageHeight }}
          />
          <Well style={{ ...styles.well, ...style }}>{children}</Well>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  imageStyle: {
    height: 150,
    backgroundColor: colors.lightGray,
  },
  well: {
    borderRadius: 0,
  },
});

export default Card;
