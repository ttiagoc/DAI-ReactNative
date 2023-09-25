import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button
  } from "react-native";
import Menu from '../components/Menu';
import BotonReutilizable from '../components/BotonReutilizable';
export default function RedScreen({navigation}) {

  const NavigateToLogin = () => {

    navigation.navigate("Login")


  }


    return (
        <>
          <View style={styles.container}>
              <Text style={{fontSize:40}}>RED SCREEN</Text>
              <BotonReutilizable onPress={NavigateToLogin} style={styles.button} texto={"IR A LOGIN"}></BotonReutilizable>
            
    <Menu navigation={navigation}></Menu>
          </View>
        </>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent:'center',
      },
      button: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "brown",
        height: 50,
        width: 200,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "black",
        fontWeight: "bold",
      },
     
    });
    