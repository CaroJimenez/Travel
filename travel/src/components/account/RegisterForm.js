import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Button, Icon } from "react-native-elements";
import { useFormik } from "formik";
import * as Yup from "yup";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

export default function RegisterForm() {
  const navigation = useNavigation()
  const [password, setPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Formato de correo no válido")
        .required("Email obligatorio"),
      password: Yup.string().required("contraseña obligatoria"),
      repeatPassword: Yup.string()
        .required("contraseña obligatoria")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
    //registra un usuario
    onSubmit:async (formValue) => {
      try{
          const auth = getAuth()
        await createUserWithEmailAndPassword(
            auth, formValue.email, formValue.password
          )
         navigation.navigate("indexS")
         //navigation.goBack();
      }catch(error){
        Toast.show({
          type:"error",
          position:"top",
          text1:"error al registrar la cuenta"
        })
      }
    },
  });
  const showPass = () => {
    setPassword(!password);
  };
  const showRepeatPass = () => {
    setRepeatPassword(!repeatPassword);
  };

  return (
    <View style={styles.viewForm}>
      <Input
        placeholder="Correo Electrónico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
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
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Repetir contraseña"
        secureTextEntry={repeatPassword ? false : true}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={repeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showRepeatPass}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <Button
        title="Registrar"
        containerStyle={styles.containerBtn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
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
