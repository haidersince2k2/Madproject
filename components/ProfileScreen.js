import { View, Text,  StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styleSheet1 from './styleSheet1'
import CustomButton from './CustomButton'
import { auth } from './firebase'
import { useEffect } from 'react'
import { Image } from 'react-native'
import { ActivityIndicator } from '@react-native-material/core'

import {  setDoc, doc, getDoc } from "firebase/firestore";
import { db } from './firebase'
export default function ProfileScreen({ navigation }) {
    const [name1, setname1] = useState('second')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [check, setcheck] = useState(false)
    const [loading, setloading] = useState(true)
    const [fvrt, setfvrt] = useState('8')
    const [address, setaddress] = useState('')
   

    useEffect(() => {
        const readdata = async () => {
            try{
            const docRef = doc(db, "users", auth.currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                
                console.log(docSnap.data());
                setmobile(docSnap.data().mobile)
                setaddress(docSnap.data().address)
                setname1(docSnap.data().name)
                
            }
        }
            catch (error) {
                console.log('Error fetching data:', error);
              } finally {
                setloading(false);
              }

        }
        readdata();
    }, [])
    const savedata = async () => {

        await setDoc(doc(db, "users", auth.currentUser.uid), {
            name: name1,
            email: email,
            mobile: mobile,
            address: address,
        })
            .then(() => {
                alert('your profile is updated.');
                navigation.navigate('MainScreen')
            })
    }
    if (loading) {
        return (
          <View style={ {flex: 1,
            justifyContent: 'center',
            alignItems: 'center',}}>
            <ActivityIndicator size="large" color="blue"  />
            <Text>Loading data... Please wait</Text>
          </View>
        );
      }

    return (

        <View style={styleSheet1.container}>
            <Image style={{ height: 250, width: 250, marginLeft: 65 }} source={require('./Images/profile.png')} />
          
            <TextInput style={styleSheet1.Textinput}
                placeholder='name'
                //keyboardType='numeric'
                value={name1}
                onChangeText={(text) => {
                   setname(text);
                    setcheck(true);
                }}
           />
           
             <TextInput style={styleSheet1.Textinput}
                placeholder='03012223333'
                keyboardType='numeric'
                value={mobile}
                onChangeText={(text) => {
                    setmobile(text);
                    setcheck(true);
                }}
           />
           
            <TextInput style={styleSheet1.Textinput}
                placeholder='Enter your complete address'
                value={address}
                onChangeText={(text) => {
                    setaddress(text);
                    setcheck(true);
                }}
     />
      
           <CustomButton data={"Submit"} fun={savedata} disable={!check}/>
          
        </View>


    )
}
