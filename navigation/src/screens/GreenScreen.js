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
export default function GreenScreen({navigation}) {
    return (
        <>
          <View style={styles.container}>
              <Text style={{fontSize:40}}>GREEN SCREEN</Text>

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
        backgroundColor: "green",
        alignItems: "center",
        justifyContent:'center',
      },
     
    });
    