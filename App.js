import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { SafeAreaView, useColorScheme } from "react-native";
import { View } from "./components/Themed";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }} colorScheme={colorScheme}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaView>
      </View>
    );
  }
}
