import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    Button,
    SafeAreaView,
    StatusBar
  } from "react-native";

import Menu from '../components/Menu';


export default function Home ({navigation}) {
  return (
    <>
        <StatusBar></StatusBar>
        <SafeAreaView style={styles.container}>

            <Text style={styles.text}>HOME</Text>
            <Menu navigation={navigation}/>
        </SafeAreaView>

    
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "grey",
      alignItems: "center",
      justifyContent:'center',
      height: '100%'
    },
    text:{
        fontSize:30,
        padding:30
        
    }
   
  });
  
