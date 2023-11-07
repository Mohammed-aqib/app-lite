import { StyleSheet } from "react-native"
import { FontFamily,FontSize,Color } from "./global"

export const styles = StyleSheet.create({
    otpcontainer:{
        backgroundColor:Color.colorWhite,
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


