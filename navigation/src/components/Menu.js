import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Button,
} from "react-native";

import tres from '../../assets/tres.jpg'

export default function Menu({ navigation }) {
  return (

    <View style={styles.container}>

      <View style={styles.container2}>
        <Button
          style={styles.button}
          title="1"
          onPress={() => navigation.navigate("BlueScreen")}
        />
      </View>

      <View style={styles.container2}>
        <Button
          style={styles.button}
          title="2"
          onPress={() => navigation.navigate("RedScreen")}
        />
      </View>

      <View style={styles.container2}>
        <Button
          style={styles.button}
          title='3'
          onPress={() => navigation.navigate("GreenScreen")}
        ></Button>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    width:'100%',
    position: 'absolute',
    bottom: 0
  },
  container2:{
    width:'33%',
    height: '37px',

  },
  button:{
    height:'100%'
  }
});
