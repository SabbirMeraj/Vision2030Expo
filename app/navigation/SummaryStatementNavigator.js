import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SummaryStatementScreen from '../screens/SummaryStatementScreen';
import AssetStatementScreen from '../screens/AssetStatementScreen';
import InvestmentStatementScreen from '../screens/InvestmentStatementScreen';
import colors from '../config/colors';

const Stack = createNativeStackNavigator();


const SummaryStatementNavigator = () => (
    <Stack.Navigator
        screenOptions={{
        headerStyle: {
          backgroundColor: colors.deepBlue,
        },
        headerTintColor: colors.galleryWhite,
       
      }}
    >
        <Stack.Screen name="Summary Statement" component={SummaryStatementScreen} />
        <Stack.Screen name="Asset Statement" component={AssetStatementScreen} />
        <Stack.Screen name="Investment Statement" component={InvestmentStatementScreen} />
    </Stack.Navigator>
);



export default SummaryStatementNavigator;