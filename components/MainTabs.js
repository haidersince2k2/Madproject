import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./MainScreen";
import Cart from "./Cart";
import ProfileScreen from "./ProfileScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
  
            if (rn === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (rn === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen  name='Home' component={Main} />
        <Tab.Screen name='Cart' component={Cart} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    );
  }
  