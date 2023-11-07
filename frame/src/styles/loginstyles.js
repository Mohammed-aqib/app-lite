
import {StyleSheet} from 'react-native';
import { FontFamily,FontSize,Color } from '../styles/global'


export const styles = StyleSheet.create({

    loginparent:{
        top:140,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // fontFamily:FontFamily.interRegular,
    },
    primarytxt:{
    fontFamily:FontFamily.interRegular,
    fontSize:FontSize.size_base,
    color:Color.colorBlack,
    fontWeight:'500',
    bottom:70,
    left:10,
    // fontWeight:'bold',
    },
    logo:{
    width:119,
    height:42,
    bottom:130,
    right:90,
    
    },
    secondarytxt:{
        fontSize:FontSize.size_mini,
        right:1,
    color:Color.colorDimgray,
    bottom:60,
    },
    phoneInputContainer:{
    flexDirection:'row',
    backgroundColor:Color.Inputback,
    borderRadius:10,
    width:300,
    bottom:30,
    height:55,
    elevation: 4,
    },
    india:{
        top:15,
        left:10,
        width:25,
        height:25,
    },
    num:{
        width:25,
        height:25,
        top:17,
        left:15,
    color:Color.colorBlack,
    },
    part:{
        width:1,
        height:28,
    backgroundColor:Color.colorDimgray,
    left:20,
    top:14,
    },
    input:{
        left:25,
        width:200,
        height:55,
    color:Color.colorBlack,
    },
    button:{
    width:300,
    borderRadius:10,
    height:55,
    color:Color.colorWhite,
    backgroundColor:Color.colorPrimary,
    justifyContent:'center',
    alignItems:'center',
    },
    buttontext:{
    color:Color.colorWhite,
    fontWeight:'600',
    },
    
    signintext:{
    color:Color.colorPrimary,
    textDecorationLine:'underline',
    textDecorationColor:Color.colorPrimary,
    // left:50,
    },
    altext:{
    color:Color.colorDimgray,
    top:20,
    right:70,
    bottom:30,
    },
    touch2:{
        // right:30,
        top:1,
    width:50,
    bottom:50,
    left:40,
    
    },
    car:{
        width:286,
        height:286,
    }
    
    
    })