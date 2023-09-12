import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import carrascal from "../../assets/carrascal.png";
import BotonReutilizable from "../components/BotonReutilizable";


export default function Login({ navigation }) {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordRef, setPasswordRef] = useRef()

  const HandleLogin = () => {
    if (password.toLowerCase() === "tiago" && name.toLowerCase() === "forni") {
      setName("");
      setPassword("");
      navigation.navigate("Home");
    } else {
      Alert.alert(Mensaje,"USUARIO O CONTRASEÑA INCORRECTA");
    }
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container} enabled>
        <Image source={carrascal} style={styles.image} />
        <View style={{ paddingTop: 50, textAlign: "center" }}>
          <TextInput
            placeholder="nombre"
            style={styles.input}
            onChangeText={setName}
            name="name"
            value={name}
          ></TextInput>
          <TextInput
            placeholder="contraseña"
            style={styles.input}
            onChangeText={setPassword}
            name="password"
            value={password}
          ></TextInput>

          <BotonReutilizable
            texto={"AVANZAR"}
            onPress={HandleLogin}
            style={styles.button}
          ></BotonReutilizable>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#F3E5AB",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: 200,
    height: "auto",
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  image: {
    marginTop: 50,
    width: 200,
    height: 300,
  },
  button: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8DE7E",
    height: 40,
    width: 200,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "black",
  },
});
