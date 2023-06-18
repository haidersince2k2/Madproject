import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styleSheet1 from './styleSheet1'
import { Image } from 'react-native';

export default function Flatbutton(props) {
  
  
    return (
     
      <View style={{width:'25%',height:'100%',justifyContent:'center',alignContent:'center'}}>
        <TouchableOpacity  onPress={props.fun}
        
        style={[
          {width:80,height:80,borderRadius:80},
          
        ]}>
          
          <Image source={props.image}
          style={{height:'90%',width:'90%',
          resizeMode: 'contain',borderRadius:50,flexDirection:'row',bottom:0,resizeMode:'cover'}}/>
          <Text style={{textAlign:'center',}} numberOfLines={1} ellipsizeMode="tail">{props.data}</Text>
          
          
         
  
        </TouchableOpacity>
        </View>
    );
    };