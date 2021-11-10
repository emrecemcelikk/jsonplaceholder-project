/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Header = (props)=>{
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.header}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex:1.5,
        alignItems:'center',
        justifyContent:'center',
    },
    headerText: {
        fontSize:50,
        color:'#EE7738',
        fontWeight:'700',
    },
});
