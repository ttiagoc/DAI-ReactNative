import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UsuarioService() {

  setLogin = async (key, object) => {
    try {
      const jsonValue = JSON.stringify(object);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // error
    }
  };

  getObject = async (key) => {
    let returnValue = null;
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        returnValue = ((jsonValue != null) ? JSON.parse(jsonValue) : defaultValue);
    } catch (e) { // error  
    }  
      return returnValue; 
    }

    removeKey = async (key) => {
      let returnValue = false;
      try {
          await AsyncStorage.removeItem(key);
          returnValue = true;
      } catch (e) { // error  
      }  
      return returnValue; 
    }


}
