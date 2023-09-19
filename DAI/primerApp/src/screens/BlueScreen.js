import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Menu from "../components/Menu";
import UsuarioService from "../services/UsuarioService";
import BotonReutilizable from "../components/BotonReutilizable";

export default function BlueScreen({ navigation }) {
 
  let usuarioService = new UsuarioService();

  const VerAlmacenamiento = async () => {
    let contenido = await usuarioService.obtenerCredenciales()
    Alert("Almacenamiento: " + JSON.stringify(contenido));
    console.log("Almacenamiento: " + JSON.stringify(contenido));
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>BLUE SCREEN</Text>
        <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      {/* <Button onPress={VerAlmacenamiento}title="Ver Async Storage" style={styles.button}></Button> */}
        <BotonReutilizable onPress={VerAlmacenamiento} texto="Ver Almacenamiento" style={styles.button}></BotonReutilizable>
        <Menu navigation={navigation}></Menu>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
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
