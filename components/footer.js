import {View,Text,StyleSheet, Alert} from 'react-native';
import React from 'react';
 import Flatbutton from './Flatbutton'; 
  export default function Footer({navigation}){
    const homeURL=require('./Images/home.png');
    const cartURL=require('./Images/bag.png');
    const profileURL=require('./Images/profile.png');
    const wishlistURL=require('./Images/wishlist.png');
    
    
    return (
        <View style={{ flex:1,flexDirection:'row'}}>
        <Flatbutton  image={homeURL} press={()=>{Alert.alert('home')}}  />
        <Flatbutton image={cartURL}  />      
        <Flatbutton image={wishlistURL}  />
        <Flatbutton image={profileURL}  />
        </View>
      
    );
  }
