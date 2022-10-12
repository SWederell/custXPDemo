import { Picker } from "@react-native-picker/picker";
import { useRef, useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Text, View } from "../Themed";
import Colors from "../../constants/Colors";

import questionStyles from "./questionStyles";

const Styles = StyleSheet.create({});

export function useThemeColor(props, colorName) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export default function MultiChoice({ question }) {
  const [value, setValue] = useState(question.defaultValue);

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <View style={questionStyles.qContainer}>
      <Text style={questionStyles.questionText}>{question.qText}</Text>
      <View
        style={[questionStyles.controlContainer, questionStyles.borderless]}
      >
        <Picker
          Styles={{ fontSize: 20 }}
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
          textAlign={"center"}
        >
          {question.options.map((option) => {
            return (
              <Picker.Item
                color={useThemeColor({}, "text")}
                key={option.text}
                label={option.text}
                value={option.value}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
}
