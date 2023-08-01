import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const img = {uri: "https://i.pinimg.com/1200x/da/ce/c6/dacec6094cd308590c1adc21130ad473.jpg"}

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img}  style={{width: '100%', height: '100%', justifyContent:'center'}}  resizeMode='cover' ><Text style={styles.text}>Hola</Text></ImageBackground>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize:38,
    fontWeight:'bold',
    lineHeight:60,
    textAlign:'center',
    backgroundColor:'black',
    opacity: 0.5
  }
});
