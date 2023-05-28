import { ScrollView, Text, View, Image } from "react-native"
import * as Font from 'expo-font';
import DropDownPicker from "react-native-dropdown-picker";
import FlatButtons from "./FlatButtons";
import { Component } from "react";
import { useState } from "react";
Font.loadAsync({
    
    'Poppins-Bold':require('./fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold':require('./fonts/Poppins-SemiBold.ttf')
})
const Details = ({ route,  }) => {
    const [isOpen, setisOpen] = useState(false)
    const [currentvalue, setcurrentvalue] = useState()
    let data=[
        {
            label:'Small',
            value:'Small'
        },
        {
            label:'Medium',
            value:'Medium'
        },
        {
            label:'Large',
            value:'Large'
        },
        {
            label:'XL',
            value:'XL'
        }
    ]
  return (
    <View style={{ flex: 1, backgroundColor: "#fafbff" }}>
      

      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.4,
            height: 280,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require('./clothesfinal.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View style={{ flex: 0.2, flexDirection: "row" }}>
          <View style={{ flex: 0.8 }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 24,
                marginLeft: 24,
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
                
                <Text style={{ fontSize: 16, fontFamily: "Poppins-SemiBold" }}>
                  {route.params.item.rating}
                </Text>
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
              flex: 0.05,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              //marginRight: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 20,
                color: "purple",
              }}
            >
              Colour: {route.params.item.colour}
            </Text>
          </View>
        
        <View style={{ flex: 0.6}}>
          <View style={{ marginLeft: 24, marginRight: 24, marginTop: 24 }}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
              Details
            </Text>
            <Text style={{ fontFamily: "Poppins-SemiBold", color: "darkgrey" }}>
              {route.params.item.details}
            </Text>
          </View>

          
          <View
            style={{
                flex:0.4,
              marginLeft: 20,
              //marginTop: ,
              marginRight: 200,
              marginTop: 16,
              flexDirection:'row'

            }}
          >
           
            
          <DropDownPicker 
           
            items={data}
            open={isOpen}
            setOpen={()=>
                setisOpen(!isOpen)
            }
            value={currentvalue}
            setvalue={(val)=>setcurrentvalue(val)}
            onChangeSearchText={()=>{
                setcurrentvalue(val);
            }}
            autoScroll
            maxHeight={100}
            placeholder="Select Size"
            tickIconStyle={true}
            

            />
            </View>
           
          
          

          <View style={{ flex: 1, alignItems: "center" }}>
           <FlatButtons data={'Buy Now'}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export { Details };
