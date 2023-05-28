import {View,Text,StyleSheet,ScrollView,Image,FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';

import Flatbutton from './CustomButton'; 
import Footer from './footer';

export default function MainScreen({navigation}){
    
    const readyURL=require('./Images/Ready.png');
   const unstitchedURL=require('./Images/unstitched.png');
   const allURL=require('./Images/all.png');
   const newURL=require('./Images/new.png');
  

const HomeScreen=()=>{
  
  return(
    <View style={{flex:1}}>
  
    <View style={{flex:0.2}}>
  
          <Image source={require('./Images/banner.jpg')}
          style={{width:'100%',height:200,borderRadius:5,allignSelf:'center',}}
          />
    </View>
    <View style={{flex:0.2,flexDirection:'row',top:70,}}>
        <Flatbutton image={newURL}  data={'new'}/>
        <Flatbutton  image={readyURL} data={'Pret'}/>
        <Flatbutton image={unstitchedURL} data={'Unstitched'}/>
        <Flatbutton image={allURL}  data={'All'}/>
        
        
        
    </View>
    <View style={{flex:0.6,alignContent:'center',top:60,}}>
     
    </View>
          
       </View>
          
  );
  }
   
    return (
     
    <View style={{flex:1}}>
        
         
         <View style={{flex:0.9,width:'100%',height:70,backgroundColor:'lavender',flexDirection:'column'}}>
              <HomeScreen/>
          
            </View>
        <View style={{flex:0.1,backgroundColor:'white',flexDirection:'row'}}> 
        <Footer/>
        </View>       
    </View>
    );

}



