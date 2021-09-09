import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors';

function Header({text}) {
    return (
        <View style={styles.container}>
              <Text style={styles.text}> {text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop: -20,
        paddingTop: 40,
        height: 100,
        backgroundColor: colors.deepBlue,
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 20
    },
    text:{
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        //color: "#063970",
        color: colors.galleryWhite
    }
})
export default Header;