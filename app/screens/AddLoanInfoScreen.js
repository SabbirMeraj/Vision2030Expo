import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Screen from "../components/Screen";
import Footer from "../components/Footer";
import colors from "../config/colors";
import LoanComponent from "../components/screen_component/LoanComponent";
import AppButton from "../components/AppButton";

function AddLoanInfoScrren(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <LoanComponent />

        <AppButton name={"Save"}/>
      </View>
      <Footer style={{ backgroundColor: colors.wildSand }} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  }
});

export default AddLoanInfoScrren;
