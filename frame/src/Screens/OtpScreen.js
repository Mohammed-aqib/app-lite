import React ,{useRef,useState}from 'react';
import { Alert, TouchableOpacity ,Image, StyleSheet, Text, View, TextInput,KeyboardAvoidingView} from 'react-native';
import { FontFamily, Color, FontSize } from "../styles/global";
import { styles } from '../styles/OtpStyles';
import { useNavigation } from '@react-navigation/native';



export const Otp = () => {

  const navigation = useNavigation();

    const et1=useRef();
    const et2=useRef();
    const et3=useRef();
    const et4=useRef();
    const[f1,setf1]=useState('');
    const[f2,setf2]=useState('');
    const[f3,setf3]=useState('');
    const[f4,setf4]=useState('');

    const handlenumberChange=()=>{
        navigation.replace('Signup');
    }

const otpvalidate=()=>{
    let otp='1234'
   let  enteredotp=f1+f2+f3+f4
    if(enteredotp==otp){
        Alert.alert("OTP Matched")
        navigation.replace('GoogleAuth');
    }else{
        Alert.alert("Invalid OTP Enterd")
    }
};
  return (
    <View style={styles.otpcontainer}>
    <View style={styles.innercontainer} >
    <Image
    style={styles.logo}
    source={require('../../Images/logo.png')}
    />
    <View style={styles.txtgrp}>
    <Text style={styles.Primarytext}>OTP Verification</Text>
    <Text style={styles.Secondarytext}>Enter the OTP sent to +91 949*****</Text>
    </View>
    <View style={styles.inputviewgrp}>
    <TextInput 
    ref={et1} 
    style={[styles.inputview,{backgroundColor:f1.length>=1?'#ebe8e8':'#F5F5F5'}]}
    keyboardType='number-pad'
    maxLength={1}
    value={f1}
    onChangeText={txt=>{
        setf1(txt);
        if(txt.length>=1){
        et2.current.focus()
        }else if(txt.length<1){
            et1.current.focus();
        }
    }}

    />
    <TextInput 
    ref={et2} 
    style={[styles.inputview,{backgroundColor:f2.length>=1?'#ebe8e8':'#F5F5F5'}]}
    keyboardType='number-pad'
    maxLength={1}
    value={f2}
    onChangeText={txt=>{
        setf2(txt)
        if(txt.length>=1){
        et3.current.focus()
        }else if(txt.length<1){
            et1.current.focus();
        }
    }}

    />
    <TextInput 
    ref={et3} 
    style={[styles.inputview,{backgroundColor:f3.length>=1?'#ebe8e8':'#F5F5F5'}]}
    keyboardType='number-pad'
    maxLength={1}
    value={f3}
    onChangeText={txt=>{
        setf3(txt)
        if(txt.length>=1){
        et4.current.focus()
        }else if(txt.length<1){
            et2.current.focus();
        }
    }}

    />
    <TextInput 
    ref={et4} 
    style={[styles.inputview,{backgroundColor:f4.length>=1?'#ebe8e8':'#F5F5F5'}]}
    keyboardType='number-pad'
    maxLength={1}
    value={f4}
    onChangeText={txt=>{
        setf4(txt)
        if(txt.length>=1){
        et4.current.focus()
        }else if(txt.length<1){
            et3.current.focus();
        }
    }}
    
    />
    {/* <TextInput style={styles.inputview}/> */}
    {/* <TextInput style={styles.inputview}/> */}

    </View>
    <Text style={styles.otpdidnt}>
        Didn't receive any OTP?
    </Text>
    <TouchableOpacity style={styles.resendotpbtn}>
        <Text style={styles.resenotp}>Resend OTP</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={otpvalidate}
    disabled={
        f1!==''&&
         f2!==''&&
          f3!==''&& 
          f4!=='' 
          ?false
          :true
    }
    style={[styles.continue,{
        backgroundColor:f1!==''
    && f2!==''&& f3!==''&& f4!==''? 
    '#FF9300' 
    :
    '#FF9300'
    }]}>
    <Text style={styles.continuetxt}>
        Continue
    </Text>

    </TouchableOpacity>
    <TouchableOpacity onPress={handlenumberChange}>
    <Text style={styles.chngno}>Change the number</Text></TouchableOpacity>
    </View>

    <Image
    style={styles.car}
    source={require('../../Images/car.gif')}
    />
    </View>
  );
}

