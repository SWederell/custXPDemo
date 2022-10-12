import { useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { View } from "../Themed";

import questionStyles from "./questionStyles";

export default function BooleanQuestion({ question }) {
  const [positive, setPositive] = useState(false);
  const [negative, setNegative] = useState(false);

  // console.log(question);
  return (
    <View style={questionStyles.qContainer}>
      <Text style={questionStyles.questionText}>{question.qText}</Text>
      <View
        style={[
          questionStyles.controlContainer,
          questionStyles.borderless,
          questionStyles.controlDirectionRow,
          questionStyles.controlSpaceAround,
        ]}
      >
        <BooleanButton button={question.options[0]} />
        <BooleanButton button={question.options[1]} />
      </View>
    </View>
  );
}

function BooleanButton({ button }) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#333" : "#ccc",
        },
        Styles.buttonStyle,
      ]}
      onPress={() => {}}
    >
      <Text style={Styles.buttonText}>{button}</Text>
    </Pressable>
  );
}

const Styles = StyleSheet.create({
  control: {},
  buttonText: { fontSize: 20 },
  buttonStyle: {
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
