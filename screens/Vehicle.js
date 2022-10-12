import { View } from "../components/Themed";
import Header from "../components/Header";
import VehicleTabNavigator from "../navigation/VehicleTabNavigator";

export default function Vehicle({ route }) {
  const { vehicle, driver } = route.params;
  return (
    <View style={Styles.container}>
      <Header make={vehicle.make} model={vehicle.model} />
      <VehicleTabNavigator vehicle={vehicle} driver={driver} />
    </View>
  );
}

const Styles = {
  container: { flex: 1 },
};
