import { View } from "react-native";
import { Text } from "./Themed";

export default function GuideItem({ navigation, guide }) {
  return (
    <View
      style={Styles.container}
      onClick={() => {
        navigation.navigate("Guide", { guide: guide });
      }}
    >
      <Text style={Styles.titleText}>{guide.title}</Text>
    </View>
  );
}

const Styles = {
  container: {
    height: "auto",
    borderWidth: 2,
    padding: 5,
    marginBottom: 5,
  },
  titleText: {
    fontSize: 20,
  },
};
