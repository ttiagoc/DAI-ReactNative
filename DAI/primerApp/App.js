import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  TextInput,
  Image,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <>
      <StatusBar style="light-content"></StatusBar>
      
      <SafeAreaView style={styles.container}>
        <Image
          source={
            require("./src/images/welcomeImage.png")
          }
         style={styles.imagen}
        ></Image>
        <Text style={styles.title}>Enter your name</Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => alert(`Hello, ${name}!`)}
            style={styles.button}
          >
            <Text style={styles.text}>Say hello</Text>
          </TouchableOpacity>

          <Pressable
            onPress={() => setName("")}
            style={[styles.button, { backgroundColor: "red" }]}
          >
            <Text style={[styles.text]}>Reset</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {  
    paddingTop: "5%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "silver",
  },
  title: {
    fontSize: 20,
    color: "black",
    margin: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 175,
    height: 40,
    borderRadius: 5,
    backgroundColor: "green",
    color: "white",
    padding: 10,
    alignItems: "center",
    margin: 5,
  },
  buttonContainer: {
    height: 80,
    width: 175,
    flex: 2,
    flexDirection: "column",
    paddingTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  imagen:{
    width: 370,
    height: 200
  }
});
