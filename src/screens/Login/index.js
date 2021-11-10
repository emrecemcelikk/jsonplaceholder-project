/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
// import styles
import { styles } from './styles';

import { Header } from '../../components/header';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:[],
            username:'',
        };
    }
    // getting user data from api with axios
    getData=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            this.setState({userData:res.data});
        })
        .catch((err)=>console.log(err));
        console.log(this.state.userData);
    }
    componentDidMount() {
        this.getData();
    }
    // this compare the input and the api data
    handleSubmit=()=>{
        let apiData = this.state.userData;
        apiData.forEach(item => {
            if (item.username === this.state.username){
                this.props.navigation.navigate('Home');
            }
        });

    }
    render() {
        return (
            <View style={styles.container}>
                <Header header={'Login'}/>
                <View style={styles.inputContainer}>
                    <View style={styles.inputArea}>
                        <TextInput placeholder="Username" onChangeText={(text)=>this.setState({username:text})} style={styles.input}/>
                    </View>
                </View>
                <View style={styles.submitArea}>
                    <TouchableOpacity style={styles.btn} onPress={()=>this.handleSubmit()}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
