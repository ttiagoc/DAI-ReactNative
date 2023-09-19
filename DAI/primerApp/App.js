import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import GreenScreen from "./src/screens/GreenScreen";
import RedScreen from "./src/screens/RedScreen";
import BlueScreen from "./src/screens/BlueScreen";
import Home from "./src/screens/Home";
import SplashScreen from "./src/screens/SplashScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
     
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{ orientation: "portrait", headerShown: false }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="GreenScreen" component={GreenScreen} />
            <Stack.Screen name="RedScreen" component={RedScreen} />
            <Stack.Screen name="BlueScreen" component={BlueScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      
    </>
  );
}
