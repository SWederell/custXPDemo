import { TextInput, StyleSheet } from "react-native";
import { Text, View } from "../Themed";

import questionStyles from "./questionStyles";

export default function TextQuestion({ question }) {
  return (
    <View style={questionStyles.qContainer}>
      <Text style={questionStyles.questionText}>{question.qText}</Text>
      <View style={questionStyles.controlContainer}>
        <TextInput style={Styles.control} />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  control: {},
});
