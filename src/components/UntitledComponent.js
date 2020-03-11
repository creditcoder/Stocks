import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function UntitledComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rect1}>
          <Text style={styles.subtotal}>Subtotal</Text>
        </View>
        <View style={styles.rect2}>
          <Text style={styles.taxes}>Taxes</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect: {
    width: 374,
    height: 147,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  rect1: {
    width: 374,
    height: 66,
    backgroundColor: "rgba(255,255,255,1)"
  },
  subtotal: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 29,
    marginLeft: 16
  },
  rect2: {
    width: 374,
    height: 66,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 7
  },
  taxes: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 26,
    marginLeft: 24
  }
});

export default UntitledComponent;
