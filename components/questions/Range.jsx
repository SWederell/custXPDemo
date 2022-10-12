import Slider from "@react-native-community/slider";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";

import questionStyles from "./questionStyles";

export default function Range({ question }) {
  const [value, setValue] = useState(question.defaultValue);

  return (
    <View style={questionStyles.qContainer}>
      <Text style={questionStyles.questionText}>{question.qText}</Text>
      <View
        style={[
          questionStyles.controlContainer,
          questionStyles.borderless,
          Styles.controlContainer,
        ]}
      >
        <Slider
          style={Styles.control}
          onValueChange={setValue}
          minimumValue={question.rangeMin}
          maximumValue={question.rangeMax}
          step={question.step}
          value={value}
        />
        <Text style={Styles.valueText}>{value}</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  controlContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  control: {
    width: "90%",
  },
  valueText: { width: "10%", textAlign: "center", fontSize: 15 },
});
