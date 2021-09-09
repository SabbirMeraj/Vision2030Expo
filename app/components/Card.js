import React from 'react';
import { View, StyleSheet ,Text, FlatList} from 'react-native';
import ListItem from './ListItem';
import colors from '../config/colors';

function Card({title, totalAmount, distributionData}) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {title}</Text> 
            </View>

            <View style={styles.amountContainer}>
                <Text style={styles.amount}> {"\u09F3" + totalAmount}</Text> 
            </View>
            <View style={styles.detailContainer}>
            <FlatList
                data={distributionData}
                keyExtractor={(item) => item.name }
                renderItem ={({item}) => 
                    <ListItem
                    text={item.name}
                    value={"\u09F3" + item.amount}
                    style={styles.listItem}
                    textStyle={styles.listTextStyle}
                    />
                }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 40,
        marginVertical: 10,
       
    },
    titleContainer:{
        padding: 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#3186ad",
        borderColor: "grey",
        borderWidth: 0.25

    },
    title:{
        fontSize: 15,
    },

    amountContainer:{
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 2,
        backgroundColor: "#76b5c5",
        borderColor: "grey",
        borderWidth: 0.25
    },
    amount:{
        fontSize: 14,
    },
  listItem: {
    backgroundColor: "#abdbe3",
    paddingVertical: 5,
    paddingLeft: 60,
    paddingRight: 45,
    marginVertical: 1,
    justifyContent: 'center',
    borderColor: "grey",
    borderWidth: 0.25
    
  },
  listTextStyle:{
      fontSize: 12
  }
});



export default Card;