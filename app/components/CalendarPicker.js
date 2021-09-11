import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import colors from "../config/colors";

function CalendarPicker() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Select Date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    
    const month =  currentDate.getMonth()+1;
    setText(currentDate.getDate() + "-" + month + "-" + currentDate.getFullYear());
  };


  const showDatepicker = () => {
    setShow(true);
  };



  return (
    <View style={styles.container}>
      <Text style={styles.label}> Date: </Text>
      <View style={styles.field}>
        <Text onPress={showDatepicker}> {text}</Text>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
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
  field: {
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 5,
    borderColor: "black",

    padding: 10,
  },
});
export default CalendarPicker;
