import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialHelperTextBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>Username</Text>
      <Text style={styles.helper}></Text>
      <TextInput placeholder="Input" style={styles.textInput}></TextInput>
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
  helper: {
    color: "#000",
    opacity: 0.6,
    paddingTop: 8,
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "left"
  },
  textInput: {
    width: 375,
    height: 54,
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialHelperTextBox;
