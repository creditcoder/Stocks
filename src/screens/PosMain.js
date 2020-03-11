import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialButtonPink1 from "../components/MaterialButtonPink1";
import MaterialHeader11 from "../components/MaterialHeader11";
import MaterialCardWithImageAndTitle3 from "../components/MaterialCardWithImageAndTitle3";
import UntitledComponent from "../components/UntitledComponent";

function PosMain(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <View style={styles.background}>
          <MaterialButtonPink1
            style={styles.chargeButton}
          ></MaterialButtonPink1>
        </View>
        <MaterialHeader11 style={styles.header}></MaterialHeader11>
        <MaterialCardWithImageAndTitle3
          style={styles.addProduct}
        ></MaterialCardWithImageAndTitle3>
        <View style={styles.productDisplay}></View>
        <UntitledComponent style={styles.calculationMenu}></UntitledComponent>
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
    left: 8,
    width: 360,
    height: 740,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  chargeButton: {
    width: 100,
    height: 36,
    marginTop: 585,
    marginLeft: 130
  },
  header: {
    top: 0,
    left: 9,
    width: 375,
    height: 56,
    position: "absolute"
  },
  addProduct: {
    top: 69,
    left: 9,
    width: 376,
    height: 76,
    position: "absolute"
  },
  productDisplay: {
    top: 155,
    left: 0,
    width: 376,
    height: 257,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  calculationMenu: {
    top: 427,
    left: 8,
    width: 374,
    height: 147,
    position: "absolute"
  },
  backgroundStack: {
    width: 385,
    height: 740,
    marginLeft: -8
  }
});

export default PosMain;
