import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialHelperTextBox2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>Username</Text>
      <TextInput placeholder="Input" style={styles.inputStyle}></TextInput>
      <Text style={styles.helper}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  label: {
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  inputStyle: {
    width: 375,
    height: 40,
    color: "#000",
    alignSelf: "center",
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  helper: {
    color: "#000",
    opacity: 0.6,
    paddingTop: 8,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  }
});

export default MaterialHelperTextBox2;
