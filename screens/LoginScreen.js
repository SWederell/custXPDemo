import { useState, useRef } from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View, TextInput } from "../components/Themed";
import { VehicleData } from "../assets/vehicleDetails.js";
import { StackActions } from "@react-navigation/native";

export default function LoginScreen({ navigation }) {
  const [reg, setReg] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    const testReg = reg.trim().toUpperCase();
    setLoading(true);
    if (
      // TODO: DB Reg Check
      (Object.keys(VehicleData).includes(testReg) &&
        pin.trim().toUpperCase() == "123456") ||
      pin.trim().toUpperCase() == "DRIVER"
    ) {
      navigation.dispatch(
        StackActions.replace("Vehicle", {
          vehicle: VehicleData[testReg],
          driver: pin.trim().toUpperCase() == "DRIVER" ? true : false,
        }),
      );
    } else {
      setError("Incorrect Reg and PIN combination");
      setLoading(false);
    }
  };

  const pinRef = useRef();

  return (
    <View style={Styles.container}>
      <Text style={Styles.XPText}>XP</Text>
      <TextInput
        style={Styles.textInput}
        placeholder="Registration"
        onChangeText={(text) => {
          setReg(text);
        }}
        onSubmitEditing={() => {
          pinRef.current.focus();
        }}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      />
      <TextInput
        style={Styles.textInputBottom}
        textContentType="password"
        secureTextEntry={true}
        placeholder="PIN"
        ref={pinRef}
        onChangeText={(pin) => {
          setPin(pin);
        }}
        onSubmitEditing={() => {
          login();
        }}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      />
      <Text style={Styles.errorText}>{error}</Text>
      {loading ? (
        <></>
      ) : (
        <Button
          style={Styles.loginButton}
          title="Login"
          onPress={() => {
            login();
          }}
        />
      )}
    </View>
  );
}

const Styles = StyleSheet.create({
  errorText: {
    width: 180,
    color: "#f00",
    fontSize: 16,
  },
  XPText: {
    fontSize: 60,
    fontWeight: "900",
    color: "white",
    backgroundColor: "#6a3fe2",
    padding: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  textInput: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#777",
    borderWidth: 2,
    width: 150,
    padding: 5,
    fontSize: 20,
  },
  textInputBottom: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#777",
    borderWidth: 2,
    width: 150,
    padding: 5,
    fontSize: 20,
    marginBottom: 20,
  },
  loginButton: {},
});
