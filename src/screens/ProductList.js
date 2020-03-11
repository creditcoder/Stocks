import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialHeader11 from "../components/MaterialHeader11";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialCardWithImageAndTitle4 from "../components/MaterialCardWithImageAndTitle4";

function ProductList(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <View style={styles.background}></View>
        <MaterialHeader11 style={styles.header}></MaterialHeader11>
        <MaterialSearchBar style={styles.productSearch}></MaterialSearchBar>
        <MaterialCardWithImageAndTitle4
          style={styles.productDisplay}
        ></MaterialCardWithImageAndTitle4>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    top: 0,
    left: 0,
    width: 360,
    height: 740,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  header: {
    top: 0,
    left: 0,
    width: 375,
    height: 56,
    position: "absolute"
  },
  productSearch: {
    top: 69,
    left: 0,
    width: 375,
    height: 56,
    position: "absolute"
  },
  productDisplay: {
    top: 134,
    left: 1,
    width: 375,
    height: 166,
    position: "absolute"
  },
  backgroundStack: {
    width: 376,
    height: 740
  }
});

export default ProductList;
