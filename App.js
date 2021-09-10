// In App.js in a new project

import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import SummaryStatementNavigator from './app/navigation/SummaryStatementNavigator';
import AdminHomeScreen from './app/screens/AdminHomeScreen';
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import AdminHomeNavigator from './app/navigation/AdminHomeNavigator';
import colors from './app/config/colors';
import InputBox from './app/components/InputBox';
import DepositScreen from './app/screens/DepositScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


function App() {
  return (
 
 <MenuProvider>
  <NavigationContainer>
<AdminHomeNavigator/>
</NavigationContainer>
</MenuProvider> 
// {/* <View style={styles.container}>

// </View> */}
// <DepositScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
    backgroundColor: '#ecf0f1',
  },
});

export default App;