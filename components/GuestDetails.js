import { ScrollView, Text, View, Image, Alert, TouchableOpacity } from "react-native"
import * as Font from 'expo-font';
import DropDownPicker from "react-native-dropdown-picker";
import FlatButtons from "./FlatButtons";
import { Component } from "react";
import { useState } from "react";

import { StatusBar } from "expo-status-bar";


Font.loadAsync({
    
    'Poppins-Bold':require('./fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold':require('./fonts/Poppins-SemiBold.ttf')
})
const GuestDetails = ({ route, navigation }) => {
    const [isOpen, setisOpen] = useState(false)
    const [currentvalue, setcurrentvalue] = useState()
   
  return (
    <View style={{ flex: 1, backgroundColor: "lavender" }}>
      <StatusBar translucent={true} backgroundColor={'transparent'}/>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.998,
            height: '100%',
            width:'100%',
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <Image
            source={route.params.item.uri}
            style={{  flex: 1,
              width: 500,
              height: '100%', }}
            resizeMode="contain"
          />
        </View>

        <View style={{ flex: 0.2, flexDirection: "row" }}>
          <View style={{ flex: 0.9 }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 20,
                marginLeft: 10,
              }}
            >
              {route.params.item.title}
            </Text>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  marginLeft: 20,
                  flex: 0.5,
                  flexDirection: "row",
                }}
              >
                
                
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.3,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              marginRight: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 22,
                color: "#F44648",
              }}
            >
              Rs.{route.params.item.price}
            </Text>
          </View>
          
        </View>
        <View
            style={{
              flex: 0.1,
              flexDirection:'row'
           
          
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 20,
                color: "purple",
                paddingLeft:10
              }}
            >
              Colour: {route.params.item.colour}
            </Text>
            <View
            style={{
                flex:1,
              marginLeft: 20,
              //marginTop: ,
             marginRight: 20,
             // marginTop: 15,
              

            }}
          >
           
          

            </View>
          </View>
        
        <View style={{ flex: 0.6}}>
          <View style={{ marginLeft: 24, marginRight: 24,  }}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
              Details
            </Text>
            <Text style={{ fontFamily: "Poppins-SemiBold", color: "darkgrey" }}>
              {route.params.item.details}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", flexDirection:'row',marginLeft:32,}}>
          <Text style={{fontWeight:'bold', fontSize:15,fontFamily:'Poppins-Bold'}}>
            Please  
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={{color:'blue',fontWeight:'bold', fontSize:15,fontFamily:'Poppins-Bold'}}>  Login </Text>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold', fontSize:15,fontFamily:'Poppins-Bold'}}> or </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}><Text style={{color:'blue',fontWeight:'bold', fontSize:15,fontFamily:'Poppins-Bold'}}>  Register</Text></TouchableOpacity>
        <Text style={{fontWeight:'bold', fontSize:15,fontFamily:'Poppins-Bold'}}> to place order.</Text>
          </View>


          
        </View>
      </View>
     
    </View>  
    
  );
};

export { GuestDetails };
