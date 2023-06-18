import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styleSheet1 from './styleSheet1'
import CustomButton from './CustomButton'
import { StatusBar } from 'expo-status-bar'
export default function Welcome({navigation}) {
  return (
    <View style={styleSheet1.container}>
       <StatusBar translucent={true} backgroundColor={'transparent'}/>
      <Text style={styleSheet1.login}>Welcome</Text>
      <Image style={styleSheet1.image}source={require('./final.png')} />
      <CustomButton fun={()=>navigation.navigate('Login')}data={'Login'}/>
      <CustomButton fun={()=>navigation.navigate('Guest')} data={'Guest '}/>
      
    </View>
  )
}