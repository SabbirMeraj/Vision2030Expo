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

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
// {/* <NavigationContainer>
// <SummaryStatementNavigator/>
// </NavigationContainer> */}
<MenuProvider>
  <NavigationContainer>
<AdminHomeNavigator/>
</NavigationContainer>
</MenuProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',
  },
});

export default App;