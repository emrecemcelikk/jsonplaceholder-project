/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
// import post component
import { Post } from '../../components/post';
import { Header } from '../../components/header';
// import styles
import { styles } from './styles';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            postData:[],
        };
    }
    componentDidMount(){
        //geting posts data from api with axios
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            this.setState({postData:res.data});
            console.log(this.state.postData);
        }).catch((err)=>console.log(err));
    }
    handlelogout=()=>{
        this.props.navigation.navigate('Login');
    }
    render() {
        const {postData} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header header={'Home'} />
                    <View style={styles.subHeader}>
                        <Text>Posts</Text>
                        <TouchableOpacity onPress={()=>this.handlelogout()} style={styles.logout}>
                            <Text style={styles.logoutText}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.posts}>
                    <FlatList data={postData} renderItem={
                        ({item})=>
                        <Post item={item}/>
                    } />
                </View>
            </View>
        );
    }
}
