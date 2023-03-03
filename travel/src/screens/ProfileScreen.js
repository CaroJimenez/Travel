import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

export default function ProfileScreen() {
    const navigation = useNavigation()
    const cerrarSesion = async()=>{
        const auth = getAuth()
        await signOut(auth)
        navigation.navigate("index")
    }
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
      title={"cerrar sesión"}
      onPress={cerrarSesion}
      buttonStyle={styles.button}
        titleStyle={styles.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#ffff",
        borderTopWidth:1,
        borderTopColor:"#e3e3e3",
        borderBottomColor:"#e3e3e3",
        marginTop:30,
        paddingVertical:10
    },
    title:{
        color:"#00a680"
    }
})