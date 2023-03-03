import React from 'react'
import IndexScreen from '../screens/IndexScreen';
import DetailsScreen from '../screens/DetailsScreen'
import InformationScreen from '../screens/InformationScreen'
import LoginScreen from '../screens/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IndexStack from './IndexStack';
import { Icon } from 'react-native-elements';
import DetailsStack from './DetailsStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigation(){
    return(
       
  <Tab.Navigator screenOptions={({route})=>({
      
      headerShown:false,
    tabBarActiveTintColor:"red",
    tabBarInactiveTintColor:"green",
    //tabBarIcon:()=>showIcons()
    tabBarIcon:({color, size})=> showIcons(route, color, size)
  })}>
     <Tab.Screen
            component={IndexStack} name='index' options={{title:"inicio"}}
            />
            <Tab.Screen
            component={DetailsStack} name='details' options={{title:"detalles"}}
            />
            <Tab.Screen
            component={ProfileStack} name='profile' options={{title:"Perfil"}}
            />
        </Tab.Navigator> 
)}

function showIcons(route, color, size){
  let icono;
  if(route.name==="index"){
    icono='home-circle'
  }
  if(route.name==="details"){
    icono="details"
  }if(route.name==="profile"){
    icono="account-outline"
  }
  return(
<Icon 
    type='material-community'
    name={icono}
    color={color}
    size={size}
    />
  )
}


 // <Drawer.Navigator>
        //     <Drawer.Screen
        //     component={IndexScreen} name='index' options={{title:"inicio"}}
        //     />
        //     <Drawer.Screen
        //     component={DetailsScreen} name='details' options={{title:"detalles"}}
        //     />
        //     <Drawer.Screen
        //     component={InformationScreen} name='information' options={{title:"informacion"}}
        //     />

        // </Drawer.Navigator>

     
//     )
// }


/* const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen component={IndexScreen} name='index' options={{title:"inicio"}}/>
        <Stack.Screen component={DetailsScreen} name='details' options={{title:"detalles"}}/>
        <Stack.Screen component={InformationScreen} name='information' options={{title:"informacion"}}/>
    </Stack.Navigator>
  )
}
 */