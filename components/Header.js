import { Image } from "react-native";
import { Text, View } from "./Themed";

export default function Header({ make, model }) {
  const makeLogo = () => {
    return (
      <Image
        style={Styles.brandLogo}
        source={require("../assets/images/Nissan_logo.png")}
        resizeMode="contain"
      />
    );
  };
  return (
    <View style={Styles.container}>
      {makeLogo()}
      <Text
        style={Styles.modelText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {model}
      </Text>
    </View>
  );
}

const Styles = {
  container: {
    height: "auto",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  brandLogo: {
    width: 80,
    height: 80,
  },
  modelText: {
    fontSize: 30,
    marginLeft: 20,
  },
};
