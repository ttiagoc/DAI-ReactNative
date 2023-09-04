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
import BotonReutilizable from '../components/BotonReutilizable';

import Menu from '../components/Menu';


export default function Home ({navigation}) {

    const HandleLogOut = () =>{
      navigation.navigate("Login")
    }


  return (
    <>
        <StatusBar></StatusBar>
        <View style={styles.buttonContainer}>
        <BotonReutilizable texto={"Cerrar Sesión"} style={styles.logOutButton} onPress={HandleLogOut}></BotonReutilizable>
        </View>        
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
        
    },
    logOutButton: {
      width: 100,
      height:50,
      backgroundColor:'red',
      justifyContent:'center',
      borderRadius:10,
      margin:10,


    },
    buttonContainer:{
      backgroundColor:'grey',
    }
   
  });
  
