import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';

function MaterialCardWithImageAndTitle3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.iconRow} onPress={props.proc}>
        <MaterialIconsIcon
          name="add-shopping-cart"
          style={styles.icon}></MaterialIconsIcon>
        <View style={styles.addProduct}>
          <Text style={{color: '#121212', fontFamily: 'roboto-regular'}}>
            Add Product
          </Text>
        </View>
        <EvilIconsIcon name="plus" style={styles.icon2}></EvilIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexWrap: 'nowrap',
    elevation: 3,
    borderRadius: 2,
    borderColor: '#CCC',
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    flexDirection: 'row',
  },
  icon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    flex: 1,
  },
  addProduct: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon2: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    flex: 1,
  },
  iconRow: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },
});

export default MaterialCardWithImageAndTitle3;
