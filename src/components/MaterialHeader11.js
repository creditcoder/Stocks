import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialHeader11(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftIconButtonRow}>
        <TouchableOpacity style={styles.leftIconButton}>
          <MaterialCommunityIconsIcon
            name="menu"
            style={styles.leftIcon2}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>
          Cart ( 0 )
        </Text>
      </View>
      <View style={styles.leftIconButtonRowFiller}></View>
      <TouchableOpacity style={styles.rightIconButton}>
        <MaterialCommunityIconsIcon
          name="camera"
          style={styles.rightIcon2}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  leftIconButton: {
    opacity: 0.6,
    padding: 11
  },
  leftIcon2: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24,
    opacity: 0.6
  },
  title: {
    width: 81,
    height: 18,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    opacity: 0.6,
    fontSize: 18,
    fontFamily: "roboto-regular",
    lineHeight: 18,
    marginLeft: 93,
    marginTop: 11
  },
  leftIconButtonRow: {
    height: 46,
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 5
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    alignItems: "center",
    padding: 11,
    marginRight: 6
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,0.6)",
    fontFamily: "Roboto",
    fontSize: 35
  }
});

export default MaterialHeader11;
