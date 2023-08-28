import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    Button
  } from "react-native";
import Menu from '../components/Menu';


export default function Home ({navigation}) {
  return (
    <>

        <View style={styles.container}>

            <Text style={styles.text}>HOME</Text>
            <Menu navigation={navigation}/>
        </View>

    
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      backgroundColor: "grey",
      alignItems: "center",
      justifyContent:'center'
    },
    text:{
        fontSize:30,
        padding:30
        
    }
   
  });
  
