import React from "react";
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from "./src/screens/IndexScreen";
import AppNavigation from "./src/navigation/AppNavigation";
import { initFirebase } from "./src/utils/Firebase";
import { LogBox } from "react-native";
import Toast from "react-native-toast-message";

LogBox.ignoreAllLogs()
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
     <NavigationContainer>
    <AppNavigation/>
  </NavigationContainer>
  <Toast/>
    </>
 
  );
}

