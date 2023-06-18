import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import styleSheet1 from './styleSheet1'
import CustomButton from './CustomButton'
import { auth } from './firebase'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc } from "firebase/firestore";
import { db } from './firebase'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { doc } from 'firebase/firestore'

export default function Register({ navigation }) {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [mobile, setmobile] = useState('')
  const [password, setpassword] = useState('')
  const [address, setaddress] = useState('')
  const [show, setshow] = useState(true)
  const [visible, setvisible] = useState(true)

  const checkformobile = () => {
    if (name === '') {
      Alert.alert("Please enter your name.")
    }
    else if (mobile === '') {
      Alert.alert("Please enter your mobile number.")
    }
    else if (mobile.length != 11) {
      Alert.alert("Please enter your valid mobile number.")
    }
    else if (address === '') {
      Alert.alert("Please enter your address.")
    }
    else
      handlesignup();
  }

  
  const handlesignup = () => {

    createUserWithEmailAndPassword(auth, email, password).then(
      async(result)=>{
        console.log(result)
        try{
          const ref=doc(db,"users",result.user.uid)
          const docRef=await setDoc(ref,{name,mobile,email,address})
          alert("user created")
          navigation.navigate('Login')
          
        }catch(e){
          console.error(e);
        }
      }
    ).catch(err=>{
      Alert.alert(err.code)
    
    }
    )
      
  }
  
  
 
  
return (

  <ScrollView style={styleSheet1.container}>
    <Text style={styleSheet1.register2}>Register</Text>

    <Text >Name</Text>
    <TextInput style={styleSheet1.Textinput}
      placeholder='abcd'
      value={name}
      onChangeText={text => setname(text)}
    />
    <Text>Email</Text>
    <TextInput style={styleSheet1.Textinput}
      placeholder='abcd@example.com'
      value={email}
      onChangeText={text => setemail(text)}
    />
    <Text>Mobile</Text>
    <TextInput style={styleSheet1.Textinput}
      placeholder='03012223333'
      keyboardType='numeric'
      value={mobile}
      onChangeText={text => setmobile(text)}

    />
    <Text>Password</Text>
    <TextInput style={styleSheet1.Textinput}
      placeholder='password'
      value={password}
      secureTextEntry={visible}
      onChangeText={text => setpassword(text)}

    />
    <TouchableOpacity style={styleSheet1.btneye1} onPress={() => {
      setvisible(!visible);
      setshow(!show);
    }}>
      <MaterialCommunityIcons
        name={show === false ? 'eye-outline' : 'eye-off-outline'}
        size={26}
        color={'black'}
      />
    </TouchableOpacity>
    <Text>Address</Text>
    <TextInput style={styleSheet1.Textinput}
      placeholder='Enter your complete address'
      value={address}
      onChangeText={text => setaddress(text)}
    />

    <CustomButton fun={checkformobile} data={'Register'} />

    <Text style={styleSheet1.account}>Already have an account? </Text>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styleSheet1.account1}>Login</Text></TouchableOpacity>


  </ScrollView>
)
}
