/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#2C3D4F',
    },
    header: {
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    headerText: {
        fontSize:50,
        color:'#EE7738',
        fontWeight:'700',
    },
    posts: {
        flex:5,
    },
    subHeader: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    logout: {
        position:'absolute',
        justifyContent:'center',
        left:120,
    },
    logoutText: {
        fontSize:20,
        color:'#fff',
    },
});
