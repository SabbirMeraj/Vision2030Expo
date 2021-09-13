import React from "react";
import Screen from "../components/Screen";
import InputBox from "../components/InputBox";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import CalendarPicker from "../components/CalendarPicker";
import AppButton from "../components/AppButton";

const assetType = ["Cash", "Prize Bond", "Bank Account", "Sanchaypatro"];
const assetHolder = ["Sabbir", "Siam", "Zahir", "Akhiar"];


function CreateAssetScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Dropdown dataArray={assetType} text={'Asset Type'}/>
        <Dropdown dataArray={assetHolder} text={'Asset Holder'}/>
        <InputBox text={"Amount"} />
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

export default CreateAssetScreen;
