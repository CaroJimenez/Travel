import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import LoginScreen from './LoginScreen';
import Loading from '../components/Loading';

export default function IndexScreen(props) {
    console.log(props)
    const{navigation}=props
    const [session, setSession ]= useState(null);
    useEffect(()=>{
      const auth = getAuth();
      onAuthStateChanged(auth, (user)=>{
            console.log(user)
          // setSession(user ? true : false)
          setSession(false);
      })
     
    }, [])

    if(session===null){
      return <Loading visible={true} text={"Validando sesión"}/>
    }
    
  return session ? (
    <View>
      <Text>IndexScreen</Text>
      <Button title='ir a detalles' 
      onPress={()=>navigation.navigate("details")}
      />
      <Button title='ir a información'
      onPress={()=>navigation.navigate("information")}/>
      <Button title='ir al Login'
   
      onPress={()=>navigation.navigate("detailsS", {screen:"loginS"})}/>
    </View>
  ): <LoginScreen/>
}
const styles = StyleSheet.create({})