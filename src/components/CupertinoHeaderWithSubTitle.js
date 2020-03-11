import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function CupertinoHeaderWithSubTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.leftIconButton}>
        <Text style={styles.leftText}>All Files</Text>
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          Title
        </Text>
        <Text numberOfLines={1} style={styles.subTitle}>
          SubTitle
        </Text>
      </View>
      <TouchableOpacity style={styles.rightIconButton}>
        <Text style={styles.rightText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    flexDirection: "row"
  },
  leftIconButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "center",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftText: {
    color: "#007AFF",
    alignSelf: "center",
    fontSize: 17
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#000",
    fontSize: 15,
    fontFamily: "roboto-regular",
    lineHeight: 15
  },
  subTitle: {
    color: "#8E8E93",
    fontSize: 12
  },
  rightIconButton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 8,
    paddingLeft: 8
  },
  rightText: {
    color: "#007AFF",
    fontSize: 17
  }
});

export default CupertinoHeaderWithSubTitle;
