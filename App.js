import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import MainScreen from './components/MainScreen';
import ShoesScreen from './components/ShoesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountRecovery from './components/AccountRecovery';
import BagsScreen from './components/BagsScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/ClothesScreen';
import { Details } from './components/Details';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (

    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        
        headerStyle:{
          backgroundColor:'purple',
        },
        headerTintColor:'white',
        
      }}>
        <Stack.Screen name="welcome" component={Welcome}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="AccountRecovery" component={AccountRecovery} />
        <Stack.Screen name="ClothesScreen" component={Home} />
        <Stack.Screen name="BagsScreen" component={BagsScreen} />
        <Stack.Screen name="ShoesScreen" component={ShoesScreen} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
};
export default MyStack