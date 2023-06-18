import {View,Text,TouchableOpacity,FlatList,Image, ScrollView,} from "react-native";

import * as Font from 'expo-font';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState  } from "react";
import { IconButton } from "@react-native-material/core";

Font.loadAsync({
  'Poppins-SemiBold':require('./fonts/Poppins-SemiBold.ttf'),
  
})
export default function GuestHome({navigation}) {

 
  const [menuItems, setMenuItems] = useState([
    {
      id: '01',
      title: '2 PIECE - PRINTED LAWN SUIT',
      price:3990.00,
      uri:require('../assets/Imagesofclothes/image1.webp'),
      details:'Printed Front, Printed Back, Full Sleeves, Round Neckline',
      colour:'Maroon',
      fabric:'Lawn',
      isLiked:'true'
    },
    {
      id: '02',
      title: '2 PIECE - PRINTED LAWN SUIT',
      price:4290.00,
      uri:require('../assets/Imagesofclothes/image2.webp'),
      details:'Printed Front, Printed Back, Sleeveless, Y Neckline',
      colour:'Orange',
      fabric:'Lawn',
      isLiked:'false'
    },
    {
      id: '03',
      title: '3 PIECE - PRINTED LAWN SUIT',
      price:6490.00,
      uri:require('../assets/Imagesofclothes/image3.webp'),
      details:'Printed Front, Printed Back, Full Sleeves, Y-Neckline',
      colour:'Sap Green',
      fabric:'Lawn',
      isLiked:'true'
    },
  
   {
      id: '04',
      title: '2 PIECE - PRINTED LAWN SUIT',
      price:5490.00,
     uri:require('../assets/Imagesofclothes/image4.webp'),
      details:'Printed Front, Printed Back, Sleeveless, Y Neckline',
      colour:'Black',
      fabric:'Lawn',
      isLiked:'true'
   },
  
   {
    id: '05',
    title: '3 PIECE - PRINTED LAWN SUIT',
    price:6290.00,
    uri:require('../assets/Imagesofclothes/image5.webp'),
    details:'Printed Front, Printed Back, Full Sleeves, Crew Neckline With Slit',
    colour:'Sea Green',
    fabric:'Slub Cambric'
  },
  {
    id: '06',
    title: '2 PIECE - EMBROIDERED LAWN SUIT',
    price:9990.00,
    uri:require('../assets/Imagesofclothes/image6.webp'),
    details:'Plain Front With Embroidery, Plain Back, Full Sleeves With Embroidery, Crew Neckline With Key Hole',
    colour:'Stone Blue',
    fabric:'Pure Linen',
    isLiked:'true'
  },
 
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "lavender" }}>
      <View
        style={{
          marginLeft: 20,
          flex: 1,
          flexDirection: "column",
         // alignItems: "center",
        }}
      >
        
      
      </View>

      <View
        style={{
          flex: 1,
          //marginLeft: 10,
          //alignItems: "center",
          marginBottom: 20,
          marginTop: 16,
        }}
      >
        <FlatList
        //  horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={menuItems}
          renderItem={({ item }) => (
            <BurgerCard cloth={item} navigation={navigation}/>
          )}
          keyExtractor={(item) => item.id}
        />
         <FlatList
        //  horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={menuItems}
          renderItem={({ item }) => (
            <BurgerCard cloth={item} navigation={navigation}/>
          )}
          keyExtractor={(item) => item.id}
        />
        

      </View>

      
    </ScrollView>
  );
}


const BurgerCard = ({ cloth, navigation }) => {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('GuestDetails', {item: cloth})}}>
      <View
        style={{
          flex: 1,
          width: 180,
          height: 250,
          backgroundColor: "white",
          margin: 4,
          marginLeft:10,
          
          borderRadius: 12,
        }}
      >
        <View
          style={{ flex: 0.28, alignItems: "center", justifyContent: "center" }}
        >
          
        </View>

        <View
          style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{
              width: 140,
              height: 140,
              borderRadius:10,
              alignItems: "center",
              justifyContent: "center",
              marginBottom:30
            }}
            source={cloth.uri}
          />
        </View>

        <View style={{ flex: 0.4, marginTop: 10 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {cloth.title}
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
           Rs. {cloth.price}
          </Text>
         
          
        </View>
      </View>
    </TouchableOpacity>
  );
};

