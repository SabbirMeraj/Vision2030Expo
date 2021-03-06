import React from "react";
import Screen from "../components/Screen";
import InputBox from "../components/InputBox";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import CalendarPicker from "../components/CalendarPicker";
import AppButton from "../components/AppButton";
const persons = ["Sabbir", "Siam", "Zahir", "Sadik", "Tanvir", "Akhiar", "Rafi", "Shuvo"]


function DepositScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Dropdown dataArray={persons} text={'Depositor'}/>
        <InputBox text={"Amount"} />
        <Dropdown dataArray={persons} text={'Collector'}/>
        <CalendarPicker label={"Date"}/>
        <AppButton name={"Save"}/>
      </View>
      <Footer style={{ backgroundColor: colors.wildSand }} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  }
});

export default DepositScreen;
