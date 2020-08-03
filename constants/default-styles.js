import { StyleSheet, Dimensions } from "react-native";
import Colors from "./colors";

export default StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  bodyText: {
    fontFamily: "open-sans",
  },
  buttonContainer: {
    flexDirection: "row",
    width: 300,
    maxWidth: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: Dimensions.get("window").height > 600 ? 15 : 7,
  },
  button: {
    // width: Dimensions.get("window").width / 4,
    width: "40%",
  },
  text: {
    fontFamily: "open-sans",
  },
  textWhite: {
    fontFamily: "open-sans",
    color: "#ffff",
  },
  dangerBackground: {
    backgroundColor: Colors.danger,
  },
  defaultBackground: {
    backgroundColor: Colors.default,
  },
  successBackground: {
    backgroundColor: Colors.success,
  },
  primaryBackground: {
    backgroundColor: Colors.primary,
  },
  warningBackground: {
    backgroundColor: Colors.warning,
  },
  secondaryBackground: {
    backgroundColor: Colors.secondary,
  },
});
