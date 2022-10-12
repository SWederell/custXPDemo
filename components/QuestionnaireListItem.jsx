import { Pressable } from "react-native";
import { Text, View } from "./Themed";

export default function QuestionnaireListItem({ navigation, questionnaire }) {
  return (
    <View style={Styles.container}>
      <Pressable
        style={{ flex: 1, justifyContent: "center" }}
        onPress={() => {
          navigation.navigate("QuestionnaireScreen", {
            questionnaire: questionnaire,
          });
        }}
      >
        <Text style={Styles.titleText}>{questionnaire.title}</Text>
      </Pressable>
    </View>
  );
}

const Styles = {
  container: {
    width: "80%",
    height: 80,
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#6666aa",
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    color: "#ffffff",
  },
};
