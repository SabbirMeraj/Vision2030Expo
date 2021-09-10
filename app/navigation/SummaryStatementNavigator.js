import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import SummaryStatementScreen from "../screens/SummaryStatementScreen";
import AssetStatementScreen from "../screens/AssetStatementScreen";
import InvestmentStatementScreen from "../screens/InvestmentStatementScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const SummaryStatementNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="Summary Statement" component={SummaryStatementScreen} />
    <Stack.Screen name="Asset Statement" component={AssetStatementScreen} />
    <Stack.Screen
      name="Investment Statement"
      component={InvestmentStatementScreen}
    />
  </Stack.Navigator>
);

export default SummaryStatementNavigator;
