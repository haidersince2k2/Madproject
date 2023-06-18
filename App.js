import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import FrontScreen from './components/FrontScreen';
import Splash from './components/Splash';
import GuestHome from './components/GuestClothes';
import AccountRecovery from './components/AccountRecovery';
import GuestMain from './components/GuestMainScreen';

import { GuestDetails } from './components/GuestDetails';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'purple', }, headerTintColor: 'white',}}>
      <Stack.Screen name="Happy Shopping" component={Splash} />
        <Stack.Screen name="welcome" component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Guest" component={GuestMain} />
        <Stack.Screen name="GuestDetails" component={GuestDetails}/>
        <Stack.Screen name="GuestClothes" component={GuestHome}/>
        <Stack.Screen name="Cart" component={GuestHome}/>
        <Stack.Screen name="AccountRecovery" component={AccountRecovery}/>



        <Stack.Screen options={{headerShown: false}} name="FrontScreen" component={FrontScreen} />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default MyStack;
