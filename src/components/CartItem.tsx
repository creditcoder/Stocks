import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';

function CartItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.product1}>
        {props.item.productName}
        {'('}
        {props.item.SellingPrice}
        {'*'}
        {props.item.quantity}
        {')'}
      </Text>
      <TouchableOpacity onPress={props.plus} style={{flex: 1}}>
        <EvilIconsIcon name="plus" style={{fontSize: 20}}></EvilIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.minus} style={{flex: 1}}>
        <EvilIconsIcon name="minus" style={{fontSize: 20}}></EvilIconsIcon>
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
    left: 1,
    width: 375,
    height: 65,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  product1: {
    color: '#121212',
    fontFamily: 'roboto-regular',
    flex: 9,
  },
});

export default CartItem;
