import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import colors from "../../constants/colors";

const CustomButton = ({ onPress, style, title, icon, alignIconRight }) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.8} onPress={onPress}>
        <View style={{ ...styles.button, ...style }}>
          {alignIconRight ? (
            <View style={{ ...styles.buttonChildren, ...style }}>
              <Text style={{ ...styles.buttonText, ...style }}>{title}</Text>
              {icon ? (
                <Text style={styles.buttonIcon}>{icon}</Text>
              ) : (
                <Text></Text>
              )}
            </View>
          ) : (
            <View style={{ ...styles.buttonChildren, ...style }}>
              {icon ? (
                <Text style={styles.buttonIcon}>{icon}</Text>
              ) : (
                <Text></Text>
              )}
              <Text style={{ ...styles.buttonText, ...style }}>{title} </Text>
            </View>
          )}
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonChildren: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    color: colors.white,
    fontFamily: "open-sans",
  },

  buttonIcon: {
    paddingHorizontal: 10,
  },
});

export default CustomButton;
