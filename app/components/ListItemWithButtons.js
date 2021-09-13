import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import colors from '../config/colors';
import Icon from './Icon';

function ListItemWithButtons({text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}> {text} </Text>
            <View style={styles.buttons}>
            <Icon image={require("../assets/Icon/edit.png")} size={25} />
            <Icon image={require("../assets/Icon/trash.png")} size={25} />
           
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
     container:{
         flex: 1,
         backgroundColor: colors.wildSand,
         marginVertical: 5,
         paddingLeft: 10,
         paddingVertical:5,
         borderRadius: 10,
         flexDirection: 'row',
         alignItems: 'center'
     },
     textStyle:{
        flex: 1,
        fontSize: 15
     },
     buttons:{
         flexDirection: 'row',

     }
})
export default ListItemWithButtons;