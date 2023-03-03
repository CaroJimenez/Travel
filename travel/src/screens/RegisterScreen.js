import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import RegisterForm from '../components/account/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function RegisterScreen() {
  return ( 
    <KeyboardAwareScrollView>
        <Image source={require("../../assets/images/travelImg.png")} style={styles.img}/>
      <View style={styles.viewForm}>
        <RegisterForm/>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
    img:{
        width:"100%",
        height:150,
        resizeMode:"contain",
        marginTop:30
      },
      viewForm:{
        marginHorizontal:40

      }
})