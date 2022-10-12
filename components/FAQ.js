import { useCallback, useState } from "react";
import { Pressable } from "react-native";
import { Text, View } from "./Themed";

export default function FAQ({ faq }) {
  const [visible, setVisibility] = useState(false);

  const toggleVisibility = useCallback(
    () => setVisibility((prev) => !prev),
    [],
  );

  return (
    <View style={Styles.container}>
      <Pressable onPress={() => toggleVisibility()}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#ccc",
          }}
        >
          <Text style={Styles.qText}>{faq.question}</Text>
          <Text style={Styles.plus}>+</Text>
        </View>
        {visible && (
          <View style={Styles.aTextContainer}>
            <Text style={Styles.aText}> {faq.answer}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

const Styles = {
  container: {
    height: "auto",
    minHeight: 35,
    backgroundColor: "#ccc",
    width: "90%",
    paddingVertical: 5,
    marginBottom: 2,
    padding: 5,
  },
  qText: { width: "95%", fontSize: 20, paddingRight: 5 },
  plus: { width: "5%", fontSize: 25, fontWeight: "bold" },
  aTextContainer: { padding: 5, marginTop: 5 },
  aText: { fontSize: 18 },
};
