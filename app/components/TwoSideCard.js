import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";
import ListItem from "./ListItem";
import Screen from "./Screen";

function TwoSideCard({title, investmentDate, returnDate, amount, profit,loss }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {title} </Text>
          <Text style={styles.date}> Invested: {investmentDate}</Text>
          <Text style={styles.date}> Return: {returnDate}</Text>
        </View>
        <View style={styles.detailContainer}>
          <ListItem
           text={"Amount"}
            value={amount}
            textStyle={styles.listTextStyle}
            style={styles.listItem}
          />

<ListItem text={"Profit"}
            value={profit}
            textStyle={styles.listTextStyle}
            style={styles.listItem}
          />

<ListItem text={"Loss"}
            value={loss}
            textStyle={styles.listTextStyle}
            style={styles.listItem}
          />

          
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: "row",

   
  },
  titleContainer: {
    width: "45%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#abdbe3",
  },
  title: {},
  date: {
    fontSize: 11,
  },
  detailContainer: {
    width: "55%",
    marginLeft: 2,

  },

  listItem: {
    backgroundColor: "#abdbe3",
    paddingVertical: 5,

    marginVertical: 1,
    justifyContent: "center",
  },
  listTextStyle: {
    fontSize: 12,
    paddingLeft: 10,
  },
});
export default TwoSideCard;
