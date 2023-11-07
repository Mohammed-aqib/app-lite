// In App.js in a new project

import * as React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Otp} from './src/frames/OtpInputSection.js'
import {Login} from './src/frames/login.js'

// const Stack = createNativeStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    <View style={styles.container}>
    <Otp/>
     {/* <Login/>  */}

    </View>
    // </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Change this to your desired background color
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;