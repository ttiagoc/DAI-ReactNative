import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import { useState, useRef } from 'react';
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import carrascal from '../../assets/carrascal.png'
import UsuarioService from '../services/UsuarioService'
import BotonReutilizable from '../components/BotonReutilizable';

export default function BlueScreen({navigation}) {

  const [clave, setClave] = useState('');
  const [nombre, setNombre] = useState('');

  const passwordRef = useRef();
  let usuarioService = new UsuarioService();

  const handleLogin = async() => {
    if (nombre.toLowerCase() !== '' && clave.toLowerCase() !== ''){
      if (await usuarioService.login(nombre.toLowerCase(), clave.toLowerCase())){
        await usuarioService.almacenarCredenciales(nombre, clave);
        navigation.navigate('Home');
      }else{
        Alert.alert('Usuario o contraseña incorrectos');
      }      
    }else{
      Alert.alert('Complete los campos para ingresar');
    }
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={carrascal} style={styles.logo}/>
      <Text style={[styles.textLabel]}>Nombre</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        placeholder="ingresar usuario"
        value={nombre}
        onChangeText={input => setNombre(input)}
        returnKeyType='next'
        onSubmitEditing= {() => {passwordRef.current.focus();}}
        blurOnSubmit={false}
      />
      <Text style={[styles.textLabel]}>Contraseña</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        value={clave}
        placeholder="ingresar contraseña"
        onChangeText={input => setClave(input)}
        ref={passwordRef}
        secureTextEntry
      />
      <BotonReutilizable onPress={handleLogin} texto='INGRESAR' style={styles.button} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 50,
    width: 200,
    height: 300,
    borderRadius:100
  },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#F3E5AB",
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
    fontWeight:'bold'
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: 250,
    height: "auto",
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  textLabel:{
    alignSelf: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 20
  }
});