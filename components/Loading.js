import { ActivityIndicator } from "react-native";
import { Text, View } from "./Themed";

export default function Loading({ style, media }) {
  return (
    <View
      style={[
        style,
        {
          flexDirection: "row",
          height: 180,
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <Text style={{ marginRight: 10 }}> Loading {media} ...</Text>
      <ActivityIndicator />
    </View>
  );
}
