import {
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/screens/Login";
import GreenScreen from "./src/screens/GreenScreen";
import RedScreen from "./src/screens/RedScreen";
import BlueScreen from "./src/screens/BlueScreen";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ orientation: "portrait", headerShown: false }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="GreenScreen" component={GreenScreen} />
          <Stack.Screen name="RedScreen" component={RedScreen} />
          <Stack.Screen name="BlueScreen" component={BlueScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
 
});
