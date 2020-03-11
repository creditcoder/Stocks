import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function MaterialCardWithImageAndTitle3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconRow}>
        <MaterialIconsIcon
          name="add-shopping-cart"
          style={styles.icon}
        ></MaterialIconsIcon>
        <Text style={styles.addProduct}>Add Product</Text>
        <EvilIconsIcon name="plus" style={styles.icon2}></EvilIconsIcon>
      </View>
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
    overflow: "hidden",
    flexDirection: "row"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  addProduct: {
    color: "#121212",
    fontFamily: "roboto-regular",
    marginLeft: 19,
    marginTop: 13
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 170
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 4,
    marginLeft: 9,
    marginTop: 18
  }
});

export default MaterialCardWithImageAndTitle3;
