import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

function MaterialButtonPink1(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={[styles.container, props.style]}
        onPress={props.proc}>
        <Text style={styles.caption}>Charge</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E91E63',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  caption: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'roboto-regular',
  },
});

export default MaterialButtonPink1;
