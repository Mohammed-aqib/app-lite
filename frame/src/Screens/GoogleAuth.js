import {TouchableOpacity, Image,View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { Color,FontFamily,FontSize } from '../styles/global'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';


 
// SHA-256: 0D:F4:83:6E:69:5A:AC:BB:94:6E:C0:42:9C:FA:D9:45:02:DE:C3:51:37:93:1D:9C:06:AD:F3:9E:8D:A4:F3:A2
// SHA1: 2E:CA:0B:D5:8C:F2:81:0A:E4:83:33:9D:F4:B0:BF:7C:96:C5:92:83

export const GoogleAuth = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState();
    GoogleSignin.configure({
        webClientId: '463794641443-kuts535odmddqmnp4vrfqm08pqbp43ma.apps.googleusercontent.com',
      });
      async function onGoogleButtonPress(){
try {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        console.log("===>"+{idToken});
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);

 } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log(statusCodes.SIGN_IN_CANCELLED)
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("=>"+statusCodes.IN_PROGRESS)

              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log("=>"+statusCodes.PLAY_SERVICES_NOT_AVAILABLE)

              // play services not available or outdated
            } else {
                console.log("=>"+error.message)
              // some other error happened
            }
          }



      }
      async function GoogleSignOut(){
        try {
            await GoogleSignin.signOut();
            setUser(null); // Remember to remove the user from your app's state as well
          } catch (error) {
            console.error(error);
          }
      };


  return (
    <View style={styles.parentcontainer}>
<View style={styles.topcontainer} >
<Image
    style={styles.logo}
    source={require('../../Images/logo.png')}
    />

      <Text style={styles.primarytext}>Continue with Google</Text>
      </View>
      <Image
    style={styles.car}
    source={require('../../Images/car.gif')}
    />
    <TouchableOpacity
    onPress={
        ()=>onGoogleButtonPress()
        .then(()=>{
            console.log('User signed in using Google ')
            navigation.replace('CreateAccount')
        
        })
    }
    style={styles.button}
    >
        <Image
    style={styles.googleicon}
    source={require('../../Images/googleicon.png')}
    />
    <Text style={styles.cnwgoogle}>Continue with Google</Text>
    </TouchableOpacity>
    <View style={styles.txtgrp}>
    <Text style={styles.outlinetext}>By Signing up, You agree to the <Text style={styles.inlineText}>Terms of Service </Text>and 
    <Text style={styles.inlineText}>  PrivacyPolicy</Text>, Including <Text style={styles.inlineText}> Cookies.</Text>
    </Text>
    </View>
    </View>

  )
}

 const styles = StyleSheet.create({
parentcontainer:{
    flex:1,
    backgroundColor:Color.colorWhite,
    alignItems:"center",
    justifyContent:"center"
},
topcontainer:{
    top:90,
    marginLeft:50,
},

logo:{
    width:119,
    height:42,
    bottom:130,
    right:90,
    
    },
primarytext:{
    color:Color.colorBlack,
    fontSize:FontSize.size_base,
    right:90,
    bottom:110,
},
car:{
    width:286,
    height:286,
    bottom:10,
},
button:{
    bottom:30,
flexDirection:'row',
width:300,
height:55,
justifyContent:'center',
alignItems:'center',
borderColor:Color.colorPrimary,
borderWidth:1,
borderRadius:30,


},
googleicon:{
    width:18.6,
    height:18.6,
    right:10,
},
cnwgoogle:{
    color:Color.colorBlack,
    fontWeight:'500',
},
inlineText:{
    color:Color.colorPrimary,
    fontWeight:'500',

    
},
outlinetext:{
color:Color.colorBlack,
fontSize:FontSize.size_mini,
},
txtgrp:{
    width:280,
    flexDirection:'row',
    justifyContent:'space-between',
bottom:0,
},




})