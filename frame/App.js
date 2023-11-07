// In App.js in a new project

import  React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Otp} from './src/Screens/OtpScreen.js'
import {Signup} from './src/Screens/Signup.js'
import { GoogleAuth } from './src/Screens/GoogleAuth.js';
import { CreateAccount } from './src/Screens/CreateAccount.js';
const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup"
         component={Signup} 
         options={{headerShown:false,
         
         }}

          
         />
        <Stack.Screen name="Otp"
         component={Otp}
         options={{headerShown:false,
         
         }}
          />
          <Stack.Screen name="GoogleAuth"
         component={GoogleAuth}
         options={{headerShown:false,
         
         }}
          />
            <Stack.Screen name="CreateAccount"
         component={CreateAccount}
         options={{headerShown:false,
         
         }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    // {/* <Otp/> */}
    //  {/* <Login/>  */}
    //  <GoogleAuth/>

    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;