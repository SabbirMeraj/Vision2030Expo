import React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import colors from '../config/colors';

function InputBox({text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}> {text}: </Text>
            <TextInput  
            style={styles.inputText}
			selectionColor={'black'}
            placeholder={'Enter ' + text}
            placeholderTextColor="#000"
			/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        height: 90, 
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 20,
       backgroundColor: colors.wildSand
    },
    label:{
        fontSize: 15,
        paddingLeft: 2,
        marginBottom: 5,
        height: 25, 
        color: 'black',
  //      backgroundColor: "green"
    },
    inputText:{
        height: 40, 
        backgroundColor: colors.white ,
        borderRadius:5,
        borderColor: 'black',
        
        padding: 10
    }

});
export default InputBox;