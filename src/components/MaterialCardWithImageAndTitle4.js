import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialCardWithImageAndTitle4(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}></View>
      <Text style={styles.product1}>Product 1{"\n"}Serial Number Item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  product1: {
    top: 54,
    left: 36,
    color: "#121212",
    position: "absolute",
    fontFamily: "roboto-regular"
  }
});

export default MaterialCardWithImageAndTitle4;
