import React from "react";

import { Text, Image, StyleSheet, View } from "react-native";
import { ExpandableListView } from "react-native-expandable-listview";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Footer from "../components/Footer";

const content = [
  {
    id: "1",
    categoryName: "1. Duration",
    subCategory: [
      {
        id: "1.1", // required, of inner object
        name: "1.1 The duration of the plan is 10 years (2020-2030)",
      },
      {
        id: "1.2",
        name: "1.2 If necessary the duration will be extended",
      },
    ],
  },
  {
    id: "2",
    categoryName: "2. Member",
    subCategory: [
      {
        id: "2.1",
        name: "2.1 The founding 7 members by names “Syed Sakib Ahmed”, “ Md. Zahirul Haque”, “Sabbir Hussain Meraj”, “ Salman Enayet Chowdhury”, “ Tanvir Ahmed”, “ Abrar Akhiarr”, “Sadik Nahian” is considered as “Core members",
      },
      {
        id: "2.2",
        name: "2.2 Adding any new member will require “Yes” votes from all “Core members” from a “Yes” , “No” voting system. Which will exempt rule 3.3.",
      },
      {
        id: "2.3",
        name: "2.3 Any changes in these rules (from 1 to last) will require “Yes” votes from all “Core members” from a “Yes” , “No” voting system. Which will exempt rule 3.3.",
      },
    ],
  },
  {
    id: "3",
    categoryName: "3. Voting System",
    subCategory: [
      {
        id: "3.1",
        name: "3.1 There will be a discussion where everyone will get an opportunity to explain his/her side, view, and analysis",
      },
      {
        id: "3.2",
        name: "3.2 Voting will be in anonymous method",
      },
      {
        id: "3.3",
        name: "3.3 It will be a majority based result. It means the option which gets the majority vote will get selected.",
      },
    ],
  }, 
  {
    id: "4",
    categoryName: "4. Window",
    subCategory: [
      {
        id: "4.1",
        name: "4.1 It will be a 3 month window",
      },
      {
        id: "4.2",
        name: "4.2 Everyone has to deposit a fixed amount of money.",
      },
      {
        id: "4.3",
        name: "4.3 That fixed amount will be selected for that window through a majority vote.",
      },
    ],
  }, 
  {
    id: "5",
    categoryName: "5. Penalty",
    subCategory: [
      {
        id: "5.1",
        name: "5.1 Everyone will get 1 chance in a year to withhold the money. But he/she has to deposit it in the next window.",
      }
    ],
  },
  {
    id: "6",
    categoryName: "6. Loan",
    subCategory: [
      {
        id: "6.1",
        name: "6.1 If someone wishes to take out a loan, he/she has to tell all the members at least 2 months prior. There will be an anonymous voting. If he/she gets a majority vote, then he/she will be able to take loan",
      },
      {
        id: "6.2",
        name: "6.2 Before taking loan he/she has to specify a deadline before which he/she will repay it. If fails to repay it in time then he/she will get a penalty as per as 5.4 - 5.7.",
      }
    ],
  }
];

function RulesScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ExpandableListView
          data={content} // required
          //   renderInnerItemSeparator={true}
          itemContainerStyle={styles.listItemContainer}
          innerItemContainerStyle={styles.listInnerItemContainer}
        />
      </View>
      <Footer style={{ backgroundColor: colors.wildSand }} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItemContainer: {
    backgroundColor: colors.wildSand,
    marginVertical: 2,
    borderRadius: 10,
  },
  listInnerItemContainer: {
    backgroundColor: colors.lightGrey,
    marginLeft: 10,
    marginVertical: 2,
    paddingVertical: 10,
  },
});
export default RulesScreen;
