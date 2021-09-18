import React, { useState } from "react";
import { View, StyleSheet, Text , FlatList} from "react-native";
import Dropdown from "../components/Dropdown";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Footer from "../components/Footer";

const persons = [
  "Sabbir",
  "Siam",
  "Zahir",
  "Sadik",
  "Tanvir",
  "Akhiar",
  "Rafi",
  "Shuvo",
];

const data = [
  {
    id: 1,
    month: "September, 2021",
    installment: 2000,
  },
  {
    id: 2,
    month: "August, 2021",
    installment: 2500,
  },
  {
    id: 3,
    month: "July, 2021",
    installment: 2500,
  },
  {
    id: 4,
    month: "June, 2021",
    installment: 5000,
  },
  {
    id: 5,
    month: "May, 2021",
    installment: 2000,
  },
];

function IndividualStatementScreen(props) {
  const [name, setName] = useState();
  const onSelect = (selectItem) => {
    setName(selectItem);
  };
  return (
    <Screen>
      <View style={styles.container}>
        <Dropdown dataArray={persons} text={"Person"} onSelect={onSelect} />

        {name && (
          <View>
            <View style={styles.basicInfo}>
              <Text style={styles.basicInfoText}>Total Amount: 100000 </Text>
              <Text style={styles.basicInfoText}> Demerits: 0 </Text>
            </View>

            <View style={styles.list}>
              <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <ListItem
                    text={item.month}
                    value={item.installment}
                    textStyle={styles.listTextStyle}
                    style={styles.listItem}
                  />
                )}
              />
            </View>
          </View>
        )}
      </View>
      <Footer style={{ backgroundColor: colors.wildSand }} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  basicInfo: {
    backgroundColor: colors.wildSand,
    marginHorizontal: 20,
    padding: 10,
  },
  basicInfoText: {
    fontSize: 15,
  },
  list: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  listItem: {
    backgroundColor: colors.wildSand,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 20,
    marginVertical: 1,
    justifyContent: "center",
  },
  listTextStyle: {
    fontSize: 15,
    paddingLeft: 10,
  },
});
export default IndividualStatementScreen;
