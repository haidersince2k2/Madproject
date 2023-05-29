import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomButton from './CustomButton'
import styleSheet1 from './styleSheet1'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { authentication } from './firebase'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Login = ({navigation}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [show, setshow] = useState(true)
    const [visible, setvisible] = useState(true)

    const handellogin=()=>{
        signInWithEmailAndPassword(authentication,email,password)
        .then(UserCredentials=>{
            const user=UserCredentials.user;
            Alert.alert("Loged in!")
            navigation.navigate("MainScreen")

        })
        .catch(error=>{
            
                Alert.alert('error')

            
        }
            
            )

    }
  return (
    
    <View style={styleSheet1.container}>
        
        <Text style={styleSheet1.login}>Login</Text>
        
        <TextInput style={styleSheet1.Textinput}
        placeholder='Email'
        onChangeText={text=>setemail(text)}
        /> 
        
        <TextInput style={styleSheet1.Textinput}
        placeholder='Password'
        secureTextEntry={visible}
        onChangeText={text=>setpassword(text)}
       
        /> 
        <TouchableOpacity style={styleSheet1.btneye} onPress={()=>{
          setvisible(!visible);
          setshow(!show);
        }}>
          <MaterialCommunityIcons
          name={show===false ? 'eye-outline': 'eye-off-outline'}
          size={26}
          color={'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('AccountRecovery')}>
        <Text style={styleSheet1.forgot}>Forgot your Password?</Text>
      </TouchableOpacity>
      <CustomButton  fun={handellogin}data={'Login'}/>
      <Text style={styleSheet1.register}>Don't have an account?</Text>
       <TouchableOpacity onPress={()=>navigation.navigate('Register')}><Text style={styleSheet1.register1}> Register </Text></TouchableOpacity>
    </View>
  )
}

export default Login