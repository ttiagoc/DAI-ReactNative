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
export default function BlueScreen({navigation}) {
    return (
        <>
          <View style={styles.container}>
              <Text style={{fontSize:40}}>BLUE SCREEN</Text>
              <Button
      title="Go Home"
      onPress={() =>
        navigation.navigate('Login')
      }
    />
    
          </View>
        </>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent:'center',
      },
     
    });
    