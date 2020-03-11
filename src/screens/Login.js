import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import MaterialHelperTextBox2 from "../components/MaterialHelperTextBox2";
import MaterialHelperTextBox3 from "../components/MaterialHelperTextBox3";
import MaterialButtonPink from "../components/MaterialButtonPink";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.usernameTextBoxStackStack}>
        <View style={styles.usernameTextBoxStack}>
          <MaterialHelperTextBox2
            style={styles.usernameTextBox}
          ></MaterialHelperTextBox2>
          <MaterialHelperTextBox3
            style={styles.passwordTextBox}
          ></MaterialHelperTextBox3>
          <Image
            source={require("../assets/images/logo-light-text.png")}
            resizeMode="contain"
            style={styles.logoName}
          ></Image>
        </View>
        <Image
          source={require("../assets/images/logo-light.png")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
      </View>
      <MaterialButtonPink style={styles.loginButton}></MaterialButtonPink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  usernameTextBox: {
    top: 144,
    left: 1,
    width: 320,
    height: 78,
    position: "absolute"
  },
  passwordTextBox: {
    top: 221,
    left: 0,
    width: 320,
    height: 78,
    position: "absolute"
  },
  logoName: {
    top: 0,
    left: 64,
    width: 200,
    height: 200,
    position: "absolute"
  },
  usernameTextBoxStack: {
    top: 0,
    left: 0,
    width: 321,
    height: 299,
    position: "absolute"
  },
  logo: {
    top: 2,
    width: 96,
    height: 88,
    position: "absolute",
    left: 106
  },
  usernameTextBoxStackStack: {
    width: 321,
    height: 299,
    marginTop: 86,
    marginLeft: 26
  },
  loginButton: {
    width: 100,
    height: 36,
    marginTop: 41,
    marginLeft: 131
  }
});

export default Login;
