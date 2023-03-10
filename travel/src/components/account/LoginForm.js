import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Button , Icon} from 'react-native-elements'
import { useFormik } from "formik";
import * as Yup from "yup";


export default function LoginForm() {
    const [password,setPassword] =useState(false);
    const showPass=()=>{
        setPassword(!password)
    }
  return (
    <View style={styles.viewForm}>
     <Input
        placeholder="Correo Electrónico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        placeholder="contraseña"
        secureTextEntry={password ? false : true}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={password ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showPass}
          />
        }
      />
      <Button
        title="Registrar"
        containerStyle={styles.containerBtn}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    viewForm: {
      marginTop: 30,
    },
    input: {
      marginTop: 20,
      width: "100%",
    },
    icon: {
      color: "#C1C1C1",
    },
    containerBtn: {
      width: "95%",
      marginTop: 20,
    },
    btn: {
      backgroundColor: "#0D5BD7",
    },
  });
  