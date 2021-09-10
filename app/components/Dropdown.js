import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";

function Dropdown({ dataArray, text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}> {text}: </Text>
      <SelectDropdown
        data={dataArray}
        // defaultValueByIndex={1}
        // defaultValue={'Egypt'}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={"Select " + text}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdownField}
        buttonTextStyle={styles.dropdownFieldText}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdownList}
        rowStyle={styles.dropdownListRow}
        rowTextStyle={styles.dropdownListRowText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: colors.wildSand,
  },
  label: {
    fontSize: 15,
    paddingLeft: 2,
    marginBottom: 5,
    height: 25,
    color: "black",
    //      backgroundColor: "green"
  },
  dropdownField: {
    width: "100%",
    borderRadius: 8,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
  },
  dropdownFieldText: { textAlign: "left" ,  fontSize: 15,},
  dropdownList: { backgroundColor: "#EFEFEF", marginTop: -25, height: 250 },
  dropdownListRow: {
    //  backgroundColor: "#EFEFEF",
    //  borderBottomColor: "#C5C5C5",
  },
  dropdownListRowText: { color: "#444", textAlign: "left" , fontSize: 18},
});
export default Dropdown;
