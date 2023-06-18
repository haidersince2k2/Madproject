import {View,Text,TouchableOpacity,FlatList,Image, ScrollView,} from "react-native";

import * as Font from 'expo-font';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState  } from "react";
import { IconButton } from "@react-native-material/core";

Font.loadAsync({
  'Poppins-SemiBold':require('./fonts/Poppins-SemiBold.ttf'),
  
})
export default function BagsHome({navigation}) {

  const [bagitems,setbagitems]=useState([
    {id: '01',
    title: 'MAROON WALLET',
    price: 1490.00,
    uri: require('../assets/Imagesofbags/image1.webp'),
    details: 'Our trendy and easy to carry wallet in maroon.',
    colour: 'Maroon',
    isLiked: 'true'
},
   {id: '02',
    title: 'OLIVE GREEN TOTE BAG',
    price: 4990.00,
    uri: require('../assets/Imagesofbags/image2.webp'),
    details: 'Make a style statement with our olive green tote with button closure..',
    colour: 'Olive Green',
    isLiked: 'true'
},
{id: '03',
    title: 'BLACK TOTE BAG',
    price:5490.00,
    uri: require('../assets/Imagesofbags/image3.webp'),
    details: ' A stylish yet spacious tote bag with quilted texture and chain handle.',
    colour: 'Black',
    isLiked: 'true'
},
{id: '04',
    title: 'TAN TOTE BAG',
    price: 4990.00,
    uri: require('../assets/Imagesofbags/image4.webp'),
    details: 'Uplift your attire with our tan faux leather',
    colour: 'Tan',
    isLiked: 'true'
},
{id: '05',
    title: 'MUSTARD TOTE BAG',
    price: 4490.00,
    uri: require('../assets/Imagesofbags/image5.webp'),
    details: 'Our signature tote in mustard is a must have this season.',
    colour: 'Mustard',
    isLiked: 'true'
},
{id: '06',
    title: 'BLACK TOTE BAG',
    price: 4490.00,
    uri: require('../assets/Imagesofbags/image6.webp'),
    details: 'This chic yet spacious tote bag in black is perfect for all your everyday essentials.',
    colour: 'Black',
    isLiked: 'true'
},

  ]);


  return (
    <ScrollView style={{ flex: 1, backgroundColor: "lavender" }}>
      <View
        style={{
          marginLeft: 20,
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        
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
         // horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={bagitems}
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
    <TouchableOpacity onPress={()=>{navigation.navigate('Details', {item: cloth})}}>
      <View
        style={{
          flex: 1,
          width: 300,
          height: 300,
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
                  cloth.isLiked=(!cloth.isLiked)
                }}>
                <Icon
                  name="heart"
                  color={cloth.isLiked ? "red" : "grey"}
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
              width: 190,
              height: 190,
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
              fontSize: 16,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {cloth.title}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontFamily: "Poppins-SemiBold",
            }}
          >
           Colour : {cloth.colour}
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

