import React,{useEffect} from 'react';
import {  Text, View ,Image} from 'react-native';


const Splash=({navigation})=> {
    useEffect(()=>{
      setTimeout(()=>{
        navigation.navigate('welcome')
      },2000)  
    },[])
  return (
    <View >
      <Image source={require('../assets/splash.png')}
      style={{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',}}
      />
      
    </View>
  );
}

export default Splash;