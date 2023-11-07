import { StyleSheet,View, Text } from 'react-native'
import React from 'react'

export const  CreateAccount=()=> {
  return (
    <View styel={styles.parentcontainer}>
      <Text style={styles.primarytext}>CreateAccount</Text>
    </View>
  )
}
styles=StyleSheet.create({
parentcontainer:{
    flex:1,
 backgroundColor:'#f5fcff',
 alignItems:'center',
 justifyContent:'center',
},
primarytext:{
 fontSize:20,
 color:'black',
},





})