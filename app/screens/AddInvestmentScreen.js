import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Screen from "../components/Screen";
import Footer from "../components/Footer";
import colors from "../config/colors";
import InvestmentComponent from "../components/screen_component/InvestmentComponent";

function AddInvestmentScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <InvestmentComponent />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      <Footer style={{ backgroundColor: colors.wildSand }} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: colors.black,
    fontSize: 18,
  },

  button: {
    backgroundColor: colors.button,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginHorizontal: 20,
  },
});

export default AddInvestmentScreen;
