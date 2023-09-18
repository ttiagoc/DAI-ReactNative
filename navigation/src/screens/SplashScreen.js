import { Text, View, ActivityIndicator, SafeAreaView, Image, StyleSheet} from 'react-native'
import React, { Component, useEffect } from 'react'
import carrascal from '../../assets/carrascal.png'
import UsuarioService from '../services/UsuarioService'

export default function SplashScreen({navigation}) {

  let usuarioService = new UsuarioService();

  const verificarInicioSesion = async() => {
   
      navigation.navigate("Login");
   
  }

  useEffect(() => {
    setTimeout(verificarInicioSesion, 3000);
  }, [])

  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={carrascal} style={styles.logo}/>
      <ActivityIndicator size="large"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '75%',
    height: '40%',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});