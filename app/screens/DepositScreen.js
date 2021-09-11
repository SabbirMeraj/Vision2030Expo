import React from "react";
import Screen from "../components/Screen";
import InputBox from "../components/InputBox";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import CalendarPicker from "../components/CalendarPicker";
const persons = ["Sabbir", "Siam", "Zahir", "Sadik", "Tanvir", "Akhiar", "Rafi", "Shuvo"]


function DepositScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Dropdown dataArray={persons} text={'Depositor'}/>
        <InputBox text={"Amount"} />
        <Dropdown dataArray={persons} text={'Collector'}/>
        <CalendarPicker />

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
    paddingTop: 20,
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
    marginTop: 10,
    marginHorizontal: 20,
  },
});

export default DepositScreen;
