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


function CreateAssetHolderScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Dropdown dataArray={assetType} text={'Asset Type'}/>
        <InputBox text={"Asset Holder"} />
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

export default CreateAssetHolderScreen;
