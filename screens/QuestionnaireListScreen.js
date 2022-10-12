import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

import QuestionnaireListItem from "../components/QuestionnaireListItem";

export default function QuestionnaireListScreen({ navigation, route }) {
  let { vehicle } = route.params;
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.titleText}>Questionnaires</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {vehicle.questionnaires.map((questionnaire) => {
        return (
          <QuestionnaireListItem
            key={questionnaire.id}
            navigation={navigation}
            questionnaire={questionnaire}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 30,
  },
});
