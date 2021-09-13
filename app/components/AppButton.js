import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import colors from '../config/colors';

function AppButton({name, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
      buttonText: {
        fontWeight: "bold",
        color: colors.black,
        fontSize: 18,
      },
      button: {
        backgroundColor: colors.button,
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginHorizontal: 20,
      },
});
export default AppButton;