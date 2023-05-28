import {View,Text,StyleSheet} from 'react-native';
import React from 'react';
 import Flatbutton from './CustomButton'; 
  const Footer=()=> {
    const homeURL=require('./Images/home.jpg');
    const cartURL=require('./Images/bag.jpg');
    const profileURL=require('./Images/profile.jpg');
    const wishlistURL=require('./Images/wishlist.jpg');
    
    return (
        <View style={{flexDirection:'row'}}>
        <Flatbutton image={homeURL}  />
        <Flatbutton image={cartURL}  />      
        <Flatbutton image={wishlistURL}  />
        <Flatbutton image={profileURL}  />
        </View>
      
    );
  }
  export default Footer;