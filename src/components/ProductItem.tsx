import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function ProductItem(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.proc}>
      <View>
        <Text style={styles.product1}>{props.item.productName}</Text>
      </View>
      <View>
        <Text style={styles.product1}>
          {props.item.serialNumber ? 'SN' : '-'}
        </Text>
      </View>
    </TouchableOpacity>
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
    overflow: 'hidden',
    left: 1,
    width: 375,
    height: 80,
    padding: 28,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  product1: {
    color: '#121212',
    fontFamily: 'roboto-regular',
  },
});

export default ProductItem;
