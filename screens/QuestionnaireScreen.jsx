import { Button } from "react-native";
import Question from "../components/Question";
import { Text, View } from "../components/Themed";

export default function QuestionnaireScreen({ route }) {
  const { questionnaire } = route.params;
  return (
    <View style={Styles.container}>
      <View
        style={Styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={Styles.titleText}>{questionnaire.title}</Text>
      <View
        style={Styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {questionnaire.questions.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
      <Button title="Submit Feedback" />
    </View>
  );
}

const Styles = {
  container: {
    flex: 1,
    alignItems: "center",
  },
  separator: {
    height: 1,
    marginVertical: 10,
    width: "80%",
  },
  titleText: {
    fontSize: 25,
  },
};
