import { View, Text, Alert } from 'react-native'
import React from 'react'
import styleSheet1 from './styleSheet1'
import { useState } from 'react'
import { TextInput } from 'react-native'
import CustomButton from './CustomButton'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function AccountRecovery({navigation}) {
    const [email, setemail] = useState('')
    const resetpaswword=()=>{
        if(email!=null){
            const auth = getAuth();
            sendPasswordResetEmail(auth, email)
  .then(() => {
    Alert.alert("Email sent successfully!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Alert.alert(errorMessage);
    
  });


        }
        else{
            Alert.alert('Please enter a valid email');
        }
    }
  return (

    <View style={styleSheet1.container}>
      <Text style={styleSheet1.login}>Account Recovery</Text>
        <Text>Enter your email addresss</Text>
        <TextInput style={styleSheet1.Textinput}
        placeholder='Email'
        onChangeText={text=>setemail(text)}
        /> 
        <CustomButton fun={resetpaswword} data={'Submit'}/>
    </View>
  )
}