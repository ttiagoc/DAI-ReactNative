import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    ToastAndroid
  } from "react-native";
import Menu from '../components/Menu';
import UsuarioService from "../services/UsuarioService";
import BotonReutilizable from '../components/BotonReutilizable';
import MessageCostants from '../constants/MessageConstants';

export default function GreenScreen({navigation}) {

  let usuarioService = new UsuarioService()

  const EliminarAsyncStorage = async () => {

    await usuarioService.eliminarCredenciales()
    //Alert.alert("AVISO:", "SE HA ELIMINADO EL STORAGE")
    ToastAndroid.show(MessageCostants.MSG_ASYNC_SE_HAN_ELIMINADO_LOS_DATOS, ToastAndroid.SHORT);

  }


    return (
        <>
          <View style={styles.container}>
              <Text style={{fontSize:40}}>GREEN SCREEN</Text>

      <BotonReutilizable onPress={EliminarAsyncStorage} style={styles.button} texto={"Eliminar Almacenamiento"}></BotonReutilizable>
             
      <Menu navigation={navigation}></Menu>
          </View>
        </>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent:'center',
      
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
    