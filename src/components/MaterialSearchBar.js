import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TouchableOpacity style={styles.leftIconButton}>
          <MaterialCommunityIconsIcon
            name="cloud-search"
            style={styles.leftIcon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <View style={styles.inputStyleStack}>
          <TextInput placeholder="Search" style={styles.inputStyle}></TextInput>
          <TouchableOpacity style={styles.rightIconButton}>
            <MaterialCommunityIconsIcon
              name="close"
              style={styles.rightIcon2}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  rect1: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    flex: 1,
    marginBottom: 4,
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4
  },
  leftIconButton: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5
  },
  leftIcon2: {
    backgroundColor: "transparent",
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 24,
    opacity: 0.6
  },
  inputStyle: {
    top: 0,
    left: 0,
    width: 257,
    height: 48,
    color: "#000",
    position: "absolute",
    alignSelf: "flex-start",
    paddingRight: 5,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  rightIconButton: {
    top: 1,
    position: "absolute",
    alignItems: "center",
    right: 0,
    padding: 11
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 24,
    opacity: 0.6
  },
  inputStyleStack: {
    width: 290,
    height: 48,
    marginLeft: 21,
    marginTop: 4
  }
});

export default MaterialSearchBar;
