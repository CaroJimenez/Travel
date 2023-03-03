import {Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DetailsScreen(props) {
    const{navigation}=props
  return (
    <View>
      <Text>Details Screen</Text>
      <Button title='ir al inicio' 
      onPress={()=>navigation.navigate("index")}
      />
    </View>
  )
}

const styles = StyleSheet.create({})