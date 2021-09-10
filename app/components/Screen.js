import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';


function Screen({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

export default Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
    