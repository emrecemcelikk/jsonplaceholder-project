/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#2C3D4F',
    },
    inputContainer:{
        flex:2,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
    },
    inputArea: {
        backgroundColor:'#34495D',
        width:'80%',
        borderRadius:15,
        margin:10,
    },
    input: {
        fontSize:18,
        color:'#E9E9E9',
        padding:15,
    },
    submitArea: {
        flex:1.5,
        alignItems:'center',
    },
    btn: {
        width:'60%',
        backgroundColor:'#EE7738',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
    },
    btnText: {
        padding:15,
        fontSize:24,
        color:'#34495D',
    },
    footer: {
        alignItems:'center',
        marginTop:20,
    },
    footerText: {
        fontSize:20,
    },
});
