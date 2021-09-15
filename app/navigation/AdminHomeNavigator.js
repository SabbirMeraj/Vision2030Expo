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
import DepositScreen from "../screens/DepositScreen";
import AddInvestmentScreen from "../screens/AddInvestmentScreen";
import CreateAssetTypeScreen from "../screens/CreateAssetTypeScreen";
import CreateAssetHolderScreen from "../screens/CreateAssetHolderScreen";
import CreateAssetScreen from "../screens/CreateAssetScreen";
import RulesScreen from "../screens/RulesScreen";
import AddLoanInfoScrren from "../screens/AddLoanInfoScreen";

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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SummaryStatementNavigator"
        component={SummaryStatementNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Deposit" component={DepositScreen} />

      <Stack.Screen name="Add Investment" component={AddInvestmentScreen} />
      <Stack.Screen name="Create Asset Type" component={CreateAssetTypeScreen} />
      <Stack.Screen name="Create Asset Holder" component={CreateAssetHolderScreen} />
      <Stack.Screen name="Create Asset" component={CreateAssetScreen} />
      <Stack.Screen name="Add Loan Info" component={AddLoanInfoScrren} />
      <Stack.Screen name="Rules" component={RulesScreen} />
    </Stack.Navigator>
  </View>
);

export default AdminHomeNavigator;
