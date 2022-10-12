import { StyleSheet } from "react-native";
import FAQ from "../components/FAQ";

import { Text, View } from "../components/Themed";

export default function FAQScreen({ route }) {
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.titleText}>FAQs</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.FAQContainer}>
        {route.params.vehicle.faqs.map((faq) => {
          return <FAQ faq={faq} key={faq.id} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
  },
  separator: {
    height: 1,
    marginVertical: 10,
    width: "80%",
  },
  FAQContainer: {
    flex: 1,
  },
});
