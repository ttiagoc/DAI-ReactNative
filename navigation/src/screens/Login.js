import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Button
} from "react-native";
import carrascal from "../../assets/carrascal.png";

export default function Login({navigation
}) {
  return (
    <>
      <View style={styles.container}>
        <Image source={carrascal} style={styles.image} />
        <View style={{ paddingTop: 50, textAlign: "center" }}>
          <TextInput placeholder="nombre" style={styles.input}></TextInput>
          <TextInput placeholder="contraseña" style={styles.input}></TextInput>
          <Pressable style={styles.button}>
            <Text>AVANZAR</Text>
          </Pressable>
        </View>

        <View style={styles.navigator}>

        <Button style={{width:30}}
      title="Go to Blue Screen"
      onPress={() =>
        navigation.navigate('BlueScreen')
      }
    />
    <Button style={{width:40}}
      title="Go to Red Screen"
      onPress={() =>
        navigation.navigate('RedScreen')
      }
    />
    <Button style={{width:40}}
      title="Go to Green Screen"
      onPress={() =>
        navigation.navigate('GreenScreen')
      }
    />
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
    backgroundColor: "red",
    height: 40,
    width: 200,
    borderRadius: 5,
  },
  navigator:{
    flex:3,
    alignItems:'center',
    flexDirection:'row'
  }
});
