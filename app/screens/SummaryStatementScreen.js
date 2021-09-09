import React from "react";
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableOpacity } from "react-native";

import ListItem from "../components/ListItem";
//import PieChart from "../components/PieChart";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";

const pieData = [
  {
    id: 1,
    y: 100000,
    name: "Asset",
    src: require("../assets/Icon/asset2.png"),
    target: "Asset Statement"
  },
  {
    id: 2,
    y: 50000,
    name: "Loan",
    src: require("../assets/Icon/loan2.png"),
    target: ""
  },
  {
    id: 3,
    y: 100000,
    name: "Investment",
    src: require("../assets/Icon/investment2.png"),
    target: "Investment Statement"
  },
  {
    id: 4,
    y: 2000,
    name: "Expenditure",
    src: require("../assets/Icon/expenditure2.png"),
    target: ""
  },
];

const graphicColor = ["#db7896", "#ff9a9f", "#b15b8c", "#532c73"];

function SummaryStatementScreen({navigation}) {
  return (
    <Screen>
      {/* <TouchableHighlight>
        <Text> Click Me </Text>
      </TouchableHighlight>
      <PieChart pieData={pieData} sliceColor={graphicColor} /> */}

      <View style={styles.informationContainer}>
        <FlatList
          data={pieData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.target)} >
            <ListItem
              imageSrc={item.src}
              imageSize={50}
              text={item.name}
              value={"\u09F3" + item.y}
              style={styles.listItem}
            />
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.settingsIcon}>
          <Icon image={require("../assets/Icon/settings.png")} size={40} />
        </View>
        <View style={styles.notificationIcon}>
          <Icon image={require("../assets/Icon/notification.png")} size={40} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  informationContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  listItem: {
    backgroundColor: colors.wildSand,
    margin: 5,
    borderRadius: 25,
  },
  footer: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    backgroundColor: colors.wildSand
  },
  settingsIcon: {
    flex: 1,
    marginHorizontal: 40,
  },
  notificationIcon: {
    flex: 1,
    marginHorizontal: 40,
  },
});

export default SummaryStatementScreen;
