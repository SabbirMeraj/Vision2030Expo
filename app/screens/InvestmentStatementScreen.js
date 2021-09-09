import React from 'react';
import { View, FlatList, StyleSheet,Text } from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Screen from '../components/Screen';
import TwoSideCard from '../components/TwoSideCard';
import colors from '../config/colors';



const investmentData = [
    {
        title: "Evaly",
        investmentDate: "21-2-2020",
        returnDate: "",
        amount: "70000",
        profit: "0",
        loss: "0"
    },
    {
        title: "Dhamaka",
        investmentDate: "21-12-2020",
        returnDate: "",
        amount: "170000",
        profit: "200000",
        loss: "0"
    },
    {
        title: "Gold",
        investmentDate: "21-12-2020",
        returnDate: "",
        amount: "170000",
        profit: "200000",
        loss: "0"
    },
];

function InvestmentStatementScreen(props) {
    return (
        <Screen>
        <View style={styles.container}>    
          <FlatList
            data={investmentData}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <TwoSideCard
                title={item.title}
                amount={item.amount}
                investmentDate={item.investmentDate}
                returnDate ={item.returnDate}
                profit={item.profit}
                loss={item.loss}
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
        paddingTop: 10,
    }
})

export default InvestmentStatementScreen;