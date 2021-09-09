import React from 'react';

import color from "../config/colors";

import {StyleSheet, Text, View, YellowBox } from "react-native";
function Label({text, style}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.textStyle,style]} numberOfLines={1}> {text}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
  container:{
      borderRadius: 10,
      backgroundColor: color.galleryWhite,
      width: 100, 
      justifyContent: 'center',
      alignItems: 'center',
  },
  textStyle:{
      paddingVertical:2,
      paddingHorizontal:10
  },
 
});
export default Label;