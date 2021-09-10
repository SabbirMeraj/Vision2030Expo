import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { View } from "react-native";
import SummaryStatementScreen from "../screens/SummaryStatementScreen";
import colors from "../config/colors";
import AdminHomeScreen from "../screens/AdminHomeScreen";
import SummaryStatementNavigator from "./SummaryStatementNavigator";

const Stack = createStackNavigator();

const AdminHomeNavigator = () => (
  <View style={{ flex: 1, backgroundColor: colors.deepBlue }}>
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // stackAnimation: "none"
      }}
    >
      <Stack.Screen
        name="Admin Home"
        component={AdminHomeScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="SummaryStatementNavigator"
        component={SummaryStatementNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </View>
);

export default AdminHomeNavigator;
