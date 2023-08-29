import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Button,
  BackHandler,
  Alert
} from "react-native";
import carrascal from "../../assets/carrascal.png";
import Menu from "../components/Menu";

export default function Login({navigation
}) {

    const [password, setPassword] = useState("");

    const HandleLogin = () =>{

      if (password.toLowerCase() !== "tiago") {
        navigation.navigate('Home')
      }else{
        alert('CONTRASEÑA INCORRECTA')
      }

    }


  return (
    <>
      <View style={styles.container}>
        <Image source={carrascal} style={styles.image} />
        <View style={{ paddingTop: 50, textAlign: "center" }}>
          <TextInput placeholder="nombre" style={styles.input}></TextInput>
          <TextInput placeholder="contraseña" style={styles.input} onChangeText={setPassword} name="password"></TextInput>
          <Pressable style={styles.button} onPress={HandleLogin}>
            <Text>AVANZAR</Text>
          </Pressable>
        </View>

   

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: 200,
    height: "auto",
    padding: 10,
    margin: 5,
  },
  image: {
    marginTop: 50,
    width: 200,
    height: 300,
  },
  button: {
    marginTop: 20,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor: "#f1f1f1",
    height: 40,
    width: 200,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'black'
  },
 
});
