import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styleSheet1 from './styleSheet1'

 function CustomButton(props) {
  return (
    <View>
      <TouchableOpacity style={styleSheet1.buttons}onPress={props.fun}>
        <Text style={styleSheet1.text}>{props.data}</Text>
      </TouchableOpacity>
    </View>
  )
}

function Flatbutton({image,press,data}) {
  
  
  return (
   
    <View style={{width:'25%',height:'100%',justifyContent:'center',alignContent:'center'}}>
      <TouchableOpacity  onPress={press}
      
      style={[
        {width:55,height:55,borderRadius:80},
        
      ]}>
        
        <Image source={image}
        style={{height:'100%',width:'100%',
        resizeMode: 'contain',borderRadius:50,flexDirection:'row',bottom:0,resizeMode:'cover'}}/>
        <Text style={{textAlign:'center',}} numberOfLines={1} ellipsizeMode="tail">{data}</Text>
        
        
       

      </TouchableOpacity>
      </View>
  );
  };
  export{CustomButton,Flatbutton};