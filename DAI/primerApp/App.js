import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  TextInput,
  Button,
  Image,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <>
      <StatusBar style="dark"></StatusBar>

      <SafeAreaView style={styles.container}>
        <Image
          source={{
            uri: "https://images.squarespace-cdn.com/content/v1/61e5b4d4e869ca1e5b042038/8dfece0c-1dd9-42b0-b832-54f9bdfb9f0b/Yellow+Only+Logo-01.png",
          }}
          width={"100%"}
          height={200}
        ></Image>
        <Text style={styles.title}>Enter your name</Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => alert(`Hello, ${name}!`)}
            style={styles.button}
          >
            <Text style={styles.text}>Say hello</Text>
          </Pressable>

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
    height: "90%",
    paddingTop: "10%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'silver'
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
});
