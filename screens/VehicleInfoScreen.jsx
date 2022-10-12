import { Button, StyleSheet, Linking, Alert } from "react-native";

import { Text, View } from "../components/Themed";

export default function VehicleInfoScreen({ navigation, route }) {
  const assistAlert = () => {
    Alert.alert(
      "Emergency Assistance",
      "Are you sure you want to call emergency assistance?",
      [
        { text: "Cancel", onPress: () => {}, style: "cancel" },
        {
          text: "Yes",
          onPress: () => {
            Linking.openURL(`tel:${route.params.vehicle.assist}`);
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        title="Call Emergency Assist"
        onPress={() => {
          assistAlert();
        }}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.titleText}>User Guides</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.guideContainer}>
        {route.params.vehicle.guides.map((guide) => {
          return (
            <Button
              key={guide.id}
              title={guide.title}
              onPress={() => {
                navigation.navigate("Guide", { guide: guide });
              }}
            />
          );
        })}
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        title="Spec Sheet"
        onPress={() => {
          navigation.navigate("PDFView", {
            source: route.params.vehicle.specSheetURL,
          });
        }}
      />
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
  guideContainer: {
    flex: 1,
  },
});
