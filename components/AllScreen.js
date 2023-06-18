import { View, Text,  ScrollView, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

import * as Font from 'expo-font';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from 'react-native';


Font.loadAsync({
  'Poppins-SemiBold': require('./fonts/Poppins-SemiBold.ttf'),
  'LemonLove': require('.//fonts/LemonLove.ttf'),
  'MilkyCoffee': require('.//fonts/Milky Coffee.ttf')
})
export default function All({ navigation }) {
  const BurgerCard = ({ cloth, navigation }) => {
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('Details', { item: cloth }) }}>
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

             
            </View>
          </View>

          <View
            style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}
          >
            <Image

              style={{
                width: 140,
                height: 140,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginBottom: 10
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

  const [menuItems, setMenuItems] = useState([
    {
      id: '01',
      title: '2 PIECE - PRINTED LAWN SUIT',
      price: 3990.00,
      uri: require('../assets/Imagesofclothes/image1.webp'),
      details: 'Printed Front, Printed Back, Full Sleeves, Round Neckline',
      colour: 'Maroon',
      fabric: 'Lawn',
      isLiked: 'true'
    },
    {
      id: '02',
      title: '2 PIECE - PRINTED LAWN SUIT',
      price: 4290.00,
      uri: require('../assets/Imagesofclothes/image2.webp'),
      details: 'Printed Front, Printed Back, Sleeveless, Y Neckline',
      colour: 'Orange',
      fabric: 'Lawn',
      isLiked: 'false'
    },
    {
      id: '03',
      title: '3 PIECE - PRINTED LAWN SUIT',
      price: 6490.00,
      uri: require('../assets/Imagesofclothes/image3.webp'),
      details: 'Printed Front, Printed Back, Full Sleeves, Y-Neckline',
      colour: 'Sap Green',
      fabric: 'Lawn',
      isLiked: 'true'
    },

    {
      id: '04',
      title: '2 PIECE - PRINTED LAWN SUIT',
      price: 5490.00,
      uri: require('../assets/Imagesofclothes/image4.webp'),
      details: 'Printed Front, Printed Back, Sleeveless, Y Neckline',
      colour: 'Black',
      fabric: 'Lawn',
      isLiked: 'true'
    },

    {
      id: '05',
      title: '3 PIECE - PRINTED LAWN SUIT',
      price: 6290.00,
      uri: require('../assets/Imagesofclothes/image5.webp'),
      details: 'Printed Front, Printed Back, Full Sleeves, Crew Neckline With Slit',
      colour: 'Sea Green',
      fabric: 'Slub Cambric'
    },
    {
      id: '06',
      title: '2 PIECE - EMBROIDERED LAWN SUIT',
      price: 9990.00,
      uri: require('../assets/Imagesofclothes/image6.webp'),
      details: 'Plain Front With Embroidery, Plain Back, Full Sleeves With Embroidery, Crew Neckline With Key Hole',
      colour: 'Stone Blue',
      fabric: 'Pure Linen',
      isLiked: 'true'
    },
  ]);

  
  return (

    <View style={{ flex: 1 }}>


      <View style={{ flex: 1 }}>

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
              style={{ fontFamily: "MilkyCoffee", fontSize: 30, fontWeight: 'bold', flex: 1, paddingLeft: 120, }}
            >
              Clothes
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
                <BurgerCard cloth={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
            />

          </View>
          <View
            style={{
              marginLeft: 20,
              
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              
            }}
          >
            <Text
              style={{ fontFamily: "MilkyCoffee", fontSize: 30, fontWeight: 'bold', flex: 1, paddingLeft: 130, }}
            >
              Bags
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
              data={bagitems}
              renderItem={({ item }) => (
                <BurgerCard cloth={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
            />

          </View>


        </ScrollView>






      </View>
      

      
    </View>
  );

}



