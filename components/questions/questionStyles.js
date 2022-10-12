import { StyleSheet } from "react-native";

export default StyleSheet.create({
  borderless: {
    borderWidth: 0,
  },
  qContainer: {
    width: "90%",
    alignItems: "flex-start",
  },
  questionText: {
    textAlign: "left",
    fontSize: 15,
  },
  controlContainer: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#777",
    borderWidth: 2,
    width: 300,
    padding: 5,
    fontSize: 20,
  },
  controlDirectionRow: {
    flexDirection: "row",
  },
  controlSpaceBetween: {
    justifyContent: "space-between",
  },
  controlSpaceAround: {
    justifyContent: "space-around",
  },
});
