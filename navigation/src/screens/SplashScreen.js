import React from 'react'
import { View, ActivityIndicator } from 'react-native-web';

export default function SplashScreen() {

    constSplashScreen = () =>{ 
        useEffect(() => { 
            const onLoad = async () => { 
                awaitnewPromise(resolve=>setTimeout(resolve,5000));
             }; 
             onLoad(); //Invoco elmétodo asincrón icoonLoad luego de definir su cuerpo. 
             return()=>{ 

              }; 
            },[]);
    }
    
  return (
    <View style={styles.container}> 
        <ActivityIndicator size="large"/> 
    </View>
  )
}
