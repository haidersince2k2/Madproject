import {View,Text,StyleSheet,ScrollView,Image,FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import Flatbutton from './Flatbutton';
import Footer from './footer'
import * as Font from 'expo-font';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from 'react-native';
import { IconButton } from "@react-native-material/core";

Font.loadAsync({
  'Poppins-SemiBold':require('./fonts/Poppins-SemiBold.ttf'),
   'LemonLove':require('.//fonts/LemonLove.ttf'),
   'MilkyCoffee':require('.//fonts/Milky Coffee.ttf')
})
export default function Main({navigation}){
  const BurgerCard = ({ burger, navigation }) => {
    return (
      <TouchableOpacity onPress={()=>{navigation.navigate('Details', {item: burger})}}>
        <View
          style={{
            flex: 1,
            width: 200,
            height: 260,
            backgroundColor: "white",
            margin: 8,
            
            borderRadius: 12,
          }}
        >
          <View
            style={{ flex: 0.28, alignItems: "center", justifyContent: "center" }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  margin: 12,
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                
                
              </View>
  
              <IconButton
                color="white"
                icon={(props) => (
                  <TouchableOpacity onPress={()=>{
                    burger.isLiked=(!burger.isLiked)
                  }}>
                  <Icon
                    name="heart"
                    color={burger.isLiked ? "red" : "grey"}
                    style={{ fontSize: 30 }}
                  />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
  
          <View
            style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
              source={require('./clothesfinal.png')}
            />
          </View>
  
          <View style={{ flex: 0.4, marginTop: 10 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Poppins-SemiBold",
              }}
            >
              {burger.title}
            </Text>
           
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                marginTop: 4,
                marginBottom: 16,
                color: "grey",
                fontFamily: "Poppins-SemiBold",
              }}
            >
             Rs. {burger.price}
            </Text>
           
            
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const [menuItems, setMenuItems] = useState([
    {
      id: '01',
      title: '2 PIECE - PRINTED LAWN SUIT',
      price:3990.00,
      uri:'https://cdn.shopify.com/s/files/1/1592/0041/files/003PESG23V39_5.jpg?v=1685012886&width=600',
      details:'Printed Front, Printed Back, Full Sleeves, Round Neckline',
      colour:'Maroon',
      fabric:'Lawn',
      isLiked:'true'
    },
    {
      id: '02',
      title: '2 PIECE - PRINTED LAWN SUIT',
      price:4290.00,
      uri:'https://cdn.shopify.com/s/files/1/1592/0041/files/00000FOR0D12_4.jpg?v=1683532631',
      details:'Printed Front, Printed Back, Sleeveless, Y Neckline',
      colour:'Orange',
      fabric:'Lawn',
      isLiked:'false'
    },
    {
      id: '03',
      title: '3 PIECE - PRINTED LAWN SUIT',
      price:6490.00,
      uri:'https://cdn.shopify.com/s/files/1/1592/0041/files/03PESG23V327_5.jpg?v=1684759233&width=600',
      details:'Printed Front, Printed Back, Full Sleeves, Y-Neckline',
      colour:'Sap Green',
      fabric:'Lawn',
      isLiked:'true'
    },
  
   {
      id: '04',
      title: '2 PIECE - PRINTED LAWN SUIT',
      price:5490.00,
      uri:'https://cdn.shopify.com/s/files/1/1592/0041/files/003FELX23V37_4.jpg?v=1685019333&width=600',
      details:'Printed Front, Printed Back, Sleeveless, Y Neckline',
      colour:'Black',
      fabric:'Lawn',
      isLiked:'true'
   },
  
   {
    id: '05',
    title: '3 PIECE - PRINTED LAWN SUIT',
    price:6290.00,
    uri:'https://cdn.shopify.com/s/files/1/1592/0041/files/03PESG23V336_6.jpg?v=1684824278&width=600',
    details:'Printed Front, Printed Back, Full Sleeves, Crew Neckline With Slit',
    colour:'Sea Green',
    fabric:'Slub Cambric'
  },
  {
    id: '06',
    title: '2 PIECE - EMBROIDERED LAWN SUIT',
    price:9990.00,
    uri:'https://cdn.shopify.com/s/files/1/1592/0041/files/0002TDY23V35_2_01858a17-05e9-4ea7-bf05-b631a8a5873c.jpg?v=1684822017&width=600',
    details:'Plain Front With Embroidery, Plain Back, Full Sleeves With Embroidery, Crew Neckline With Key Hole',
    colour:'Stone Blue',
    fabric:'Pure Linen',
    isLiked:'true'
  },
  ]);
    
    const readyURL=require('./Images/Ready.png');
   const unstitchedURL=require('./Images/unstitched.png');
   const allURL=require('./Images/all.png');
   const newURL=require('./Images/new.png');
  

const HomeScreen=()=>{
  
  return(
    <View style={{flex:1}}>
  
    <View style={{flex:0.5}}>
  
          <Image source={require('./Images/banner.jpg')}
          style={{width:'100%',height:200,borderRadius:5,allignSelf:'center',}}
          />
    </View>
    <View style={{flex:0.2,flexDirection:'row',top:70,}}>
        <Flatbutton press={()=>navigation.navigate('ClothesScreen')}image={newURL}  data={'new'}/>
        <Flatbutton  image={readyURL} data={'Pret'}/>
        <Flatbutton image={unstitchedURL} data={'Unstitched'}/>
        <Flatbutton image={allURL}  data={'All'}/>
        
        
        
    </View>
       </View>
          
  );
  }
   
    return (
     
    <View style={{flex:1}}>
        
         
         <View style={{flex:0.9,width:'100%',height:70,backgroundColor:'lavender',flexDirection:'column'}}>
              <HomeScreen/>
            </View>
            <View style={{flex:1}}>
              
    <ScrollView style={{ flex: 1, backgroundColor: "lavender" }}>
      <View
        style={{
          marginLeft: 20,
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontFamily: "MilkyCoffee", fontSize: 40,fontWeight:'bold', flex: 1,paddingLeft:90, }}
        >
          Trending
        </Text>
      
      </View>

      <View
        style={{
          flex: 1,
          marginLeft: 10,
          alignItems: "center",
          marginBottom: 20,
          marginTop: 16,
        }}
      >
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={menuItems}
          renderItem={({ item }) => (
            <BurgerCard burger={item} navigation={navigation}/>
          )}
          keyExtractor={(item) => item.id}
        />

      </View>

      
    </ScrollView>
 





            </View>
        <View style={{flex:0.2,backgroundColor:'white',flexDirection:'row'}}> 
        <Footer/>
        </View>       
    </View>
    );

}



