/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Post = (props)=> {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{props.item.title}</Text>
            </View>
            <View>
                <Text style={styles.body}>{props.item.body}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:'90%',
        backgroundColor:'#34495D',
        margin:10,
        padding:20,
        borderRadius:15,
    },
    title: {
        fontSize:16,
        fontWeight:'500',
        color:'#fff',
    },
});
