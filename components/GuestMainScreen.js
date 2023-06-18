import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Flatbutton from './Flatbutton';

import * as Font from 'expo-font';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from 'react-native';
import { IconButton } from "@react-native-material/core";

Font.loadAsync({
  'Poppins-SemiBold': require('./fonts/Poppins-SemiBold.ttf'),
  'LemonLove': require('.//fonts/LemonLove.ttf'),
  'MilkyCoffee': require('.//fonts/Milky Coffee.ttf')
})
export default function GuestMain({ navigation }) {
  const BurgerCard = ({ cloth, navigation }) => {
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('GuestDetails', { item: cloth }) }}>
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
                  <TouchableOpacity onPress={() => {
                    cloth.isLiked = (!cloth.isLiked)
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

  const readyURL = require('./Images/Ready.png');
  const unstitchedURL = require('./Images/unstitched.png');
  const allURL = require('./Images/all.png');
  const newURL = require('./Images/new.png');


  const HomeScreen = () => {

    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 0.5 }}>
          <TouchableOpacity onPress={()=>navigation.navigate('GuestClothes')}>
            <Image source={require('./Images/banner.png')}
              style={{ width: '100%', height: 200, borderRadius: 5, allignSelf: 'center', }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.2, flexDirection: 'row', top: 70,marginBottom:20,marginLeft:80,marginVertical:20, }}>
          
          <Flatbutton image={readyURL} data={'Pret'} fun={()=>navigation.navigate('GuestClothes')}/>
          <Flatbutton image={unstitchedURL} data={'Bags'} fun={()=>navigation.navigate('GuestClothes')}/>
          <Flatbutton image={allURL} data={'All'} fun={()=>navigation.navigate('GuestClothes')}/>



        </View>
      </View>

    );
  }

  return (

    <View style={{ flex: 1 }}>


      <View style={{ flex: 0.9, width: '100%', height: 70, backgroundColor: 'lavender', flexDirection: 'column' }}>
        <HomeScreen />
      </View>
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
              style={{ fontFamily: "MilkyCoffee", fontSize: 40, fontWeight: 'bold', flex: 1, paddingLeft: 90, }}
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



