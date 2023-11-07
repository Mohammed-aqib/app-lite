import { TouchableOpacity, TextInput, Image,View, Text, Alert} from 'react-native'
import React,{useState} from 'react'
import { Color } from '../styles/global'
import { styles } from '../styles/LoginStyles';
import { useNavigation } from '@react-navigation/native';



export  const Signup=()=> {
  const navigation = useNavigation();


  const [phoneNumber, setphoneNumber] =useState();
  const [validationError, setValidationError] = useState('');
  const [isError, setIsError] = useState(false);
  // const [showPasswordInput, setShowPasswordInput] = useState(false);


    const handleContinue = () => {
        if (phoneNumber.length === 10) {  
          setIsError(false);
          navigation.replace('Otp');
          console.log(phoneNumber);
          setValidationError('');

        } else {
          setIsError(true);
          // Alert.alert('Please enter a valid 10-digit mobile number.');
          setValidationError('Please enter a valid 10-digit mobile number.');
        }
      };

    // const [value, setValue] = useState()

  return (
    <View style={styles.loginparent}>
       
    <Image
    style={styles.logo}
    source={require('../../Images/logo.png')}


    />

      <Text style={styles.primarytxt}>Enter Your Mobile Number</Text>
      <Text style={styles.secondarytxt}>We will send you the 4-digit verification code</Text>
      <View style={styles.phoneInputContainer}>
      <Image
    style={styles.india}
    source={require('../../Images/india.png')}
    />
       
      <Text style={styles.num}>+91</Text>
      <View style={styles.part}></View>
      <TextInput
              style={[styles.input,

              ]}
              placeholder="Mobile Number"
              placeholderTextColor={Color.colorDimgray}
              value={phoneNumber}
              onChangeText={setphoneNumber}
              keyboardType="phone-pad"
            />
            {isError && (
  <Text style={styles.errorMessage}>{validationError}</Text>
)}
      </View>
      <TouchableOpacity 
      style={styles.button}
      onPress={handleContinue}>
      <Text style={styles.buttontext}>Get OTP</Text>
        
      </TouchableOpacity>
      <Text style={styles.altext}>
            Already have an Account? 
          </Text>
          <TouchableOpacity style={styles.touch2}><Text style={styles.signintext}>Sign In</Text></TouchableOpacity>
          <Image
    style={styles.car}
    source={require('../../Images/car.gif')}
    />
     </View>

  )
}

