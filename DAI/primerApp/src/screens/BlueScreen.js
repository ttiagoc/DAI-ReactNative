import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Menu from "../components/Menu";
import UsuarioService from "../services/UsuarioService";
import BotonReutilizable from "../components/BotonReutilizable";

export default function BlueScreen({ navigation }) {
 
  let usuarioService = new UsuarioService();

  const VerAlmacenamiento = async () => {
    let contenido = await usuarioService.obtenerCredenciales()

    Alert.alert("Almacenamiento: " , JSON.stringify(contenido));

  };

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>BLUE SCREEN</Text>
        <BotonReutilizable onPress={VerAlmacenamiento} style={styles.button} texto="Ver Almacenamiento" ></BotonReutilizable>
      
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
