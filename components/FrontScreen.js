import React from 'react';
import Buy from './Buy';
import { NavigationContainer } from '@react-navigation/native';
import Home from './ClothesScreen'
import { createStackNavigator } from '@react-navigation/stack';
import BagsHome from './BagsScreen';
import { Details } from './Details';
import All from './AllScreen';
import Cart from './Cart';
import MainTabs from './MainTabs';


const Stack = createStackNavigator();

 export default function FrontScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'purple' },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="MainTabs"
          component={MainTabs}
        />
         <Stack.Screen
         // options={{ headerShown: false }}
          name="ClothesScreen"
          component={Home}
        /> 
         <Stack.Screen
         // options={{ headerShown: false }}
          name="Cart"
          component={Cart}
        /> 
         <Stack.Screen
         // options={{ headerShown: false }}
          name="All"
          component={All}
        /> 
        <Stack.Screen
          //options={{ headerShown: false }}
          name="Bags"
          component={BagsHome}
        />
         <Stack.Screen
          //options={{ headerShown: false }}
          name="Details"
          component={Details}
        />
        <Stack.Screen
         // options={{ headerShown: false }}
          name="Buy"
          component={Buy}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

