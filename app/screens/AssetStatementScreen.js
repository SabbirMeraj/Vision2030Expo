import React from "react";
import { FlatList, StyleSheet, View,Text } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import Header from "../components/Header";
import Footer from "../components/Footer";

const assetdata = [
  {
    title: "Cash",
    totalAmount: 90000,
    distribution: [
      {
        name: "Sabbir",
        amount: 20000,
      },
      {
        name: "Siam",
        amount: 30000,
      },
      {
        name: "Zahir",
        amount: 40000,
      },
    ],
  },
  {
    title: "Bond",
    totalAmount: 40000,
    distribution: [
      {
        name: "Sabbir",
        amount: 10000,
      },
      {
        name: "Siam",
        amount: 10000,
      },
      {
        name: "Zahir",
        amount: 40000,
      },
      {
        name: "Akhiar",
        amount: 10000,
      },
    ],
  },

  {
    title: "Bank Account",
    totalAmount: 40000,
    distribution: [
      {
        name: "City Bank",
        amount: 10000,
      },
        {
          name: "Eastern Bank",
          amount: 10000,
        }
         
    ],
  },
];

function AssetStatementScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        
        <FlatList
          data={assetdata}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              totalAmount={item.totalAmount}
              distributionData={item.distribution}
            />
          )}
        />
      </View>

      <Footer style={{backgroundColor: colors.wildSand}}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: colors.white
    }
})
export default AssetStatementScreen;
