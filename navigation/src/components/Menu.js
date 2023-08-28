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

export default function Menu({navigation}) {
  return (
    <View style={styles.navigator}>

<Button style={[styles.button, {padding:20}]}
  title="Go to Blue Screen"
  onPress={() =>
    navigation.navigate('BlueScreen')
    
  }
  
/>
<Button style={[styles.button, {padding:20}]}
  title="Go to Red Screen"
  onPress={() =>
    navigation.navigate('RedScreen')
  }
/>
<Button style={[styles.button, {padding:20}]}
  title="Go to Green Screen"
  onPress={() =>
    navigation.navigate('GreenScreen')
  }
/>
</View>

  )
}const styles = StyleSheet.create({
    
navigator:{
    flex:3,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'
  },
  button:{
    width:20,
    padding:20,
    margin:20
    
  }

})

