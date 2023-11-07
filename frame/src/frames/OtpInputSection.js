import React ,{useRef,useState}from 'react';
import { Alert, TouchableOpacity ,Image, StyleSheet, Text, View, TextInput,KeyboardAvoidingView} from 'react-native';
import { FontFamily, Color, FontSize } from "../styles/global";
import { Colors } from 'react-native/Libraries/NewAppScreen';




export const Otp = () => {
    const et1=useRef();
    const et2=useRef();
    const et3=useRef();
    const et4=useRef();
    const[f1,setf1]=useState('');
    const[f2,setf2]=useState('');
    const[f3,setf3]=useState('');
    const[f4,setf4]=useState('');

const otpvalidate=()=>{
    let otp='1234'
   let  enteredotp=f1+f2+f3+f4
    if(enteredotp==otp){
        Alert.alert("OTP Matched")
    }else{
        Alert.alert("Invalid OTP Enterd")
    }
};
  return (
    <View style={styles.otpconatiner}>
    <View style={styles.innercontainer} >
    <></>
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
    <TouchableOpacity>
    <Text style={styles.chngno}>Change the number</Text></TouchableOpacity>
    </View>

    <Image
    style={styles.car}
    source={require('../../Images/car.gif')}
    />
    </View>
  );
}

export const styles = StyleSheet.create({
    otpconatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    logo:{
        width:119,
        height:42,
        bottom:130,
        right:90,
        
        },
        txtgrp:{
            bottom:90,
            alignItems:'center',
        },
        Primarytext:{
            fontSize:FontSize.size_base,
            color:Color.colorBlack,

        },
        Secondarytext:{
            fontSize:FontSize.size_mini,
            color:Color.colorDimgray,

        },
        inputviewgrp:{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            right:28,
            bottom:50,
        },
        inputview:{
            width:50,
            height:50,
            // borderWidth:0.4,
            backgroundColor:Color.Inputback,
            borderRadius:10,
            borderColor:Color.Inputborder,
            elevation: 4, // Adjust the elevation value as needed
            marginLeft:25,
            textAlign:'center',
            fontSize:18,
            fontWeight:'600',
            color:Color.colorDimgray,

        },
        continue:{
            width:300,
            height:55,
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
            elevation:4,
        },
        continuetxt:{
            color:Color.colorWhite,
            fontSize:FontSize.size_sm,
            fontWeight:"600",
        },
        otpdidnt:{
            color:Color.colorGray,
            right:50,
            bottom:20,
        },
        resendotpbtn:{
            left:70,
            width:80,
            height:15,
            bottom:40,


        },
        resenotp:{
            color:Color.colorPrimary
        },
        chngno:{
            textDecorationLine:'underline',
            color:Color.colorPrimary,
            top:10,
            right:80,
        },
        car:{
            top:150,
            width:286,
            height:120,
        },
        innercontainer:{
            top:60,
            justifyContent:'center',
            alignItems:'center',
        }

  })


