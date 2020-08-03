import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Well = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: Colors.default,
    padding: 20,
    borderRadius: 10,
  },
});

export default Well;
