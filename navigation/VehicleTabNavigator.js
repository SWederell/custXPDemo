import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import FAQScreen from "../screens/FAQScreen";
import VehicleInfoScreen from "../screens/VehicleInfoScreen";
import Pdfview from "../screens/Pdfview";
import Guide from "../screens/GuideScreen";
import QuestionnaireListScreen from "../screens/QuestionnaireListScreen";
import QuestionnaireScreen from "../screens/QuestionnaireScreen";

const BottomTab = createBottomTabNavigator();

export default function VehicleTabNavigator({ vehicle, driver }) {
  const getQuestionnaireBadgeNumber = () => {
    return vehicle.questionnaires.length;
  };

  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="vehicleInfoScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Info"
        component={VehicleInfoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="information-circle"
              color={color}
              group="Ionicons"
            />
          ),
        }}
        initialParams={{ vehicle: vehicle }}
      />
      <BottomTab.Screen
        name="FAQs"
        component={FAQNavigator}
        initialParams={{ vehicle: vehicle }}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="questioncircle"
              color={color}
              group="AntDesign"
              size="25"
            />
          ),
        }}
      />
      {driver ? (
        <></>
      ) : (
        <BottomTab.Screen
          name="Questionnaires"
          component={QuestionnaireNavigator}
          initialParams={{ vehicle: vehicle }}
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                name="form"
                color={color}
                group="AntDesign"
                size="25"
              />
            ),
            tabBarBadge: `${getQuestionnaireBadgeNumber()}`,
          }}
        />
      )}
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  if (props.group == "Ionicons") {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  } else if (props.group == "AntDesign") {
    return <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />;
  }
}

const VehicleInfoStack = createStackNavigator();

function VehicleInfoNavigator({ route }) {
  return (
    <VehicleInfoStack.Navigator>
      <VehicleInfoStack.Screen
        name="VehicleInfoScreen"
        component={VehicleInfoScreen}
        options={{ headerShown: false }}
        initialParams={{ vehicle: route.params.vehicle }}
        headerTitle="Vehicle Info"
      />
      <VehicleInfoStack.Screen
        name="PDFView"
        component={Pdfview}
        options={{ headerShown: false }}
        headerTitle="Vehicle Info"
      />
      <VehicleInfoStack.Screen
        name="Guide"
        component={Guide}
        options={{ headerShown: false }}
        headerTitle="Vehicle Info"
      />
    </VehicleInfoStack.Navigator>
  );
}

const FAQStack = createStackNavigator();

function FAQNavigator({ route }) {
  return (
    <FAQStack.Navigator>
      <FAQStack.Screen
        name="faqScreen"
        component={FAQScreen}
        options={{ headerShown: false }}
        initialParams={{ vehicle: route.params.vehicle }}
      />
    </FAQStack.Navigator>
  );
}
const QuestionnaireStack = createStackNavigator();

function QuestionnaireNavigator({ route }) {
  return (
    <QuestionnaireStack.Navigator>
      <QuestionnaireStack.Screen
        name="QuestionnaireListScreen"
        component={QuestionnaireListScreen}
        options={{ headerShown: false }}
        initialParams={{ vehicle: route.params.vehicle }}
      />
      <QuestionnaireStack.Screen
        name="QuestionnaireScreen"
        component={QuestionnaireScreen}
        options={{ headerShown: false }}
        initialParams={{ vehicle: route.params.vehicle }}
      />
    </QuestionnaireStack.Navigator>
  );
}
